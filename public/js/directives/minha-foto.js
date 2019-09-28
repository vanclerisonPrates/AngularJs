angular.module('alurapic')
    .directive('minhaFoto',function(){

        var ddo = {};

        ddo.restrict = "AE";
        ddo.transclude = true;

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.templateUrl = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return ddo;
    })