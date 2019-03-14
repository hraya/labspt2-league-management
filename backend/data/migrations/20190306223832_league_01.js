exports.up = function(knex, Promise) {
  return knex.schema.createTable('league', league => {
    league.increments();
    league.string('name').notNullable();
    league
      .integer('admin_user_id')
      .unsigned()
      .notNullable();
    league
      .foreign('admin_user_id')
      .references('id')
      .on('users');
    league
      .integer('type')
      .unsigned()
      .notNullable();
    league
      .foreign('type')
      .references('id')
      .on('league_type');
    league.integer('teams_game_count');
    league.datetime('game_length');
    league.datetime('start_day');
    league.boolean('allow_monday');
    league.boolean('allow_tuesday');
    league.boolean('allow_wednesday');
    league.boolean('allow_thursday');
    league.boolean('allow_friday');
    league.boolean('allow_saturday');
    league.boolean('allow_sunday');
    league.datetime('monday_start_time');
    league.datetime('monday_end_time');
    league.datetime('tuesday_start_time');
    league.datetime('tuesday_end_time');
    league.datetime('wednesday_start_time');
    league.datetime('wednesday_end_time');
    league.datetime('thursday_start_time');
    league.datetime('thursday_end_time');
    league.datetime('friday_start_time');
    league.datetime('friday_end_time');
    league.datetime('saturday_start_time');
    league.datetime('saturday_end_time');
    league.datetime('sunday_start_time');
    league.datetime('sunday_end_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('league');
};
