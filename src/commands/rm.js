const { SlashCommandBuilder } = require('@discordjs/builders');
const {entersState,VoiceConnectionStatus,getVoiceConnection} = require('@discordjs/voice');
const { execute } = require('./dami');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('rm')
		.setDescription('Sterge o anumita piesa, daca nu bagi nici un nr sterge ultima piesa')
        .addStringOption(option => option.setName("pesa").setDescription("nr in queue al piesei")),
    async execute(interaction){
        const id = parseInt(interaction.options.getString("pesa"));
        let len = interaction.client.commands.get("dami").playlist.length
        if(id && id < len){
            interaction.client.commands.get("dami").playlist.splice(id,1);
        }else{
            interaction.client.commands.get("dami").playlist.pop();
        }
    }
}