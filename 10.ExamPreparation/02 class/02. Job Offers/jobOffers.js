class JobOffers {
    constructor(employe, possition) {
        this.employer = employe;
        this.position = possition;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {

        candidates.map(p => {
            let [name, education, yearsExpirience] = p.split('-');

            let candidate = this.jobCandidates.find(p => p.name == name);
            if (candidate) {
                if (candidate.yearsExpirience < yearsExpirience) {
                    candidate.yearsExpirience = yearsExpirience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExpirience });
            }
        });

        let result = [];
        this.jobCandidates.map(p => {
            result.push(p.name);
        });

        return `You successfully added candidates: ${result.join(', ')}.`;
    }

    jobOffer(chosenPerson) {

        let [name, minimalExperienc] = chosenPerson.split("-");

        minimalExperienc = Number(minimalExperienc)

        let person = this.jobCandidates.find(p => p.name == name);

        if (!person) {
            throw new Error(`${name} is not in the candidates list!`)
        } else if (person.yearsExpirience < minimalExperienc) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperienc} years.`)
        }
        person.yearsExpirience = "hired";

        return `Welcome aboard, our newest employee is ${name}.`


    }

    salaryBonus(name) {

        let person = this.jobCandidates.find(p => p.name == name);

        if (!person) {
            throw new Error(`${name} is not in the candidates list!`)
        }

        if (person.education == "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        }

        if (person.education == "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }

        if (person.education != "Master" || person.education != "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }

    }

    candidatesDatabase() {

        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!")
        }

        let result = [];
        this.jobCandidates
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(e => result.push(`${e.name}-${e.yearsExpirience}`));

        return `Candidates list:\n${result.join("\n")}`

    }

}

let Jobs = new JobOffers("Google", "Strategy Analyst");

console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

console.log(Jobs.jobOffer("John Doe-8"));

console.log(Jobs.jobOffer("Peter Parker-4"));

console.log(Jobs.salaryBonus("John Doe"));

console.log(Jobs.salaryBonus("Peter Parker"));