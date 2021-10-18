const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dami')
		.setDescription('Iti dau!'),
	async execute(message) {
        const link = message.content.split("/dami ")[1];
        console.log(link);
	},
};
