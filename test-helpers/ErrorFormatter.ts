/*
* indicative-compiler
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { ErrorFormatterContract } from '../src/Contracts'

export class ErrorFormatter implements ErrorFormatterContract {
  private _errors: { field: string, message: string, validation: string }[] = []

  public addError (error: string | Error, field: string, rule: string): void {
    const message = error instanceof Error ? error.message : error
    this._errors.push({ field, message, validation: rule })
  }

  public toJSON (): null | { field: string, message: string, validation: string }[] {
    return this._errors.length ? this._errors : null
  }
}
