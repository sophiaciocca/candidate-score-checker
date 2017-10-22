const router = require("express").Router();
const { Candidate, Company } = require("../db/models");
module.exports = router;

router.get("/candidates/:candidateId", (req, res, next) => {
  console.log("what is candidateId on back end?", req.params.candidateId);
  let candidate, similarCompanies
  //first, get the candidate
  Candidate.findOne({
    where: {
      id: req.params.candidateId
    },
    include: [Company]
  })
  .then(foundCandidate => {
    candidate = foundCandidate
    //now, find people with the same title
    return Candidate.findAll({
      where: {
        title: candidate.title,
      },
      include: [Company]
    })
  })
  .then(foundSameTitlePeople => {
    //now, filter those people to people at similar companies
    let relevantPeople = foundSameTitlePeople.filter(person => {
      return areCompaniesSimilar(person.company, candidate.company)
    })
    let percentiles = calculatePercentiles(candidate, relevantPeople) //note: the candidate him/herself is included in the relevantPeople array
    res.json(relevantPeople);
  })
  .catch(next)
});

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

function areCompaniesSimilar(company1, company2) {
  return Math.abs(company1.fractal_index - company2.fractal_index) < 0.15
}

function calculatePercentiles(candidate, arrOfPeople) {

  let codeScore = candidate.coding_score
  let commScore = candidate.communication_score
  let arrOfCodeScores = arrOfPeople.map(person => person.coding_score).sort((a, b) => (a - b))
  let arrOfCommScores = arrOfPeople.map(person => person.communication_score).sort((a, b) => (a - b))


  //calculate *coding* percentile
  //the # of entries lower than or = to this one, DIVIDED by the total length of array
   let codePercentile = arrOfCodeScores.filter(entry => (codeScore >= entry)).length / arrOfCodeScores.length
   let commPercentile = arrOfCommScores.filter(entry => (commScore >= entry)).length / arrOfCommScores.length

   console.log('CODE PERCENTILE: ', codePercentile)
   console.log('COMM percentile: ', commPercentile)


  //calculate *communication* percentile





  // let codingScoreSum = 0;
  // arrOfPeople.forEach(person => {
  //   codingScoreSum += person.coding_score
  // })
  // const codingScoreAvg =
  // console.log('CODINGSCORESUM: ', codingScoreSum)

}

//get person (include company)
//get candidates who are (a) at similar companies, and (b) have the same job title as orig candidate
//calculate percentile compared to those people, in both coding and communication
