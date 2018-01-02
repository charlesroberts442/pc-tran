/***********************************************************************
 * Copyright (c) 2017 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

/**
 * @file Contains the class definition of the CharCollection class.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

/**
 * @classdesc The CharCollection class represents collection of 
 *            reserved characters that are dealt with in the pc translator. 
 */
class CharCollection 
{

   constructor() 
   {

/* ======================= Big Arrow Callback methods ====================== */
  
      /**
       * processAllBtnClick is the callback function that processes button 
       * click events from the button that is for selecting all the 
       * special characters possible.
       *
       * @param  {Object} event The button click event 
       */
      let processAllBtnClick = (event) =>
      {
        let i = 0;
        
          for(i=0; i< _completeSet.length; ++i)
          {
            let someObject = new SpecialCharacter(_completeSet[i]);
            console.log(someObject);
            this.remove(someObject);
            this.add(someObject);
          
          }

          for(i=0; i< _buttCollection.length;++i)
          {
            _buttCollection[i].style.background = "#808080";
            _buttCollection[i].setAttribute("data-color", "#808080");
          }
        
      }; // processAllBtnClick function

      /**
       * processClearAllBtnClick is the callback function for the 
       * clear all special character button.
       * @param  {Object} event The button click event.
       */
      let processClearAllBtnClick = (event) =>
      {
        let i = 0;
        
          for(i=0; i< _completeSet.length; ++i)
          {
            let someObject = new SpecialCharacter(_completeSet[i]);
            console.log(someObject);
            this.remove(someObject);
            
          }

          for(i=0; i< _buttCollection.length;++i)
          {
            _buttCollection[i].style.background = "#d0d0d0";
            _buttCollection[i].setAttribute("data-color", "#d0d0d0");
          }
        
        this.logCollection();
  
      };

      /**
       * processUpperBtnClick is the callback function for the 
       * UpperCaseDigit button.
       * @param  {Object} event The button click event.
       */
      let processUpperBtnClick = (event) =>
      {
        if(_doLowerCase === true)
        {
          _doLowerCase = false;
          $("#upperCase").css('background-color', "#808080");
        }
        else
        {
          _doLowerCase = true;
          $("#upperCase").css('background-color', "#d0d0d0");
        }
      };  

      /**
       * processClearStringBtnClick is the callback function for the 
       * button that clears the string in the left text box.
       * @param  {Object} event The button click event.
       */
      let processClearStringBtnClick = (event) =>
      {
        $("#input_area").val(""); 
      };

      /**
       * processButtonClick is the callback for all the special character
       * buttons.
       * @param  {Object} event The button click event
       */
      let processButtonClick = (event) =>
      {
        let buttonColor = event.target.getAttribute("data-color");
        let buttonChar = event.target.getAttribute("data-char");

        let charObj = new SpecialCharacter(buttonChar);

        if (buttonColor === "#d0d0d0") // The button has NOT been pressed
        {
          event.target.style.background = "#808080";
          event.target.setAttribute("data-color", "#808080");
          collection.add(charObj);
        } 
        else if (buttonColor === "#808080") // The button HAS been pressed
        {
          event.target.style.background = "#d0d0d0";
          event.target.setAttribute("data-color", "#d0d0d0");
          collection.remove(charObj);
        } 

   }; // End of processButtonClick(event) 

   /**
    * doTranslate is the callback function for the click of the Translate
    * button.  This function is the top most level of creating the text
    * in the right hand text box.
    * @param  {Object} event The button click event.
    */
   let doTranslate = (event) =>
   {
      let textToTranslate = $("#input_area").val();
      let toTranslateIndex = 0;
      let translatedString = "";
      let foundOne = false;
      /* The following for loop will traverse the string to be translated
         calling the this.inspectChar method for each character in the
         string to be translated.
       */  
      for (toTranslateIndex = 0; 
         toTranslateIndex < textToTranslate.length; 
         ++toTranslateIndex) 
      {

          let stringToAdd = 
             this.inspectChar(textToTranslate[toTranslateIndex]);
          if(_doLowerCase)
          {
            translatedString += stringToAdd.toLowerCase();
          }
          else
          {
          translatedString +=stringToAdd;
          } 

      } // End of for(toTranslateIndex = 0; ...

      document.getElementById("output_paragraph").innerHTML = translatedString;

   }; // End of doTranslate


/* ========================== Private Data Members ========================= */

      /* Defining "this.objectVariable" will make the object's variables 
       * visible and subject to being changed by anyone who has access 
       * to the object.
       * 
       * One design pattern to keep private data private is to use the
       * constructor's closure for private data members.
       */  

      let _doLowerCase = true;

      let _buttCollection = [];
      
      let _collection = [];

      let _completeSet = [' ', '!', '#', '$', '&', '\'', 
                          '(', ')', '*', '+', ',', '/', 
                          ':', ';', '=', '?', '@', '[', ']'];

      let buttonDiv = document.getElementById("button_area");

      /* Create buttons for all the possible special characters */
      for (var i = 0; i < _completeSet.length; ++i)
      {

         let butt = document.createElement("button");
            
         if(_completeSet[i] === ' ')
         {
            butt.text = "{space}";
            butt.innerHTML = "{space}";
         }
         else
         {
            butt.text = _completeSet[i];
            butt.innerHTML = _completeSet[i];
         }
         
            butt.style.background = "#d0d0d0";
            butt.setAttribute("data-color", "#d0d0d0");
            butt.setAttribute("data-char", _completeSet[i]);
            butt.classList.add("specialChar");
            butt.addEventListener("click", processButtonClick);
            buttonDiv.appendChild(butt);
            _buttCollection.push(butt);

         } // End of for(var i=0; i<_completeSet.length; ++i)
         
         // Set the event listener for the translate button
         let tranButton = document.getElementById("translateButton");
         tranButton.addEventListener("click", doTranslate);

         // Set the event listener for the SelectAll button
         let allButton = document.getElementById("select_all");
         allButton.addEventListener(
             "click", processAllBtnClick);

         // Set the event listener for the Clear All button
         let clearAllButton = document.getElementById("clear_all");
         clearAllButton.addEventListener(
             "click", processClearAllBtnClick);

         // Set the event listener for the upper case digit button
         let upperButton = document.getElementById("upperCase");
         upperButton.addEventListener(
             "click", processUpperBtnClick);

         // Set the event listener for the clear string button
         let clearStringButton = document.getElementById("clear_text");
         clearStringButton.addEventListener(
             "click", processClearStringBtnClick);    

/* ========================= Public object methods ========================= */

      /**
       * inspectChar is a method that is the lower level of the process
       * of creating text for the right hand text box. This function
       * examines each special character object in the _collection array.
       * If a special character object is found that has the same plain
       * text as the incoming character, then the special character's
       * percent code is returned.  If no matches are found, the the 
       * incoming character is returned. 
       * @param  {String} char_in The incoming character.
       * @return {String} Either a single character or a percent code.
       */
      this.inspectChar = function(char_in) 
      {
         let keepGoing = (_collection.length > 0) ;
         let returnValue = char_in;
         let i = 0;
         while(keepGoing)
         {
          if(_collection[i].isEqualTo(char_in))
          {
            returnValue = _collection[i].getCode();
            keepGoing = false;
        
          }
          else
          {
            ++i;
            if(i >= _collection.length)
            {
              keepGoing = false;
          
            }
          }
         }
         return returnValue;
      };

      /**
       * Adds a special character object to the CharCollection object
       * 
       * @param {Object} objectToAdd The object to be added to the collection.
       */
      this.add = function(objectToAdd) 
      {
         _collection.push(objectToAdd);
      };

      /**
       * The getLength method returns the number of SpecialCharacter objects
       * in the CharCollection object. 
       * @return {Number} The number of SpecialCharacter objects
       * in the CharCollection object. 
       */
      this.getLength = function()
      {
        return _collection.length;
      };

      /**
       * remove removes a SpecialCharacter object from the CharCollection.
       * @param  {Object} objectToRemove The object to be removed.
       */
      this.remove = function(objectToRemove) 
      {
         for (var i = _collection.length - 1; i >= 0; i--) 
         {
            if (_collection[i].getChar() === objectToRemove.getChar()) 
            {
               _collection.splice(i, 1);
            }
         }
      };

      /**
       * logCollection sends a description of the CharCollection to the 
       * console.
       */
      this.logCollection = function() {

         console.log("The CharCollection object has " + 
            _collection.length + 
            " objects in it.");

         for (var i = 0; i < _collection.length; ++i) 
         {
            console.log(_collection[i].getChar());
         }
      };

   } // End of constructor()

} // End of class CharCollection