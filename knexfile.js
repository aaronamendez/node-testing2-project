// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const common = {
	client: 'sqlite3',
	useNullAsDefault: true,
	migrations: { directory: './data/migrations' },
	seeds: { directory: './data/seeds' },
};

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/dev.db3',
		},
		...common,
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};
