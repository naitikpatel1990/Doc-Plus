angular.module('demo.controllers', ['demo.services'])

.controller('DashCtrl', function($scope,$state,$localStorage,$ionicPopup) {
  $scope.arr =[];
  if(!$localStorage.info){ return; }
  $scope.arr = $localStorage.info;

  $scope.details = function(name,number){
    $localStorage.name = name;
    $state.go('tab.doctor-detail');
  }

  $scope.delete = function(item,index){
    var info = $localStorage.info;
    var data = $localStorage.data;
    var myPopup = $ionicPopup.show({
        title: 'Delete',
        subTitle: 'Do you want to delete this person?',
        scope: $scope,
        buttons: [
          { text: 'No',
            onTap: function(e) {
              return;
            } 
          },
          {
            text: '<b>Yes</b>',
            type: 'button-positive',
            onTap: function(e) {
              info.splice(index,1);
              for(var i = data.length - 1; i >= 0;i--){
                if(data[i].id == item.id){
                  data.splice(i,1);
                }
              }
              return;
            }
          }
        ]
      });
  }

  $scope.edit = function(item,index){
    var myPopup = $ionicPopup.show({
    template: 'Name:<input type="text" id="name" value="' + item.name + '"> <br /> Number:<input type="number" id="number" maxlength="10" minlength="10" value="' + item.number + '">',
    title: 'Edit Information',
    subTitle: 'Please Enter new details',
    scope: $scope,
    buttons: [
      { text: 'Cancel',
        onTap: function(e) {
         return;
        }
      },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
         for(var i = $localStorage.info.length - 1; i >= 0;i--){
            if($localStorage.info[i].id == item.id){
              $localStorage.info[i].name=$('#name').val();
              $localStorage.info[i].number=$('#number').val();
            }
          }

          for(var i = $localStorage.data.length - 1; i >= 0;i--){
            if($localStorage.data[i].id == item.id){
              $localStorage.data[i].name=$('#name').val();
              $localStorage.data[i].number=$('#number').val();
            }
          }
        }
      }
    ]
  });
  }
})

