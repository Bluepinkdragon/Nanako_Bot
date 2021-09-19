const { SlashCommandBuilder, SlashCommandSubcommandGroupBuilder } = require('@discordjs/builders');
const { getVoiceConnection, AudioPlayer, PlayerSubscription, AudioPlayerStatus, NoSubscriberBehavior,  } = require('@discordjs/voice');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('q')
		.setDescription('Manage the queue')
        .addSubcommand(subcommand => subcommand
            .setName('add')
            .setDescription('Add song to q'))
        .addSubcommand(subcommand => subcommand
            .setName('remove')
            .setDescription('Remove song from q'))
        .addSubcommand(subcommand => subcommand
            .setName('loop')
            .setDescription('Loops the q')),
	async execute(interaction) {
        const connection = getVoiceConnection(interaction.member.guild.id)
        if (interaction.options.getSubcommand() == 'pause'){

        }
    }
};