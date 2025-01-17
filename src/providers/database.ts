/**
 * Define Database connection
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import mongoose from 'mongoose';
// import * as bluebird from 'bluebird';
import { MongoError } from 'mongodb';

import Locals from './locals';
// import Log from '../middlewares/Log';

export class Database {
	// Initialize your database pool
	public static init (): any {
		const dsn = Locals.config().mongooseUrl;
		const options = { useNewUrlParser: true, useUnifiedTopology: true };

		// (<any>mongoose).Promise = bluebird;

		mongoose.connect(dsn)
			.then(() => {
			console.log('connected to mongo Atlas Server');
            // Log.info('connected to mongo server at: ' + dsn);
		}).catch((error: MongoError) => {
				console.log('Failed to connect to the Mongo server!!');
				// Log.info('Failed to connect to the Mongo server!!');
				console.log(error);
				throw error;
		});
	}
}

export default mongoose;