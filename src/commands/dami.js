const { SlashCommandBuilder } = require('@discordjs/builders');
const {getVoiceConnection,createAudioResource,createAudioPlayer,AudioPlayerStatus} = require('@discordjs/voice');
const ytdl = require("discord-ytdl-core");
const { YToken } = require('../config.json');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(YToken);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dami')
		.setDescription('Iti dau!')
		.addStringOption(option => option.setName("pesa").setDescription("Numele pesei").setRequired(true)),
	async execute(interaction) {
		const piesa = interaction.options.getString("pesa");
		const connection = getVoiceConnection(interaction.guildId);
		const player = createAudioPlayer();
		let link;
		if(!(piesa.startsWith('https://'))){
			await youtube.search(piesa).then(results=>{
				link = results[0].url;
			})
			
		}else{
			link = piesa;

		}

		console.log(`Se canta pesa:${link}`);
		let stream = await ytdl(link, {
			filter: "audioonly",
			opusEncoded: false,
			fmt: "mp3",
			encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
		});

		const resource = createAudioResource(stream,{ inlineVolume:true });
		resource.volume.setVolume(0.5);

		player.play(resource);
		connection.subscribe(player);
		
		
		await interaction.reply("Stai ca o indoi amu coae");

		
	},
};
