(function () {
    angular.module('movieflix').controller('browseController', function($rootScope, $scope, $http, $uibModal) {

        $rootScope.movielist;
        $scope.newTitle = {};
        $http.get('data/movielist.json').success(function(data) {
            $rootScope.movielist = data;

        });


        //Pagination
        $scope.maxSize = 12;
        $scope.currentPage = 1;

        $scope.animationsEnabled = true;

        $scope.login = function() {
            var loginModalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'public/html/signin.html',
                controller: loginModalInstanceController
            })

        };

        $scope.add = function () {
            $scope.newTitle = {};
            var addTitleModalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'public/html/addTitle.html',
                controller: addTitleModalInstanceController,
                resolve: {
                    movielist: function () {
                        return $rootScope.movielist;
                    }
                }
            })
        };



        $scope.movieInfo = function (item) {
            $scope.item = item;
            var movieModalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl:'public/html/movieInfo.html',
                controller: modalInstanceController,
                resolve: {
                    item: function () {
                        return $scope.item;
                    }
                }
            });
        };

        $scope.editTitle = function (item) {
            $scope.item = item;
            var movieModalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl:'public/html/adminMovieInfo.html',
                controller: modalInstanceController,
                resolve: {
                    item: function () {
                        return $scope.item;
                    }
                }
            });
        }



    });



    var modalInstanceController = function ($scope, $rootScope, $uibModalInstance, item) {
        $scope.item = item;

        $scope.saveEdit = function () {
            $uibModalInstance.dismiss('cancel');
        }

        $scope.delete = function (item) {
            var index = $rootScope.movielist.indexOf(item);
            $rootScope.movielist.splice(index,1);
            $uibModalInstance.dismiss('cancel');

        }

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

    };

    var loginModalInstanceController = function ($scope, $uibModalInstance, $location) {

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    };

    var addTitleModalInstanceController = function ($scope, $uibModalInstance, $rootScope) {

        $scope.save = function (newListing) {
            $rootScope.movielist.push(newListing);
            $uibModalInstance.dismiss();

        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    };



})();
