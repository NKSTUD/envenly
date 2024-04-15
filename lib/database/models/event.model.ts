import {model, models, Schema} from "mongoose";


// L'interface est pour connaitre les types de données du model Event dans le code typescript
export interface IEvent extends Document {
    _id: string;
    name: string;
    description: string;
    location: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    attendees: string[];
    price: string;
    isFree: boolean;
    category:{_id: string, name: string};
    organizer: {_id: string, firstName: string, lastName: string};
}

// Création du model Event

const eventSchema = new Schema({

    name: {type: String, required: true},
    description: {type: String,},
    location: {type: String},
    createdAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: false},
    startDateTime: {type: Date, default: Date.now},
    endDateTime: {type: Date, default: Date.now},
    attendees: {type: [String], required: false},
    price: {type: String},
    isFree: {type: Boolean, default: false},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type: Schema.Types.ObjectId, ref: 'User'},

});

const Event = models.Event || model('Event', eventSchema);

export default Event;
