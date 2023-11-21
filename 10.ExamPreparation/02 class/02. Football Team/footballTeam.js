class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        footballPlayers.map(p => {
            let [name, age, playerValue] = p.split("/");

            let player = this.invitedPlayers.find(p => p.name == name);
            if (player) {
                if (player.playerValue < playerValue) {
                    player.playerValue = playerValue;
                } 
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
            } 
        });

        let result = [];
        this.invitedPlayers.map(p => {
             result.push(p.name) 
            });

        return `You successfully invite ${result.join(", ")}.`;

    }

    signContract(selectedPlayer) {

        let [name, playerOffer] = selectedPlayer.split("/");

        playerOffer = Number(playerOffer)

        let player = this.invitedPlayers.find(p => p.name == name);

        if(!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else if (player.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - playerOffer} million more are needed to sign the contract!`)
        }

        player.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`

    }

    ageLimit(name, age) {

        let player = this.invitedPlayers.find(p => p.name == name);

        if(!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(player.age >= age) {
            return `${name} is above age limit!`
        }
        let ageDifference = age - player.age;
        if(player.age < age  && ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
        } else {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }

    }


    transferWindowResult() {

        let result = [];
        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(e => result.push(`Player ${e.name}-${e.playerValue}`));

        return `Players list:\n${result.join("\n")}`

    }
}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



