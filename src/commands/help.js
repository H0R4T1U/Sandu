const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('AJUTOR AJUTOR'),
    async execute(interaction){
        text = `
            Deci ai nevoie de ajutor, Ce pizdă!
avem aşa:
    /Hai -> cheamă botu
    /dami + nume-piesă sau link -> adaugă piesa
    /skip -> dă skip coae şi asta tre să ţi explic
    /slagare -> afişează queue-ul
            
No, chiar aşe greu o fo?
                
        `
        interaction.reply(text);
    }
}