.controller('CalCtrl', function($scope,$localStorage,$state) {
    $("#myCalendar-1").ionCalendar({
      lang: "en",
      years: "2014-2020",
      onClick: function(date){
          $state.go('tab.daydetail',{date:date});
      }
  });
    $scope.SearchWord = function() {
      $state.go('tab.searchword');
      
  }

  $scope.SearchShift = function() {
      $state.go('tab.searchshift');
  }

  $scope.SearchName = function() {
      $state.go('tab.searchname');
  }

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('SearchWordCtrl', function($scope,$localStorage,$ionicPopup,$state) {
  $scope.arr = $localStorage.data;
  var data = $localStorage.data;
  $scope.delete = function(item,index){
    var myPopup = $ionicPopup.show({
      title: 'Delete',
      subTitle: 'Do you want to delete this record?',
      scope: $scope,
      buttons: [
        { text: 'No',
          onTap: function(e) {
            return;
          } 
        },
        {
          text: '<b>Yes</b>',
          type: 'button-positive',
          onTap: function(e) {
            for(var i = data.length - 1; i >= 0;i--){
              if(data[i].wid == item.wid){
                data.splice(i,1);
              }
            }
            return;         
          }
        }
      ]
    });
  }

  $scope.edit = function(item,index){
    alert("In Edit page");
    /*$state.go();*/
    /*if(item.shift == "Morning"){ 
      var shift = "<option value='Morning' selected>Morning</option><option value='Evening'>Evening</option><option value='Night'>Night</option>" 
    }else if(item.shift == "Evening"){
     var shift = "<option value='Morning'>Morning</option><option value='Evening' selected>Evening</option><option value='Night'>Night</option>"  
    }else if (item.shift == "Night"){
      var shift = "<option value='Morning'>Morning</option><option value='Evening'>Evening</option><option value='Night' selected>Night</option>" 
    }
    debugger;
    /*if(item.word == )*/
    /*var myPopup = $ionicPopup.show({
    template: 'Name:<input type="text" id="name" value="'+ item.name +'"> <br /><label class="item item-input item-select"><div class="input-label">Shift</div><select id="shift">'+ shift +'</select></label><br /><div class="input-label">Ward:</div><ul class="list"><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>OPD</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>ER</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>M-ECO</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>F-ECO</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>GYN-PED</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>3</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>4</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>5</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>ICU</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>OFF</li><li class="item checkbox"><label class="checkbox"><input type="checkbox"></label>LEAVE</li></ul> <br /> Date: <input type="date" id="date" value="'+ item.date +'">',
    title: 'Edit Information',
    subTitle: 'Please Enter new details',
    scope: $scope,
    buttons: [
      { text: 'Cancel',
        onTap: function(e) {
         return;
        }
      },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          for(var i = $localStorage.data.length - 1; i >= 0;i--){
            if($localStorage.data[i].wid == item.wid){
              $localStorage.data[i].name=$('#name').val();
              $localStorage.data[i].shift=$('#shift').val();
              $localStorage.data[i].word=$('#word').val();
              $localStorage.data[i].date=$('#date').val();
            }
          }
        }
      }
    ]
  });*/
  } 
})

.controller('SearchNameCtrl', function($scope,$localStorage,$ionicPopup) {
  $scope.arr = $localStorage.data;
  var data = $localStorage.data;
  $scope.delete = function(item,index){
    var myPopup = $ionicPopup.show({
      title: 'Delete',
      subTitle: 'Do you want to delete this record?',
      scope: $scope,
      buttons: [
        { text: 'No',
          onTap: function(e) {
            return;
          } 
        },
        {
          text: '<b>Yes</b>',
          type: 'button-positive',
          onTap: function(e) {
            for(var i = data.length - 1; i >= 0;i--){
                if(data[i].wid == item.wid){
                  data.splice(i,1);
                }
              }
              return;          }
        }
      ]
    });
  }

  $scope.edit = function(item,index){
    var myPopup = $ionicPopup.show({
    template: 'Name:<input type="text" id="name"> <br /><label class="item item-input item-select"><div class="input-label">Shift</div><select id="shift"><option value="Morning" selected>Morning</option><option value="Evening">Evening</option><option value="Night">Night</option></select></label><br /><label class="item item-input item-select"><div class="input-label">Word:</div><select id="word"<option value="OPD" selected>OPD</option><option value="ER">ER</option><option value="M-ECO">M-ECO</option><option value="F-ECO">F-ECO</option><option value="GYN-PED">GYN-PED</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="ICU">ICU</option><option value="OFF">OFF</option><option value="LEAVE">LEAVE</option></select></label> <br /> Date: <input type="date" id="date">',
    title: 'Edit Information',
    subTitle: 'Please Enter new details',
    scope: $scope,
    buttons: [
      { text: 'Cancel',
        onTap: function(e) {
         return;
        }
      },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          for(var i = $localStorage.data.length - 1; i >= 0;i--){
            if($localStorage.data[i].wid == item.wid){
              $localStorage.data[i].name=$('#name').val();
              $localStorage.data[i].shift=$('#shift').val();
              $localStorage.data[i].word=$('#word').val();
              $localStorage.data[i].date=$('#date').val();
            }
          }
        }
      }
    ]
  });
  }
})
.controller('SearchShiftCtrl', function($scope,$localStorage,$ionicPopup) {
  $scope.arr = $localStorage.data;
  $scope.Filter = {};
  $scope.Filter.Morning = "";
  $scope.Filter.Evening = "";
  $scope.Filter.Night = "";
  $scope.showShift = function(data){
     return data.shift === $scope.Filter.Morning || 
       data.shift === $scope.Filter.Evening ||
       data.shift === $scope.Filter.Night;
  };
  $scope.shift = [
    { text: "Morning", value: "Morning" ,},
    { text: "Evening", value: "Evening" },
    { text: "Night", value: "Night" }
  ];

  $scope.delete = function(item,index){
    var data = $localStorage.data;
    var myPopup = $ionicPopup.show({
      title: 'Delete',
      subTitle: 'Do you want to delete this record?',
      scope: $scope,
      buttons: [
        { text: 'No',
          onTap: function(e) {
            return;
          } 
        },
        {
          text: '<b>Yes</b>',
          type: 'button-positive',
          onTap: function(e) {
            for(var i = data.length - 1; i >= 0;i--){
                if(data[i].wid == item.wid){
                  data.splice(i,1);
                }
              }
              return;          }
        }
      ]
    });
  }

  $scope.edit = function(item,index){
    var myPopup = $ionicPopup.show({
    template: 'Name:<input type="text" id="name"> <br /><label class="item item-input item-select"><div class="input-label">Shift</div><select id="shift"><option value="Morning" selected>Morning</option><option value="Evening">Evening</option><option value="Night">Night</option></select></label><br /><label class="item item-input item-select"><div class="input-label">Word:</div><select id="word"<option value="OPD" selected>OPD</option><option value="ER">ER</option><option value="M-ECO">M-ECO</option><option value="F-ECO">F-ECO</option><option value="GYN-PED">GYN-PED</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="ICU">ICU</option><option value="OFF">OFF</option><option value="LEAVE">LEAVE</option></select></label> <br /> Date: <input type="date" id="date">',
    title: 'Edit Information',
    subTitle: 'Please Enter new details',
    scope: $scope,
    buttons: [
      { text: 'Cancel',
        onTap: function(e) {
         return;
        }
      },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          for(var i = $localStorage.data.length - 1; i >= 0;i--){
            if($localStorage.data[i].wid == item.wid){
              $localStorage.data[i].name=$('#name').val();
              $localStorage.data[i].shift=$('#shift').val();
              $localStorage.data[i].word=$('#word').val();
              $localStorage.data[i].date=$('#date').val();
            }
          }
        }
      }
    ]
  });
  }
})

