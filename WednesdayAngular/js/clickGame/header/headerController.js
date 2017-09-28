angular.module('clickGameApp').controller('headerController', ['gameService', function(gameService) {
    
        this.gameService = gameService;
        
    }])