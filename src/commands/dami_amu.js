const { SlashCommandBuilder } = require('@discordjs/builders');
const {getVoiceConnection,createAudioResource,createAudioPlayer,AudioPlayerStatus,joinVoiceChannel} = require('@discordjs/voice');
const ytdl = require("discord-ytdl-core");
const { YToken } = require('../config.json');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(YToken);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('damiamu')
		.setDescription('Iti dau ACUM!!')
		.addStringOption(option => option.setName("pesa").setDescription("Numele pesei").setRequired(true)),
	async execute(interaction) {

        let i = interaction.client.commands.get("dami").i;
        if(i&&interaction.client.commands.get("dami").player&&interaction.client.commands.get("dami").playlist){ //checks if all the variable have been initialized properly
            const piesa = interaction.options.getString("pesa");
            let connection = getVoiceConnection(interaction.guildId);
            if(!connection){
                const channel = interaction.member.voice.channel;
                connection = joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                });
            }

            let stream;
    
            await youtube.search(piesa).then(results=>{
    
                if(results){
                    interaction.client.commands.get("dami").playlist.splice(i,0,results[0]);
                }else{
                    interaction.reply("Couldn't find shit!")
                    return;
                }
                
            })
            interaction.client.commands.get("dami").player.stop();

            interaction.reply("Stai ca o indoi fix amu!")
        }else{
            await interaction.reply("Coae nu folosi dami acum daca nu ti dau nimic inca!")
        }
		
	},
};