.controller('DayDetailsCtrl', function($scope,$stateParams,$localStorage,$ionicPopup,$state) {
  $scope.date = $stateParams.date;
  var year = ($stateParams.date).slice(0,4);
  var month = ($stateParams.date).slice(5,7);
  var day = ($stateParams.date).slice(8,10);
  $scope.selecteddate = day + '/' + month + '/' + year;
  console.log($scope.date);
  var date3 = new Date($scope.date);
  $scope.day = date3.toDateString().substr(0,3);
  $scope.arr =[];
        var data = $localStorage.data;
        var result = $.grep(data, function(e){ 
                        var date1 = new Date(e.date);
                        var date2 = new Date($scope.date);
                        return date1.getYear() == date2.getYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate(); 
                      });
     
        $scope.morning = $.grep(result,function(e){ return e.shift == 'Morning' });
        $scope.evening = $.grep(result,function(e){ return e.shift == 'Evening' });
        $scope.night = $.grep(result,function(e){ return e.shift == 'Night' });
        
        $scope.arr = result;
        $scope.delete = function(item,index){
          $localStorage.shift = item.shift;
          var myPopup = $ionicPopup.show({
            title: 'Delete',
            subTitle: 'Do you want to delete this person?',
            scope: $scope,
            buttons: [
              { text: 'No',
                onTap: function(e) {
                  return;
                } 
              },
              {
                text: '<b>Yes</b>',
                type: 'button-positive',
                onTap: function(e) {
                  data.splice(index,1); 
                  $scope.morning = $.grep($scope.morning,function(a){ 
                    if(a.shift == $localStorage.shift){
                      $scope.morning.splice(index,1);
                    } 
                  });
                  $scope.evening = $.grep($scope.evening,function(a){ 
                    if(a.shift == $localStorage.shift){
                      $scope.evening.splice(index,1);
                    } 
                  });
                  $scope.night = $.grep($scope.night,function(a){ 
                    if(a.shift == $localStorage.shift){
                      $scope.night.splice(index,1);
                    } 
                  });
            
                }
              }
            ]
          });
      }

    $scope.edit = function(item,index){
        var myPopup = $ionicPopup.show({
        template: 'Name:<input type="text" id="name"> <br /><label class="item item-input item-select"><div class="input-label">Shift</div><select id="shift"><option value="Morning" selected>Morning</option><option value="Evening">Evening</option><option value="Night">Night</option></select></label><br /><label class="item item-input item-select"><div class="input-label">Word:</div><select id="word"<option value="OPD" selected>OPD</option><option value="ER">ER</option><option value="M-ECO">M-ECO</option><option value="F-ECO">F-ECO</option><option value="GYN-PED">GYN-PED</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="ICU">ICU</option><option value="OFF">OFF</option><option value="LEAVE">LEAVE</option></select></label> <br /> Date: <input type="date" id="date">',
        title: 'Edit Information',
        subTitle: 'Please Enter new details',
        scope: $scope,
        buttons: [
          { text: 'Cancel',
            onTap: function(e) {
             return;
            }
          },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              for(var i = $localStorage.data.length - 1; i >= 0;i--){
                if($localStorage.data[i].wid == item.wid){
                  $localStorage.data[i].name=$('#name').val();
                  $localStorage.data[i].shift=$('#shift').val();
                  $localStorage.data[i].word=$('#word').val();
                  $localStorage.data[i].date=$('#date').val();
                }
              }
            }

          }
        ]
      });
  }
})

