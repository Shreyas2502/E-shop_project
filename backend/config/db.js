import mongoose from 'mongoose'
import color from 'colors'

const connectDB = async () => {

    try {
        const conn = await mongoose.connect("mongodb+srv://shrey:patel714Shrey@cluster0.dbouk.mongodb.net/fullwebsite?retryWrites=true&w=majority",{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB