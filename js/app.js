/* setup your angular app here */

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

var produceApp = angular.module("ProduceApp", []);
 
 produceApp.controller("produceCtrl", ['$scope', function($scope){
   $scope.veggieCol = [];
   $scope.fruitCol = [];
   $scope.produce = fruits.concat(vegetables);
 
console.log('Produce', produce.length); 
   $scope.markAsVeg = function(item){
     var index = $scope.produce.indexOf(item)
     $scope.veggieCol.push(item);
     $scope.produce.splice(index, 1);
     if($scope.produce.length <= 0){
       test();
     }
   };
 
   $scope.markAsFruit = function(item){
     var index = $scope.produce.indexOf(item)
     $scope.fruitCol.push(item);
     $scope.produce.splice(index, 1);
     if($scope.produce.length <= 0){
       test();
     }
   };
 
   $scope.moveFruitToCenter = function(item){
     var index = $scope.fruitCol.indexOf(item)
     $scope.produce.push(item);
     $scope.fruitCol.splice(index, 1);
   };
 
   $scope.moveVegToCenter = function(item){
     var index = $scope.veggieCol.indexOf(item)
     $scope.produce.push(item);
     $scope.veggieCol.splice(index, 1);
   };
 
   var test = function(){
     compareArray($scope.fruitCol, fruits);
     compareArray($scope.veggieCol, vegetables);
   }
 
   var compareArray = function(array1, array2){
     array1.sort();
     array2.sort();
     for(var i = 0; i=array1.length; i++){
       for(var j = 0; j=array2.length; j++){
         if(array1[i] == array2[i]){
         }
       }
     }
   }
 
 }]);