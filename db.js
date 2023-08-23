let envelopesArr = [
    {
        name: 'test1',
        value: 4,
        category: 'food',
        envelopeId: 1,
    }
];

// common db to add data to, need to create a counter mechanism
let envelopeIdCounter = 2;

const db = {
    allEnvelopes: {
        data: envelopesArr,
    }
}

const addEnvToDatabase = (envelopeData) => {
    const newEnvelope = {
        name: envelopeData.name,
        value: envelopeData.value,
        category: envelopeData.category,
        envelopeId: envelopeIdCounter,
    }
    
    db.allEnvelopes.data.push(newEnvelope);
    envelopeIdCounter = envelopeIdCounter + 1;
    return db.allEnvelopes.data[db.allEnvelopes.data.length - 1]
}

const getAllFromEnvelopes = () => {
    return db.allEnvelopes.data;
};

const getEnvelopeById = (id) => {
    console.log(id);
    return db.allEnvelopes.data.find((element) => element.envelopeId === id);
};

module.exports = {
    addEnvToDatabase,
    getAllFromEnvelopes,
    getEnvelopeById,
}