/***********************************************************************
 * Copyright (c) 2017 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

/**
 * @file Contains the class definition of the SpecialCharacter class.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2017
 */

/**
 * @classdesc The SpecialCharacter class represents a reserved character in 
 * webpage URLs.  
 * @see https://en.wikipedia.org/wiki/Percent-encoding
 * @see https://tools.ietf.org/html/rfc3986
 */
class SpecialCharacter {
   constructor(char_in) {
      
      let _myChar = char_in;
      
      let _myCode = "";

      /**
       *  initPercentCode Initalizes the SpecialCharacter's percent code.
       * @param {number} char_in - The plain text version of the reserved 
       * character
       *
       */
      let initPercentCode = function(char_in) {
      	switch(char_in)
      	{

            case ' ':
               _myCode = "%20";
               break;

            case '!':
               _myCode = "%21";
               break;

            case '#':
               _myCode = "%23";
               break;

            case '$':
               _myCode = "%24";
               break;

            case '&':
               _myCode = "%26";
               break;

            case '\'':
               _myCode = "%27";
               break;

      		case '(':
      		   _myCode = "%28";
      		   break;

      		case')':
      		   _myCode = "%29";
      		   break;

      		case '*':
      		   _myCode = "%2A";
      		   break;

      		case '+':
      		   _myCode = "%2B";
      		   break;

      		case ',':
      		   _myCode = "%2C";
      		   break;

      		case '/':
      		   _myCode = "%2F";
      		   break;

      		case ':':
      		   _myCode = "%3A";
      		   break;

      		case ';':
      		   _myCode = "%3B";
      		   break;

      		case '=':
      		   _myCode = "%3D";
      		   break;

      		case '?':
      		   _myCode = "%3F";
      		   break;

      		case '@':
      		   _myCode = "%40";
      		   break;

      		case '[':
      		   _myCode = "%5B";
      		   break;

      		case ']':
      		   _myCode = "%5D";
      		   break;

            default:
               alert("invalid character passed into initPercentCode");

      	} // End of switch(char_in)
      	

      }; // End of let initCode = function(char_in)


      /**
       *"Getter method" for getting the SpecialCharacter object's percent code.
       * @Returns {String} The SpecialCharacter object's percent code.
       *
       */
      this.getCode = function() {
         return _myCode;

      }; // End of this.getCode = function ()

      /**
      * "Getter method" for getting a SpecialCharacter object's regular 
      * character.
      * @return {String} The plain text representation of the 
      * SpecialCharacter object'
      */
      this.getChar = function() 
      {
      	return _myChar;
      };

      /**
       * isEqualTo compares the SpecialCharacter object's plain text
       * representation to the incoming character and returns true
       * if the two are the same and false otherwise.
       * @param  {String}  rhs The incoming rhs for comparision.
       * @return {Boolean} True if the same; false otherwise.
       */
      this.isEqualTo = function(rhs)
      {
      	return (_myChar === rhs);
      };

      initPercentCode(_myChar);

   } // End of constructor(char_in)

} // End of class SpecialCharacter