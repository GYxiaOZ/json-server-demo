
var mockServer = "http://localhost:3000";

angular.module("mockInterceptor",[])

    .factory('mockInterceptor', function() {

        return {
            request: function(config) {

                if(config.url.startsWith("/api"))
                    config.url = mockServer + config.url;

                return config;
            }

        }
    })
    .config(function($httpProvider) {

        $httpProvider.interceptors.push('mockInterceptor');
    });

