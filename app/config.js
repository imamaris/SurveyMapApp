// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "imam-nb-map-ec2",
        url: "mongodb://imam:scotchrocks@ds051853.mongolab.com:51853/SurveyMapApp",
        port: 27017
    },

    local:
    {
        name: "imam-nb-map-local",
        url: "mongodb://localhost/SurveyMapApp",
        port: 27017
    },

    localtest:
    {
        name: "imam-nb-map-local",
        url: "mongodb://localhost/SurveyMapApp",
        port: 27017
    }

};
