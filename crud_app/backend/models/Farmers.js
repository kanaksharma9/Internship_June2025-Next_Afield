const farmerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    crops: [String],
    teamRole: {
        type: String,
        enum: ['Harvester', 'Irrigation', 'Equipment', 'Supervisor']
    }
}, {timestamps: true});
