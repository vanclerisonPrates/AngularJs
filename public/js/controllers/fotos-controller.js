angular.module('alurapic').controller('FotosController', function($scope,$resource){
    
    var recursoFoto = $resource('/v1/fotos/:fotoId');
    
    $scope.fotos  = [];
    $scope.filtro = '';
    $scope.mensagem = '';


    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    
        },function(erro){
            console.log(erro);
        });

 

    $scope.remover = function(foto){

        recursoFoto.delete({fotoId: foto._id}, function(){
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto,1);
            $scope.mensagem = 'Foto ' + foto.titulo + 'removida com Sucesso';
        },function(erro){
            console.log(erro);
            $scope.mensagem = 'Nao foi possivel apagar a foto' + foto.titulo;
            
        });
        
    };
})

// angular.module('alurapic').controller('FotosController', FotosController);

// FotosController.$inject = ["$scope", "$http"];

// function FotosController($scope, $http) {
//     $scope.fotos  = [];
//     $http.get('/v1/fotos')
//     .success(function(retorno){
//         $scope.fotos = retorno;
//     })

//     .error(function(erro){
//         console.log(erro)
//     })
// }