.controller('DetailsCtrl', function($scope,$state,$ionicNavBarDelegate,$localStorage,$ionicPopup) {
  $scope.data = {};
  $scope.date = "";
   $("#myCalendar-1").ionCalendar({
      lang: "en",
      years: "2014-2020",
      onClick: function(date){
        $scope.date = date.slice(0,10);
      }
  });
   $scope.shift = [
    { text: "Morning", value: "Morning" ,},
    { text: "Evening", value: "Evening" },
    { text: "Night", value: "Night" }
  ];

  $scope.wordnumber = [
    { text: "OPD"},
    { text: "ER"},
    { text: "M-ECO"},
    { text: "F-ECO" },
    { text: "GYN-PED" },
    { text: "3" },
    { text: "4" },
    { text: "5" },
    { text: "ICU" },
    { text: "OFF" },
    { text: "1/2 OFF" },
    { text: "LEAVE" }
  ];

  var selectedname = $localStorage.name;
  $scope.selectedName = $localStorage.name;
  var data = $localStorage.info;
  var result = $.grep(data, function(e){ return e.name == selectedname; });
  $scope.arr = result;

  $scope.add = function() {
    if(!$localStorage.data){
      $localStorage.data = [];
    }
      var wordList = [];
      var wordListString = "";
      angular.forEach($scope.wordnumber,function(value){
        if(value.checked){
          wordList.push(value.text);
        }  
      })
      wordListString = wordList.join(",");

      if($scope.date == undefined){
        alert("Please Choose Date");
        return;
      }

      if($scope.data.shift == undefined){
        alert("Please Choose Shift");
        return;
      }

      if(wordListString == ""){
        alert("Please Choose minimum one word");
        return;
      }
      var year = ($scope.date).slice(0,4);
      var month = ($scope.date).slice(5,7);
      var day = ($scope.date).slice(8,10);
      $scope.selecteddate = day + '/' + month + '/' + year;
      if($localStorage.j == undefined){
        $localStorage.j = 0;
      }else{
        $localStorage.j++;
      }
      
      var data = {
                  "name": $scope.arr[0].name,
                  "number": $scope.arr[0].number,
                  "date": $scope.date,
                  "shift": $scope.data.shift,
                  "word": wordListString,
                  "id": $scope.arr[0].id,
                  "wid": $localStorage.j
      }
      $localStorage.data.push(data);

      var myPopup = $ionicPopup.show({
        title: 'Data Added for '+ $localStorage.name,
        subTitle: 'Do you want to add more data for same persons?',
        scope: $scope,
        buttons: [
          { text: 'No',
            onTap: function(e) {
              $state.go("tab.dash");
              
            } },
          {
            text: '<b>Yes</b>',
            type: 'button-positive',
            onTap: function(e) {
              $scope.data = {};
              $scope.item = {};
              return;
            }
          }
        ]
      });
      
  }

  $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  }
})

.controller('AccountCtrl', function($scope,$localStorage,$state,$ionicPopup) {
	$scope.user = {};
	$scope.data = {};
  if(!$localStorage.info){
    $localStorage.info = [];
  }

  if(!$localStorage.data){
    $localStorage.data = [];
  }
	$scope.update = function(){
    console.log("Add details");
    if($scope.user.name == undefined){
      alert("Please enter Name");
      return;
    }

    if($scope.user.number == undefined || $scope.user.number == ""){
      alert("Please enter Number");
      return;
    }

    if((($scope.user.number).toString()).length < 10){
      alert("Please enter 10 digits for number");
      $scope.user.number = "";
      return;
    }

    if((($scope.user.number).toString()).length > 10){
      alert("Please enter 10 digits for number");
      $scope.user.number = "";
      return;
    }

    if($localStorage.i == undefined){
      $localStorage.i = 0;
    }else{
      $localStorage.i++;
    }

    var data = {
            "name": $scope.user.name,
            "lastname": $scope.user.lastname,
            "number": $scope.user.number,
            "id":$localStorage.i
          }
    $localStorage.info.push(data);
     $state.go("tab.dash");
  }
 
    console.log("In Update function");
})

.controller('DocumentCtrl', function($scope, Document) {
    $scope.documents = [];
    $scope.document = null;
    // Get all the documents
    Document.all().then(function(documents){
        $scope.documents = documents;
    });
    // Get one document, example with id = 2
    Document.getById(2).then(function(document) {
        $scope.document = document;
})

});

