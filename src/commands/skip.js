const { SlashCommandBuilder } = require('@discordjs/builders');
const {getVoiceConnection,createAudioResource,createAudioPlayer,AudioPlayerStatus} = require('@discordjs/voice');
const ytdl = require("discord-ytdl-core");
const { YToken } = require('../config.json');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(YToken);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skip')
		.setDescription('Sar piesa cum sar gardu'),
    async execute(interaction){
        const connection = getVoiceConnection(interaction.guildId);
        if(connection){
            interaction.client.commands.get("dami").player.stop();
            
            await interaction.reply("Se rezolva Şefu!");
        }else{
            await interaction.reply("Nu is conectat la voce frate!");
        }
    }
}