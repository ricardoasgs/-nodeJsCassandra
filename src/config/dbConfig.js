import cassandra from "cassandra-driver";


//Connect to the cluster
const client = module.exports = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'demo' });

export default client;