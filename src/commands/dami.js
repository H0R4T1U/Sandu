const { SlashCommandBuilder } = require('@discordjs/builders');
const {getVoiceConnection,createAudioResource,createAudioPlayer,AudioPlayerStatus} = require('@discordjs/voice');
const ytdl = require("discord-ytdl-core");
const { YToken } = require('../config.json');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('dami')
		.setDescription('Iti dau!')
		.addStringOption(option => option.setName("pesa").setDescription("Numele pesei").setRequired(true)),
	async execute(interaction) {
		const link = interaction.options.getString("pesa");
		const connection = getVoiceConnection(interaction.guildId);
		const player = createAudioPlayer();

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
