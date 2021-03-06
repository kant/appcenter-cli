/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Exception class.
 * @constructor
 * a exception
 *
 * @member {string} [reason] Reason of the exception
 * 
 * @member {string} [type] Type of the exception (NSSomethingException,
 * NullPointerException)
 * 
 * @member {array} frames frames of the excetpion
 * 
 * @member {boolean} [relevant] relevant exception (crashed)
 * 
 * @member {array} [innerExceptions]
 * 
 * @member {string} [platform] SDK/Platform this thread is beeing generated
 * from. Possible values include: 'ios', 'android', 'xamarin',
 * 'react-native', 'other'
 * 
 */
function Exception() {
}

/**
 * Defines the metadata of Exception
 *
 * @returns {object} metadata of Exception
 *
 */
Exception.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Exception',
    type: {
      name: 'Composite',
      className: 'Exception',
      modelProperties: {
        reason: {
          required: false,
          serializedName: 'reason',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        frames: {
          required: true,
          serializedName: 'frames',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StackFrameElementType',
                type: {
                  name: 'Composite',
                  className: 'StackFrame'
                }
            }
          }
        },
        relevant: {
          required: false,
          serializedName: 'relevant',
          type: {
            name: 'Boolean'
          }
        },
        innerExceptions: {
          required: false,
          serializedName: 'inner_exceptions',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ExceptionElementType',
                type: {
                  name: 'Composite',
                  className: 'Exception'
                }
            }
          }
        },
        platform: {
          required: false,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Exception;
