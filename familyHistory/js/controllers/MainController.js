app.controller('familyCtrl', function($scope) {
    $scope.personItems = 
    [
        {
            person: "Trenton Daniels: ",
            father: "Christopher Daniels, ",
            mother: "Cleone Pearce",
            done: false
        }
    ]
    
    
    $scope.familyAdd = function() {
        $scope.personItems.push(
            {
                person: $scope.personInput + ": ",
                father: $scope.fatherInput + ", ",
                mother: $scope.motherInput,
                done: false
                
            });
        $scope.familyInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.personItems;
        $scope.personItems = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.personItems.push(x);
        });
    };
});