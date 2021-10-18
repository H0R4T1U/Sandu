const { generateDependencyReport } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('test-voice')
		.setDescription('testam cestii'),
    async execute(interaction) {
        console.log(generateDependencyReport());
        
        
		
	},
};

