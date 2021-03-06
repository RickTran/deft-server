'use strict';
/**
 * Creates a Transaction.
 * @namespace yarp.Transaction
 * @class
 * @extends yarp.GMObject
 * @param {string} type - PrTransactionop type.
 * @param {number} value - Transaction value.
 * @param {string} source - Transaction source.
 * @param {string} [target=source] - Transaction target.
 * @param {Date} [date=new Date();] - Transaction date.
 */

class Transaction extends yarp.GMObject{
  constructor(id,type,value,source,target,date){
    super();
    if ((type && value && source) != null) {
      this._id = yarp.Transactions.length;
      this._type = type;
      this._value = value;
      this._source = source;
      this._target = target || source;
      this._date = (date) ? yarp.utils.getTimestamp(date) : yarp.utils.getTimestamp(new Date());
      yarp.mng.register(this);
      this.makeGetterSetter();
    }
  }

  /**
   * Load from object.
   * @static
   * @function load
   * @memberof yarp.Transaction
   * @param {object} object - Class object.
   */
  static load(obj){
    return new Transaction(obj._type,obj._value,obj._source,obj._target,obj._date);
  }
}

module.exports = Transaction;
