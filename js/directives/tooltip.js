angular.module("tooltipModule", [])
    .directive("changeColor", function(){
        return {
            link: function(scope, element, attrs) {
                        if (element.text) {
                            element.text("TestTestTest");
                        }
                        element.html("<p style='color:red'>TestTestTestTest</p>");
                  }
            }
        }
    )
    .directive("greet", function ($parse) {
    return {
        template: "<p>{{greet}}<input ng-model='greet' /></p>",
        replace: true,
        scope: {
            greet: "="
        }
    }
});