import Enzyme from 'enzyme';
import DotEnv from 'dotenv';
import ReactAdapter from 'enzyme-adapter-react-16';

// Expose test environment variables
DotEnv.config({
    path: '.env.test'
});

// Enable Enzyme react adapter
Enzyme.configure({
    adapter: new ReactAdapter()
});