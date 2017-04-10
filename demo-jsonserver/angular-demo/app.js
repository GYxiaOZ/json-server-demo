var app = angular.module("app", ['ui.bootstrap', 'mockInterceptor']);

app.service('demoService', function ($http) {

    var usersApi = "/api/v1/users";

    var userApi = "/api/v1/users/:id";

    /**
     * 加载用户列表
     * @param pi 页码
     * @param ps 每页数量
     * @returns {Promise.<TResult>|*}
     */
    this.loadUsers = function (pi, ps) {

        var params = {pi:pi, ps:ps};

        return $http.get(usersApi, {params: params}).then(function (res) {

            /**
             * 用户总条数
             */
            res.data.total = res.headers('x-total-count') * 1 || res.data.length;

            return res.data;
        });
    }

    /**
     * 删除用户
     * @param id   用户id
     * @returns {Promise.<TResult>|*}
     */
    this.removeUser = function (id) {

        return $http.delete(userApi.replace(':id', id)).then(function (res) {

            return res.data;
        });
    }

    /**
     * 增加用户
     * @param name
     * @param avatar
     * @returns {Promise.<TResult>|*}
     */
    this.addUser = function (name, avatar) {

        return $http.post(usersApi, {name: name, avatar: avatar}).then(function (res) {

            return res.data;
        });
    }

})

app.controller("demoCtrl", function ($scope, demoService) {

    $scope.pi = 1;

    $scope.ps = 4;

    var load;

    (load = () => {
        demoService.loadUsers($scope.pi, $scope.ps).then( users => $scope.users = users );
    })();

    $scope.$watch('pi', load);


    /**
     * 删除用户
     * @param id
     * @param index
     */
    $scope.remove = (id, index) => {

        demoService.removeUser(id).then( () => $scope.users.splice(index, 1) );
    }

    /**
     * 增加用户
     * @param name
     * @param avatar
     */
    $scope.add = (name, avatar) => {

        demoService.addUser(name, avatar).then( user => $scope.users.push(user) );
    }

})