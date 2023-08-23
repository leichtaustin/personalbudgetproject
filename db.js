let envelopesArr = [
    {
        name: 'test1',
        value: 4,
        category: 'food'
    }
];

// common db to add data to, need to create a counter mechanism
const db = {
    allEnvelopes: {
        data: envelopesArr,
        nextId: 1,
    }
}

const addEnvToDatabase = (envelopeData) => {
    db.allEnvelopes.data.push(envelopeData);
    return db.allEnvelopes.data[db.allEnvelopes.data.length - 1]
}

const getAllFromEnvelopes = () => {
    return db.allEnvelopes.data;
}

module.exports = {
    addEnvToDatabase,
    getAllFromEnvelopes,
}