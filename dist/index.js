import { createRequire as __WEBPACK_EXTERNAL_createRequire } from 'module'
/******/ var __webpack_modules__ = {
  /***/ 7351: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.issue = exports.issueCommand = void 0
    const os = __importStar(__nccwpck_require__(2037))
    const utils_1 = __nccwpck_require__(5278)
    /**
     * Commands
     *
     * Command Format:
     *   ::name key=value,key=value::message
     *
     * Examples:
     *   ::warning::This is the message
     *   ::set-env name=MY_VAR::some value
     */
    function issueCommand(command, properties, message) {
      const cmd = new Command(command, properties, message)
      process.stdout.write(cmd.toString() + os.EOL)
    }
    exports.issueCommand = issueCommand
    function issue(name, message = '') {
      issueCommand(name, {}, message)
    }
    exports.issue = issue
    const CMD_STRING = '::'
    class Command {
      constructor(command, properties, message) {
        if (!command) {
          command = 'missing.command'
        }
        this.command = command
        this.properties = properties
        this.message = message
      }
      toString() {
        let cmdStr = CMD_STRING + this.command
        if (this.properties && Object.keys(this.properties).length > 0) {
          cmdStr += ' '
          let first = true
          for (const key in this.properties) {
            if (this.properties.hasOwnProperty(key)) {
              const val = this.properties[key]
              if (val) {
                if (first) {
                  first = false
                } else {
                  cmdStr += ','
                }
                cmdStr += `${key}=${escapeProperty(val)}`
              }
            }
          }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`
        return cmdStr
      }
    }
    function escapeData(s) {
      return utils_1
        .toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
    }
    function escapeProperty(s) {
      return utils_1
        .toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C')
    }
    //# sourceMappingURL=command.js.map

    /***/
  },

  /***/ 2186: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.getIDToken =
      exports.getState =
      exports.saveState =
      exports.group =
      exports.endGroup =
      exports.startGroup =
      exports.info =
      exports.notice =
      exports.warning =
      exports.error =
      exports.debug =
      exports.isDebug =
      exports.setFailed =
      exports.setCommandEcho =
      exports.setOutput =
      exports.getBooleanInput =
      exports.getMultilineInput =
      exports.getInput =
      exports.addPath =
      exports.setSecret =
      exports.exportVariable =
      exports.ExitCode =
        void 0
    const command_1 = __nccwpck_require__(7351)
    const file_command_1 = __nccwpck_require__(717)
    const utils_1 = __nccwpck_require__(5278)
    const os = __importStar(__nccwpck_require__(2037))
    const path = __importStar(__nccwpck_require__(1017))
    const oidc_utils_1 = __nccwpck_require__(8041)
    /**
     * The code to exit an action
     */
    var ExitCode
    ;(function (ExitCode) {
      /**
       * A code indicating that the action was successful
       */
      ExitCode[(ExitCode['Success'] = 0)] = 'Success'
      /**
       * A code indicating that the action was a failure
       */
      ExitCode[(ExitCode['Failure'] = 1)] = 'Failure'
    })((ExitCode = exports.ExitCode || (exports.ExitCode = {})))
    //-----------------------------------------------------------------------
    // Variables
    //-----------------------------------------------------------------------
    /**
     * Sets env variable for this action and future actions in the job
     * @param name the name of the variable to set
     * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function exportVariable(name, val) {
      const convertedVal = utils_1.toCommandValue(val)
      process.env[name] = convertedVal
      const filePath = process.env['GITHUB_ENV'] || ''
      if (filePath) {
        return file_command_1.issueFileCommand(
          'ENV',
          file_command_1.prepareKeyValueMessage(name, val)
        )
      }
      command_1.issueCommand('set-env', { name }, convertedVal)
    }
    exports.exportVariable = exportVariable
    /**
     * Registers a secret which will get masked from logs
     * @param secret value of the secret
     */
    function setSecret(secret) {
      command_1.issueCommand('add-mask', {}, secret)
    }
    exports.setSecret = setSecret
    /**
     * Prepends inputPath to the PATH (for this action and future actions)
     * @param inputPath
     */
    function addPath(inputPath) {
      const filePath = process.env['GITHUB_PATH'] || ''
      if (filePath) {
        file_command_1.issueFileCommand('PATH', inputPath)
      } else {
        command_1.issueCommand('add-path', {}, inputPath)
      }
      process.env[
        'PATH'
      ] = `${inputPath}${path.delimiter}${process.env['PATH']}`
    }
    exports.addPath = addPath
    /**
     * Gets the value of an input.
     * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
     * Returns an empty string if the value is not defined.
     *
     * @param     name     name of the input to get
     * @param     options  optional. See InputOptions.
     * @returns   string
     */
    function getInput(name, options) {
      const val =
        process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || ''
      if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`)
      }
      if (options && options.trimWhitespace === false) {
        return val
      }
      return val.trim()
    }
    exports.getInput = getInput
    /**
     * Gets the values of an multiline input.  Each value is also trimmed.
     *
     * @param     name     name of the input to get
     * @param     options  optional. See InputOptions.
     * @returns   string[]
     *
     */
    function getMultilineInput(name, options) {
      const inputs = getInput(name, options)
        .split('\n')
        .filter((x) => x !== '')
      if (options && options.trimWhitespace === false) {
        return inputs
      }
      return inputs.map((input) => input.trim())
    }
    exports.getMultilineInput = getMultilineInput
    /**
     * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
     * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
     * The return value is also in boolean type.
     * ref: https://yaml.org/spec/1.2/spec.html#id2804923
     *
     * @param     name     name of the input to get
     * @param     options  optional. See InputOptions.
     * @returns   boolean
     */
    function getBooleanInput(name, options) {
      const trueValue = ['true', 'True', 'TRUE']
      const falseValue = ['false', 'False', 'FALSE']
      const val = getInput(name, options)
      if (trueValue.includes(val)) return true
      if (falseValue.includes(val)) return false
      throw new TypeError(
        `Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
          `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``
      )
    }
    exports.getBooleanInput = getBooleanInput
    /**
     * Sets the value of an output.
     *
     * @param     name     name of the output to set
     * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function setOutput(name, value) {
      const filePath = process.env['GITHUB_OUTPUT'] || ''
      if (filePath) {
        return file_command_1.issueFileCommand(
          'OUTPUT',
          file_command_1.prepareKeyValueMessage(name, value)
        )
      }
      process.stdout.write(os.EOL)
      command_1.issueCommand(
        'set-output',
        { name },
        utils_1.toCommandValue(value)
      )
    }
    exports.setOutput = setOutput
    /**
     * Enables or disables the echoing of commands into stdout for the rest of the step.
     * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
     *
     */
    function setCommandEcho(enabled) {
      command_1.issue('echo', enabled ? 'on' : 'off')
    }
    exports.setCommandEcho = setCommandEcho
    //-----------------------------------------------------------------------
    // Results
    //-----------------------------------------------------------------------
    /**
     * Sets the action status to failed.
     * When the action exits it will be with an exit code of 1
     * @param message add error issue message
     */
    function setFailed(message) {
      process.exitCode = ExitCode.Failure
      error(message)
    }
    exports.setFailed = setFailed
    //-----------------------------------------------------------------------
    // Logging Commands
    //-----------------------------------------------------------------------
    /**
     * Gets whether Actions Step Debug is on or not
     */
    function isDebug() {
      return process.env['RUNNER_DEBUG'] === '1'
    }
    exports.isDebug = isDebug
    /**
     * Writes debug message to user log
     * @param message debug message
     */
    function debug(message) {
      command_1.issueCommand('debug', {}, message)
    }
    exports.debug = debug
    /**
     * Adds an error issue
     * @param message error issue message. Errors will be converted to string via toString()
     * @param properties optional properties to add to the annotation.
     */
    function error(message, properties = {}) {
      command_1.issueCommand(
        'error',
        utils_1.toCommandProperties(properties),
        message instanceof Error ? message.toString() : message
      )
    }
    exports.error = error
    /**
     * Adds a warning issue
     * @param message warning issue message. Errors will be converted to string via toString()
     * @param properties optional properties to add to the annotation.
     */
    function warning(message, properties = {}) {
      command_1.issueCommand(
        'warning',
        utils_1.toCommandProperties(properties),
        message instanceof Error ? message.toString() : message
      )
    }
    exports.warning = warning
    /**
     * Adds a notice issue
     * @param message notice issue message. Errors will be converted to string via toString()
     * @param properties optional properties to add to the annotation.
     */
    function notice(message, properties = {}) {
      command_1.issueCommand(
        'notice',
        utils_1.toCommandProperties(properties),
        message instanceof Error ? message.toString() : message
      )
    }
    exports.notice = notice
    /**
     * Writes info to log with console.log.
     * @param message info message
     */
    function info(message) {
      process.stdout.write(message + os.EOL)
    }
    exports.info = info
    /**
     * Begin an output group.
     *
     * Output until the next `groupEnd` will be foldable in this group
     *
     * @param name The name of the output group
     */
    function startGroup(name) {
      command_1.issue('group', name)
    }
    exports.startGroup = startGroup
    /**
     * End an output group.
     */
    function endGroup() {
      command_1.issue('endgroup')
    }
    exports.endGroup = endGroup
    /**
     * Wrap an asynchronous function call in a group.
     *
     * Returns the same type as the function itself.
     *
     * @param name The name of the group
     * @param fn The function to wrap in the group
     */
    function group(name, fn) {
      return __awaiter(this, void 0, void 0, function* () {
        startGroup(name)
        let result
        try {
          result = yield fn()
        } finally {
          endGroup()
        }
        return result
      })
    }
    exports.group = group
    //-----------------------------------------------------------------------
    // Wrapper action state
    //-----------------------------------------------------------------------
    /**
     * Saves state for current action, the state can only be retrieved by this action's post job execution.
     *
     * @param     name     name of the state to store
     * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function saveState(name, value) {
      const filePath = process.env['GITHUB_STATE'] || ''
      if (filePath) {
        return file_command_1.issueFileCommand(
          'STATE',
          file_command_1.prepareKeyValueMessage(name, value)
        )
      }
      command_1.issueCommand(
        'save-state',
        { name },
        utils_1.toCommandValue(value)
      )
    }
    exports.saveState = saveState
    /**
     * Gets the value of an state set by this action's main execution.
     *
     * @param     name     name of the state to get
     * @returns   string
     */
    function getState(name) {
      return process.env[`STATE_${name}`] || ''
    }
    exports.getState = getState
    function getIDToken(aud) {
      return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud)
      })
    }
    exports.getIDToken = getIDToken
    /**
     * Summary exports
     */
    var summary_1 = __nccwpck_require__(1327)
    Object.defineProperty(exports, 'summary', {
      enumerable: true,
      get: function () {
        return summary_1.summary
      }
    })
    /**
     * @deprecated use core.summary
     */
    var summary_2 = __nccwpck_require__(1327)
    Object.defineProperty(exports, 'markdownSummary', {
      enumerable: true,
      get: function () {
        return summary_2.markdownSummary
      }
    })
    /**
     * Path exports
     */
    var path_utils_1 = __nccwpck_require__(2981)
    Object.defineProperty(exports, 'toPosixPath', {
      enumerable: true,
      get: function () {
        return path_utils_1.toPosixPath
      }
    })
    Object.defineProperty(exports, 'toWin32Path', {
      enumerable: true,
      get: function () {
        return path_utils_1.toWin32Path
      }
    })
    Object.defineProperty(exports, 'toPlatformPath', {
      enumerable: true,
      get: function () {
        return path_utils_1.toPlatformPath
      }
    })
    //# sourceMappingURL=core.js.map

    /***/
  },

  /***/ 717: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    // For internal use, subject to change.
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.prepareKeyValueMessage = exports.issueFileCommand = void 0
    // We use any as a valid input type
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const fs = __importStar(__nccwpck_require__(7147))
    const os = __importStar(__nccwpck_require__(2037))
    const uuid_1 = __nccwpck_require__(5840)
    const utils_1 = __nccwpck_require__(5278)
    function issueFileCommand(command, message) {
      const filePath = process.env[`GITHUB_${command}`]
      if (!filePath) {
        throw new Error(
          `Unable to find environment variable for file command ${command}`
        )
      }
      if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`)
      }
      fs.appendFileSync(
        filePath,
        `${utils_1.toCommandValue(message)}${os.EOL}`,
        {
          encoding: 'utf8'
        }
      )
    }
    exports.issueFileCommand = issueFileCommand
    function prepareKeyValueMessage(key, value) {
      const delimiter = `ghadelimiter_${uuid_1.v4()}`
      const convertedValue = utils_1.toCommandValue(value)
      // These should realistically never happen, but just in case someone finds a
      // way to exploit uuid generation let's not allow keys or values that contain
      // the delimiter.
      if (key.includes(delimiter)) {
        throw new Error(
          `Unexpected input: name should not contain the delimiter "${delimiter}"`
        )
      }
      if (convertedValue.includes(delimiter)) {
        throw new Error(
          `Unexpected input: value should not contain the delimiter "${delimiter}"`
        )
      }
      return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`
    }
    exports.prepareKeyValueMessage = prepareKeyValueMessage
    //# sourceMappingURL=file-command.js.map

    /***/
  },

  /***/ 8041: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.OidcClient = void 0
    const http_client_1 = __nccwpck_require__(6255)
    const auth_1 = __nccwpck_require__(5526)
    const core_1 = __nccwpck_require__(2186)
    class OidcClient {
      static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
          allowRetries: allowRetry,
          maxRetries: maxRetry
        }
        return new http_client_1.HttpClient(
          'actions/oidc-client',
          [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())],
          requestOptions
        )
      }
      static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN']
        if (!token) {
          throw new Error(
            'Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable'
          )
        }
        return token
      }
      static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
        if (!runtimeUrl) {
          throw new Error(
            'Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable'
          )
        }
        return runtimeUrl
      }
      static getCall(id_token_url) {
        var _a
        return __awaiter(this, void 0, void 0, function* () {
          const httpclient = OidcClient.createHttpClient()
          const res = yield httpclient.getJson(id_token_url).catch((error) => {
            throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`)
          })
          const id_token =
            (_a = res.result) === null || _a === void 0 ? void 0 : _a.value
          if (!id_token) {
            throw new Error('Response json body do not have ID Token field')
          }
          return id_token
        })
      }
      static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
          try {
            // New ID Token is requested from action service
            let id_token_url = OidcClient.getIDTokenUrl()
            if (audience) {
              const encodedAudience = encodeURIComponent(audience)
              id_token_url = `${id_token_url}&audience=${encodedAudience}`
            }
            core_1.debug(`ID token url is ${id_token_url}`)
            const id_token = yield OidcClient.getCall(id_token_url)
            core_1.setSecret(id_token)
            return id_token
          } catch (error) {
            throw new Error(`Error message: ${error.message}`)
          }
        })
      }
    }
    exports.OidcClient = OidcClient
    //# sourceMappingURL=oidc-utils.js.map

    /***/
  },

  /***/ 2981: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0
    const path = __importStar(__nccwpck_require__(1017))
    /**
     * toPosixPath converts the given path to the posix form. On Windows, \\ will be
     * replaced with /.
     *
     * @param pth. Path to transform.
     * @return string Posix path.
     */
    function toPosixPath(pth) {
      return pth.replace(/[\\]/g, '/')
    }
    exports.toPosixPath = toPosixPath
    /**
     * toWin32Path converts the given path to the win32 form. On Linux, / will be
     * replaced with \\.
     *
     * @param pth. Path to transform.
     * @return string Win32 path.
     */
    function toWin32Path(pth) {
      return pth.replace(/[/]/g, '\\')
    }
    exports.toWin32Path = toWin32Path
    /**
     * toPlatformPath converts the given path to a platform-specific path. It does
     * this by replacing instances of / and \ with the platform-specific path
     * separator.
     *
     * @param pth The path to platformize.
     * @return string The platform-specific path.
     */
    function toPlatformPath(pth) {
      return pth.replace(/[/\\]/g, path.sep)
    }
    exports.toPlatformPath = toPlatformPath
    //# sourceMappingURL=path-utils.js.map

    /***/
  },

  /***/ 1327: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.summary =
      exports.markdownSummary =
      exports.SUMMARY_DOCS_URL =
      exports.SUMMARY_ENV_VAR =
        void 0
    const os_1 = __nccwpck_require__(2037)
    const fs_1 = __nccwpck_require__(7147)
    const { access, appendFile, writeFile } = fs_1.promises
    exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY'
    exports.SUMMARY_DOCS_URL =
      'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary'
    class Summary {
      constructor() {
        this._buffer = ''
      }
      /**
       * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
       * Also checks r/w permissions.
       *
       * @returns step summary file path
       */
      filePath() {
        return __awaiter(this, void 0, void 0, function* () {
          if (this._filePath) {
            return this._filePath
          }
          const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR]
          if (!pathFromEnv) {
            throw new Error(
              `Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`
            )
          }
          try {
            yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK)
          } catch (_a) {
            throw new Error(
              `Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`
            )
          }
          this._filePath = pathFromEnv
          return this._filePath
        })
      }
      /**
       * Wraps content in an HTML tag, adding any HTML attributes
       *
       * @param {string} tag HTML tag to wrap
       * @param {string | null} content content within the tag
       * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
       *
       * @returns {string} content wrapped in HTML element
       */
      wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
          .map(([key, value]) => ` ${key}="${value}"`)
          .join('')
        if (!content) {
          return `<${tag}${htmlAttrs}>`
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`
      }
      /**
       * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
       *
       * @param {SummaryWriteOptions} [options] (optional) options for write operation
       *
       * @returns {Promise<Summary>} summary instance
       */
      write(options) {
        return __awaiter(this, void 0, void 0, function* () {
          const overwrite = !!(options === null || options === void 0
            ? void 0
            : options.overwrite)
          const filePath = yield this.filePath()
          const writeFunc = overwrite ? writeFile : appendFile
          yield writeFunc(filePath, this._buffer, { encoding: 'utf8' })
          return this.emptyBuffer()
        })
      }
      /**
       * Clears the summary buffer and wipes the summary file
       *
       * @returns {Summary} summary instance
       */
      clear() {
        return __awaiter(this, void 0, void 0, function* () {
          return this.emptyBuffer().write({ overwrite: true })
        })
      }
      /**
       * Returns the current summary buffer as a string
       *
       * @returns {string} string of summary buffer
       */
      stringify() {
        return this._buffer
      }
      /**
       * If the summary buffer is empty
       *
       * @returns {boolen} true if the buffer is empty
       */
      isEmptyBuffer() {
        return this._buffer.length === 0
      }
      /**
       * Resets the summary buffer without writing to summary file
       *
       * @returns {Summary} summary instance
       */
      emptyBuffer() {
        this._buffer = ''
        return this
      }
      /**
       * Adds raw text to the summary buffer
       *
       * @param {string} text content to add
       * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
       *
       * @returns {Summary} summary instance
       */
      addRaw(text, addEOL = false) {
        this._buffer += text
        return addEOL ? this.addEOL() : this
      }
      /**
       * Adds the operating system-specific end-of-line marker to the buffer
       *
       * @returns {Summary} summary instance
       */
      addEOL() {
        return this.addRaw(os_1.EOL)
      }
      /**
       * Adds an HTML codeblock to the summary buffer
       *
       * @param {string} code content to render within fenced code block
       * @param {string} lang (optional) language to syntax highlight code
       *
       * @returns {Summary} summary instance
       */
      addCodeBlock(code, lang) {
        const attrs = Object.assign({}, lang && { lang })
        const element = this.wrap('pre', this.wrap('code', code), attrs)
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds an HTML list to the summary buffer
       *
       * @param {string[]} items list of items to render
       * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
       *
       * @returns {Summary} summary instance
       */
      addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul'
        const listItems = items.map((item) => this.wrap('li', item)).join('')
        const element = this.wrap(tag, listItems)
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds an HTML table to the summary buffer
       *
       * @param {SummaryTableCell[]} rows table rows
       *
       * @returns {Summary} summary instance
       */
      addTable(rows) {
        const tableBody = rows
          .map((row) => {
            const cells = row
              .map((cell) => {
                if (typeof cell === 'string') {
                  return this.wrap('td', cell)
                }
                const { header, data, colspan, rowspan } = cell
                const tag = header ? 'th' : 'td'
                const attrs = Object.assign(
                  Object.assign({}, colspan && { colspan }),
                  rowspan && { rowspan }
                )
                return this.wrap(tag, data, attrs)
              })
              .join('')
            return this.wrap('tr', cells)
          })
          .join('')
        const element = this.wrap('table', tableBody)
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds a collapsable HTML details element to the summary buffer
       *
       * @param {string} label text for the closed state
       * @param {string} content collapsable content
       *
       * @returns {Summary} summary instance
       */
      addDetails(label, content) {
        const element = this.wrap(
          'details',
          this.wrap('summary', label) + content
        )
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds an HTML image tag to the summary buffer
       *
       * @param {string} src path to the image you to embed
       * @param {string} alt text description of the image
       * @param {SummaryImageOptions} options (optional) addition image attributes
       *
       * @returns {Summary} summary instance
       */
      addImage(src, alt, options) {
        const { width, height } = options || {}
        const attrs = Object.assign(
          Object.assign({}, width && { width }),
          height && { height }
        )
        const element = this.wrap(
          'img',
          null,
          Object.assign({ src, alt }, attrs)
        )
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds an HTML section heading element
       *
       * @param {string} text heading text
       * @param {number | string} [level=1] (optional) the heading level, default: 1
       *
       * @returns {Summary} summary instance
       */
      addHeading(text, level) {
        const tag = `h${level}`
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
          ? tag
          : 'h1'
        const element = this.wrap(allowedTag, text)
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds an HTML thematic break (<hr>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addSeparator() {
        const element = this.wrap('hr', null)
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds an HTML line break (<br>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addBreak() {
        const element = this.wrap('br', null)
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds an HTML blockquote to the summary buffer
       *
       * @param {string} text quote text
       * @param {string} cite (optional) citation url
       *
       * @returns {Summary} summary instance
       */
      addQuote(text, cite) {
        const attrs = Object.assign({}, cite && { cite })
        const element = this.wrap('blockquote', text, attrs)
        return this.addRaw(element).addEOL()
      }
      /**
       * Adds an HTML anchor tag to the summary buffer
       *
       * @param {string} text link text/content
       * @param {string} href hyperlink
       *
       * @returns {Summary} summary instance
       */
      addLink(text, href) {
        const element = this.wrap('a', text, { href })
        return this.addRaw(element).addEOL()
      }
    }
    const _summary = new Summary()
    /**
     * @deprecated use `core.summary`
     */
    exports.markdownSummary = _summary
    exports.summary = _summary
    //# sourceMappingURL=summary.js.map

    /***/
  },

  /***/ 5278: /***/ (__unused_webpack_module, exports) => {
    // We use any as a valid input type
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.toCommandProperties = exports.toCommandValue = void 0
    /**
     * Sanitizes an input into a string so it can be passed into issueCommand safely
     * @param input input to sanitize into a string
     */
    function toCommandValue(input) {
      if (input === null || input === undefined) {
        return ''
      } else if (typeof input === 'string' || input instanceof String) {
        return input
      }
      return JSON.stringify(input)
    }
    exports.toCommandValue = toCommandValue
    /**
     *
     * @param annotationProperties
     * @returns The command properties to send with the actual annotation command
     * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
     */
    function toCommandProperties(annotationProperties) {
      if (!Object.keys(annotationProperties).length) {
        return {}
      }
      return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
      }
    }
    exports.toCommandProperties = toCommandProperties
    //# sourceMappingURL=utils.js.map

    /***/
  },

  /***/ 4087: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.Context = void 0
    const fs_1 = __nccwpck_require__(7147)
    const os_1 = __nccwpck_require__(2037)
    class Context {
      /**
       * Hydrate the context from the environment
       */
      constructor() {
        var _a, _b, _c
        this.payload = {}
        if (process.env.GITHUB_EVENT_PATH) {
          if (fs_1.existsSync(process.env.GITHUB_EVENT_PATH)) {
            this.payload = JSON.parse(
              fs_1.readFileSync(process.env.GITHUB_EVENT_PATH, {
                encoding: 'utf8'
              })
            )
          } else {
            const path = process.env.GITHUB_EVENT_PATH
            process.stdout.write(
              `GITHUB_EVENT_PATH ${path} does not exist${os_1.EOL}`
            )
          }
        }
        this.eventName = process.env.GITHUB_EVENT_NAME
        this.sha = process.env.GITHUB_SHA
        this.ref = process.env.GITHUB_REF
        this.workflow = process.env.GITHUB_WORKFLOW
        this.action = process.env.GITHUB_ACTION
        this.actor = process.env.GITHUB_ACTOR
        this.job = process.env.GITHUB_JOB
        this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10)
        this.runId = parseInt(process.env.GITHUB_RUN_ID, 10)
        this.apiUrl =
          (_a = process.env.GITHUB_API_URL) !== null && _a !== void 0
            ? _a
            : `https://api.github.com`
        this.serverUrl =
          (_b = process.env.GITHUB_SERVER_URL) !== null && _b !== void 0
            ? _b
            : `https://github.com`
        this.graphqlUrl =
          (_c = process.env.GITHUB_GRAPHQL_URL) !== null && _c !== void 0
            ? _c
            : `https://api.github.com/graphql`
      }
      get issue() {
        const payload = this.payload
        return Object.assign(Object.assign({}, this.repo), {
          number: (payload.issue || payload.pull_request || payload).number
        })
      }
      get repo() {
        if (process.env.GITHUB_REPOSITORY) {
          const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
          return { owner, repo }
        }
        if (this.payload.repository) {
          return {
            owner: this.payload.repository.owner.login,
            repo: this.payload.repository.name
          }
        }
        throw new Error(
          "context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'"
        )
      }
    }
    exports.Context = Context
    //# sourceMappingURL=context.js.map

    /***/
  },

  /***/ 5438: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.getOctokit = exports.context = void 0
    const Context = __importStar(__nccwpck_require__(4087))
    const utils_1 = __nccwpck_require__(3030)
    exports.context = new Context.Context()
    /**
     * Returns a hydrated octokit ready to use for GitHub Actions
     *
     * @param     token    the repo PAT or GITHUB_TOKEN
     * @param     options  other options to set
     */
    function getOctokit(token, options, ...additionalPlugins) {
      const GitHubWithPlugins = utils_1.GitHub.plugin(...additionalPlugins)
      return new GitHubWithPlugins(utils_1.getOctokitOptions(token, options))
    }
    exports.getOctokit = getOctokit
    //# sourceMappingURL=github.js.map

    /***/
  },

  /***/ 7914: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.getApiBaseUrl =
      exports.getProxyAgent =
      exports.getAuthString =
        void 0
    const httpClient = __importStar(__nccwpck_require__(6255))
    function getAuthString(token, options) {
      if (!token && !options.auth) {
        throw new Error('Parameter token or opts.auth is required')
      } else if (token && options.auth) {
        throw new Error(
          'Parameters token and opts.auth may not both be specified'
        )
      }
      return typeof options.auth === 'string' ? options.auth : `token ${token}`
    }
    exports.getAuthString = getAuthString
    function getProxyAgent(destinationUrl) {
      const hc = new httpClient.HttpClient()
      return hc.getAgent(destinationUrl)
    }
    exports.getProxyAgent = getProxyAgent
    function getApiBaseUrl() {
      return process.env['GITHUB_API_URL'] || 'https://api.github.com'
    }
    exports.getApiBaseUrl = getApiBaseUrl
    //# sourceMappingURL=utils.js.map

    /***/
  },

  /***/ 3030: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.getOctokitOptions =
      exports.GitHub =
      exports.defaults =
      exports.context =
        void 0
    const Context = __importStar(__nccwpck_require__(4087))
    const Utils = __importStar(__nccwpck_require__(7914))
    // octokit + plugins
    const core_1 = __nccwpck_require__(6762)
    const plugin_rest_endpoint_methods_1 = __nccwpck_require__(3044)
    const plugin_paginate_rest_1 = __nccwpck_require__(4193)
    exports.context = new Context.Context()
    const baseUrl = Utils.getApiBaseUrl()
    exports.defaults = {
      baseUrl,
      request: {
        agent: Utils.getProxyAgent(baseUrl)
      }
    }
    exports.GitHub = core_1.Octokit.plugin(
      plugin_rest_endpoint_methods_1.restEndpointMethods,
      plugin_paginate_rest_1.paginateRest
    ).defaults(exports.defaults)
    /**
     * Convience function to correctly format Octokit Options to pass into the constructor.
     *
     * @param     token    the repo PAT or GITHUB_TOKEN
     * @param     options  other options to set
     */
    function getOctokitOptions(token, options) {
      const opts = Object.assign({}, options || {}) // Shallow clone - don't mutate the object provided by the caller
      // Auth
      const auth = Utils.getAuthString(token, opts)
      if (auth) {
        opts.auth = auth
      }
      return opts
    }
    exports.getOctokitOptions = getOctokitOptions
    //# sourceMappingURL=utils.js.map

    /***/
  },

  /***/ 5526: /***/ function (__unused_webpack_module, exports) {
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.PersonalAccessTokenCredentialHandler =
      exports.BearerCredentialHandler =
      exports.BasicCredentialHandler =
        void 0
    class BasicCredentialHandler {
      constructor(username, password) {
        this.username = username
        this.password = password
      }
      prepareRequest(options) {
        if (!options.headers) {
          throw Error('The request has no headers')
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(
          `${this.username}:${this.password}`
        ).toString('base64')}`
      }
      // This handler cannot handle 401
      canHandleAuthentication() {
        return false
      }
      handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
          throw new Error('not implemented')
        })
      }
    }
    exports.BasicCredentialHandler = BasicCredentialHandler
    class BearerCredentialHandler {
      constructor(token) {
        this.token = token
      }
      // currently implements pre-authorization
      // TODO: support preAuth = false where it hooks on 401
      prepareRequest(options) {
        if (!options.headers) {
          throw Error('The request has no headers')
        }
        options.headers['Authorization'] = `Bearer ${this.token}`
      }
      // This handler cannot handle 401
      canHandleAuthentication() {
        return false
      }
      handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
          throw new Error('not implemented')
        })
      }
    }
    exports.BearerCredentialHandler = BearerCredentialHandler
    class PersonalAccessTokenCredentialHandler {
      constructor(token) {
        this.token = token
      }
      // currently implements pre-authorization
      // TODO: support preAuth = false where it hooks on 401
      prepareRequest(options) {
        if (!options.headers) {
          throw Error('The request has no headers')
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(
          `PAT:${this.token}`
        ).toString('base64')}`
      }
      // This handler cannot handle 401
      canHandleAuthentication() {
        return false
      }
      handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
          throw new Error('not implemented')
        })
      }
    }
    exports.PersonalAccessTokenCredentialHandler =
      PersonalAccessTokenCredentialHandler
    //# sourceMappingURL=auth.js.map

    /***/
  },

  /***/ 6255: /***/ function (
    __unused_webpack_module,
    exports,
    __nccwpck_require__
  ) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            Object.defineProperty(o, k2, {
              enumerable: true,
              get: function () {
                return m[k]
              }
            })
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k
            o[k2] = m[k]
          })
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v })
          }
        : function (o, v) {
            o['default'] = v
          })
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod
        var result = {}
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k)
        __setModuleDefault(result, mod)
        return result
      }
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value)
              })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value))
            } catch (e) {
              reject(e)
            }
          }
          function rejected(value) {
            try {
              step(generator['throw'](value))
            } catch (e) {
              reject(e)
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected)
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next())
        })
      }
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.HttpClient =
      exports.isHttps =
      exports.HttpClientResponse =
      exports.HttpClientError =
      exports.getProxyUrl =
      exports.MediaTypes =
      exports.Headers =
      exports.HttpCodes =
        void 0
    const http = __importStar(__nccwpck_require__(3685))
    const https = __importStar(__nccwpck_require__(5687))
    const pm = __importStar(__nccwpck_require__(9835))
    const tunnel = __importStar(__nccwpck_require__(4294))
    var HttpCodes
    ;(function (HttpCodes) {
      HttpCodes[(HttpCodes['OK'] = 200)] = 'OK'
      HttpCodes[(HttpCodes['MultipleChoices'] = 300)] = 'MultipleChoices'
      HttpCodes[(HttpCodes['MovedPermanently'] = 301)] = 'MovedPermanently'
      HttpCodes[(HttpCodes['ResourceMoved'] = 302)] = 'ResourceMoved'
      HttpCodes[(HttpCodes['SeeOther'] = 303)] = 'SeeOther'
      HttpCodes[(HttpCodes['NotModified'] = 304)] = 'NotModified'
      HttpCodes[(HttpCodes['UseProxy'] = 305)] = 'UseProxy'
      HttpCodes[(HttpCodes['SwitchProxy'] = 306)] = 'SwitchProxy'
      HttpCodes[(HttpCodes['TemporaryRedirect'] = 307)] = 'TemporaryRedirect'
      HttpCodes[(HttpCodes['PermanentRedirect'] = 308)] = 'PermanentRedirect'
      HttpCodes[(HttpCodes['BadRequest'] = 400)] = 'BadRequest'
      HttpCodes[(HttpCodes['Unauthorized'] = 401)] = 'Unauthorized'
      HttpCodes[(HttpCodes['PaymentRequired'] = 402)] = 'PaymentRequired'
      HttpCodes[(HttpCodes['Forbidden'] = 403)] = 'Forbidden'
      HttpCodes[(HttpCodes['NotFound'] = 404)] = 'NotFound'
      HttpCodes[(HttpCodes['MethodNotAllowed'] = 405)] = 'MethodNotAllowed'
      HttpCodes[(HttpCodes['NotAcceptable'] = 406)] = 'NotAcceptable'
      HttpCodes[(HttpCodes['ProxyAuthenticationRequired'] = 407)] =
        'ProxyAuthenticationRequired'
      HttpCodes[(HttpCodes['RequestTimeout'] = 408)] = 'RequestTimeout'
      HttpCodes[(HttpCodes['Conflict'] = 409)] = 'Conflict'
      HttpCodes[(HttpCodes['Gone'] = 410)] = 'Gone'
      HttpCodes[(HttpCodes['TooManyRequests'] = 429)] = 'TooManyRequests'
      HttpCodes[(HttpCodes['InternalServerError'] = 500)] =
        'InternalServerError'
      HttpCodes[(HttpCodes['NotImplemented'] = 501)] = 'NotImplemented'
      HttpCodes[(HttpCodes['BadGateway'] = 502)] = 'BadGateway'
      HttpCodes[(HttpCodes['ServiceUnavailable'] = 503)] = 'ServiceUnavailable'
      HttpCodes[(HttpCodes['GatewayTimeout'] = 504)] = 'GatewayTimeout'
    })((HttpCodes = exports.HttpCodes || (exports.HttpCodes = {})))
    var Headers
    ;(function (Headers) {
      Headers['Accept'] = 'accept'
      Headers['ContentType'] = 'content-type'
    })((Headers = exports.Headers || (exports.Headers = {})))
    var MediaTypes
    ;(function (MediaTypes) {
      MediaTypes['ApplicationJson'] = 'application/json'
    })((MediaTypes = exports.MediaTypes || (exports.MediaTypes = {})))
    /**
     * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    function getProxyUrl(serverUrl) {
      const proxyUrl = pm.getProxyUrl(new URL(serverUrl))
      return proxyUrl ? proxyUrl.href : ''
    }
    exports.getProxyUrl = getProxyUrl
    const HttpRedirectCodes = [
      HttpCodes.MovedPermanently,
      HttpCodes.ResourceMoved,
      HttpCodes.SeeOther,
      HttpCodes.TemporaryRedirect,
      HttpCodes.PermanentRedirect
    ]
    const HttpResponseRetryCodes = [
      HttpCodes.BadGateway,
      HttpCodes.ServiceUnavailable,
      HttpCodes.GatewayTimeout
    ]
    const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD']
    const ExponentialBackoffCeiling = 10
    const ExponentialBackoffTimeSlice = 5
    class HttpClientError extends Error {
      constructor(message, statusCode) {
        super(message)
        this.name = 'HttpClientError'
        this.statusCode = statusCode
        Object.setPrototypeOf(this, HttpClientError.prototype)
      }
    }
    exports.HttpClientError = HttpClientError
    class HttpClientResponse {
      constructor(message) {
        this.message = message
      }
      readBody() {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve) =>
            __awaiter(this, void 0, void 0, function* () {
              let output = Buffer.alloc(0)
              this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk])
              })
              this.message.on('end', () => {
                resolve(output.toString())
              })
            })
          )
        })
      }
    }
    exports.HttpClientResponse = HttpClientResponse
    function isHttps(requestUrl) {
      const parsedUrl = new URL(requestUrl)
      return parsedUrl.protocol === 'https:'
    }
    exports.isHttps = isHttps
    class HttpClient {
      constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false
        this._allowRedirects = true
        this._allowRedirectDowngrade = false
        this._maxRedirects = 50
        this._allowRetries = false
        this._maxRetries = 1
        this._keepAlive = false
        this._disposed = false
        this.userAgent = userAgent
        this.handlers = handlers || []
        this.requestOptions = requestOptions
        if (requestOptions) {
          if (requestOptions.ignoreSslError != null) {
            this._ignoreSslError = requestOptions.ignoreSslError
          }
          this._socketTimeout = requestOptions.socketTimeout
          if (requestOptions.allowRedirects != null) {
            this._allowRedirects = requestOptions.allowRedirects
          }
          if (requestOptions.allowRedirectDowngrade != null) {
            this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade
          }
          if (requestOptions.maxRedirects != null) {
            this._maxRedirects = Math.max(requestOptions.maxRedirects, 0)
          }
          if (requestOptions.keepAlive != null) {
            this._keepAlive = requestOptions.keepAlive
          }
          if (requestOptions.allowRetries != null) {
            this._allowRetries = requestOptions.allowRetries
          }
          if (requestOptions.maxRetries != null) {
            this._maxRetries = requestOptions.maxRetries
          }
        }
      }
      options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request(
            'OPTIONS',
            requestUrl,
            null,
            additionalHeaders || {}
          )
        })
      }
      get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request('GET', requestUrl, null, additionalHeaders || {})
        })
      }
      del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request(
            'DELETE',
            requestUrl,
            null,
            additionalHeaders || {}
          )
        })
      }
      post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request('POST', requestUrl, data, additionalHeaders || {})
        })
      }
      patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request(
            'PATCH',
            requestUrl,
            data,
            additionalHeaders || {}
          )
        })
      }
      put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request('PUT', requestUrl, data, additionalHeaders || {})
        })
      }
      head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request('HEAD', requestUrl, null, additionalHeaders || {})
        })
      }
      sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.request(verb, requestUrl, stream, additionalHeaders)
        })
      }
      /**
       * Gets a typed object from an endpoint
       * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
       */
      getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.Accept,
            MediaTypes.ApplicationJson
          )
          const res = yield this.get(requestUrl, additionalHeaders)
          return this._processResponse(res, this.requestOptions)
        })
      }
      postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          const data = JSON.stringify(obj, null, 2)
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.Accept,
            MediaTypes.ApplicationJson
          )
          additionalHeaders[Headers.ContentType] =
            this._getExistingOrDefaultHeader(
              additionalHeaders,
              Headers.ContentType,
              MediaTypes.ApplicationJson
            )
          const res = yield this.post(requestUrl, data, additionalHeaders)
          return this._processResponse(res, this.requestOptions)
        })
      }
      putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          const data = JSON.stringify(obj, null, 2)
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.Accept,
            MediaTypes.ApplicationJson
          )
          additionalHeaders[Headers.ContentType] =
            this._getExistingOrDefaultHeader(
              additionalHeaders,
              Headers.ContentType,
              MediaTypes.ApplicationJson
            )
          const res = yield this.put(requestUrl, data, additionalHeaders)
          return this._processResponse(res, this.requestOptions)
        })
      }
      patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          const data = JSON.stringify(obj, null, 2)
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.Accept,
            MediaTypes.ApplicationJson
          )
          additionalHeaders[Headers.ContentType] =
            this._getExistingOrDefaultHeader(
              additionalHeaders,
              Headers.ContentType,
              MediaTypes.ApplicationJson
            )
          const res = yield this.patch(requestUrl, data, additionalHeaders)
          return this._processResponse(res, this.requestOptions)
        })
      }
      /**
       * Makes a raw http request.
       * All other methods such as get, post, patch, and request ultimately call this.
       * Prefer get, del, post and patch
       */
      request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
          if (this._disposed) {
            throw new Error('Client has already been disposed.')
          }
          const parsedUrl = new URL(requestUrl)
          let info = this._prepareRequest(verb, parsedUrl, headers)
          // Only perform retries on reads since writes may not be idempotent.
          const maxTries =
            this._allowRetries && RetryableHttpVerbs.includes(verb)
              ? this._maxRetries + 1
              : 1
          let numTries = 0
          let response
          do {
            response = yield this.requestRaw(info, data)
            // Check if it's an authentication challenge
            if (
              response &&
              response.message &&
              response.message.statusCode === HttpCodes.Unauthorized
            ) {
              let authenticationHandler
              for (const handler of this.handlers) {
                if (handler.canHandleAuthentication(response)) {
                  authenticationHandler = handler
                  break
                }
              }
              if (authenticationHandler) {
                return authenticationHandler.handleAuthentication(
                  this,
                  info,
                  data
                )
              } else {
                // We have received an unauthorized response but have no handlers to handle it.
                // Let the response return to the caller.
                return response
              }
            }
            let redirectsRemaining = this._maxRedirects
            while (
              response.message.statusCode &&
              HttpRedirectCodes.includes(response.message.statusCode) &&
              this._allowRedirects &&
              redirectsRemaining > 0
            ) {
              const redirectUrl = response.message.headers['location']
              if (!redirectUrl) {
                // if there's no location to redirect to, we won't
                break
              }
              const parsedRedirectUrl = new URL(redirectUrl)
              if (
                parsedUrl.protocol === 'https:' &&
                parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                !this._allowRedirectDowngrade
              ) {
                throw new Error(
                  'Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.'
                )
              }
              // we need to finish reading the response before reassigning response
              // which will leak the open socket.
              yield response.readBody()
              // strip authorization header if redirected to a different hostname
              if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                for (const header in headers) {
                  // header names are case insensitive
                  if (header.toLowerCase() === 'authorization') {
                    delete headers[header]
                  }
                }
              }
              // let's make the request with the new redirectUrl
              info = this._prepareRequest(verb, parsedRedirectUrl, headers)
              response = yield this.requestRaw(info, data)
              redirectsRemaining--
            }
            if (
              !response.message.statusCode ||
              !HttpResponseRetryCodes.includes(response.message.statusCode)
            ) {
              // If not a retry code, return immediately instead of retrying
              return response
            }
            numTries += 1
            if (numTries < maxTries) {
              yield response.readBody()
              yield this._performExponentialBackoff(numTries)
            }
          } while (numTries < maxTries)
          return response
        })
      }
      /**
       * Needs to be called if keepAlive is set to true in request options.
       */
      dispose() {
        if (this._agent) {
          this._agent.destroy()
        }
        this._disposed = true
      }
      /**
       * Raw request.
       * @param info
       * @param data
       */
      requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) => {
            function callbackForResult(err, res) {
              if (err) {
                reject(err)
              } else if (!res) {
                // If `err` is not passed, then `res` must be passed.
                reject(new Error('Unknown error'))
              } else {
                resolve(res)
              }
            }
            this.requestRawWithCallback(info, data, callbackForResult)
          })
        })
      }
      /**
       * Raw request with callback.
       * @param info
       * @param data
       * @param onResult
       */
      requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
          if (!info.options.headers) {
            info.options.headers = {}
          }
          info.options.headers['Content-Length'] = Buffer.byteLength(
            data,
            'utf8'
          )
        }
        let callbackCalled = false
        function handleResult(err, res) {
          if (!callbackCalled) {
            callbackCalled = true
            onResult(err, res)
          }
        }
        const req = info.httpModule.request(info.options, (msg) => {
          const res = new HttpClientResponse(msg)
          handleResult(undefined, res)
        })
        let socket
        req.on('socket', (sock) => {
          socket = sock
        })
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
          if (socket) {
            socket.end()
          }
          handleResult(new Error(`Request timeout: ${info.options.path}`))
        })
        req.on('error', function (err) {
          // err has statusCode property
          // res should have headers
          handleResult(err)
        })
        if (data && typeof data === 'string') {
          req.write(data, 'utf8')
        }
        if (data && typeof data !== 'string') {
          data.on('close', function () {
            req.end()
          })
          data.pipe(req)
        } else {
          req.end()
        }
      }
      /**
       * Gets an http agent. This function is useful when you need an http agent that handles
       * routing through a proxy server - depending upon the url and proxy environment variables.
       * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
       */
      getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl)
        return this._getAgent(parsedUrl)
      }
      _prepareRequest(method, requestUrl, headers) {
        const info = {}
        info.parsedUrl = requestUrl
        const usingSsl = info.parsedUrl.protocol === 'https:'
        info.httpModule = usingSsl ? https : http
        const defaultPort = usingSsl ? 443 : 80
        info.options = {}
        info.options.host = info.parsedUrl.hostname
        info.options.port = info.parsedUrl.port
          ? parseInt(info.parsedUrl.port)
          : defaultPort
        info.options.path =
          (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '')
        info.options.method = method
        info.options.headers = this._mergeHeaders(headers)
        if (this.userAgent != null) {
          info.options.headers['user-agent'] = this.userAgent
        }
        info.options.agent = this._getAgent(info.parsedUrl)
        // gives handlers an opportunity to participate
        if (this.handlers) {
          for (const handler of this.handlers) {
            handler.prepareRequest(info.options)
          }
        }
        return info
      }
      _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
          return Object.assign(
            {},
            lowercaseKeys(this.requestOptions.headers),
            lowercaseKeys(headers || {})
          )
        }
        return lowercaseKeys(headers || {})
      }
      _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader
        if (this.requestOptions && this.requestOptions.headers) {
          clientHeader = lowercaseKeys(this.requestOptions.headers)[header]
        }
        return additionalHeaders[header] || clientHeader || _default
      }
      _getAgent(parsedUrl) {
        let agent
        const proxyUrl = pm.getProxyUrl(parsedUrl)
        const useProxy = proxyUrl && proxyUrl.hostname
        if (this._keepAlive && useProxy) {
          agent = this._proxyAgent
        }
        if (this._keepAlive && !useProxy) {
          agent = this._agent
        }
        // if agent is already assigned use that agent.
        if (agent) {
          return agent
        }
        const usingSsl = parsedUrl.protocol === 'https:'
        let maxSockets = 100
        if (this.requestOptions) {
          maxSockets =
            this.requestOptions.maxSockets || http.globalAgent.maxSockets
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
          const agentOptions = {
            maxSockets,
            keepAlive: this._keepAlive,
            proxy: Object.assign(
              Object.assign(
                {},
                (proxyUrl.username || proxyUrl.password) && {
                  proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                }
              ),
              { host: proxyUrl.hostname, port: proxyUrl.port }
            )
          }
          let tunnelAgent
          const overHttps = proxyUrl.protocol === 'https:'
          if (usingSsl) {
            tunnelAgent = overHttps
              ? tunnel.httpsOverHttps
              : tunnel.httpsOverHttp
          } else {
            tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp
          }
          agent = tunnelAgent(agentOptions)
          this._proxyAgent = agent
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
          const options = { keepAlive: this._keepAlive, maxSockets }
          agent = usingSsl ? new https.Agent(options) : new http.Agent(options)
          this._agent = agent
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
          agent = usingSsl ? https.globalAgent : http.globalAgent
        }
        if (usingSsl && this._ignoreSslError) {
          // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
          // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
          // we have to cast it to any and change it directly
          agent.options = Object.assign(agent.options || {}, {
            rejectUnauthorized: false
          })
        }
        return agent
      }
      _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
          retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber)
          const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber)
          return new Promise((resolve) => setTimeout(() => resolve(), ms))
        })
      }
      _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
          return new Promise((resolve, reject) =>
            __awaiter(this, void 0, void 0, function* () {
              const statusCode = res.message.statusCode || 0
              const response = {
                statusCode,
                result: null,
                headers: {}
              }
              // not found leads to null obj returned
              if (statusCode === HttpCodes.NotFound) {
                resolve(response)
              }
              // get the result from the body
              function dateTimeDeserializer(key, value) {
                if (typeof value === 'string') {
                  const a = new Date(value)
                  if (!isNaN(a.valueOf())) {
                    return a
                  }
                }
                return value
              }
              let obj
              let contents
              try {
                contents = yield res.readBody()
                if (contents && contents.length > 0) {
                  if (options && options.deserializeDates) {
                    obj = JSON.parse(contents, dateTimeDeserializer)
                  } else {
                    obj = JSON.parse(contents)
                  }
                  response.result = obj
                }
                response.headers = res.message.headers
              } catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
              }
              // note that 3xx redirects are handled by the http layer.
              if (statusCode > 299) {
                let msg
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                  msg = obj.message
                } else if (contents && contents.length > 0) {
                  // it may be the case that the exception is in the body message as string
                  msg = contents
                } else {
                  msg = `Failed request: (${statusCode})`
                }
                const err = new HttpClientError(msg, statusCode)
                err.result = response.result
                reject(err)
              } else {
                resolve(response)
              }
            })
          )
        })
      }
    }
    exports.HttpClient = HttpClient
    const lowercaseKeys = (obj) =>
      Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {})
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 9835: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })
    exports.checkBypass = exports.getProxyUrl = void 0
    function getProxyUrl(reqUrl) {
      const usingSsl = reqUrl.protocol === 'https:'
      if (checkBypass(reqUrl)) {
        return undefined
      }
      const proxyVar = (() => {
        if (usingSsl) {
          return process.env['https_proxy'] || process.env['HTTPS_PROXY']
        } else {
          return process.env['http_proxy'] || process.env['HTTP_PROXY']
        }
      })()
      if (proxyVar) {
        return new URL(proxyVar)
      } else {
        return undefined
      }
    }
    exports.getProxyUrl = getProxyUrl
    function checkBypass(reqUrl) {
      if (!reqUrl.hostname) {
        return false
      }
      const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || ''
      if (!noProxy) {
        return false
      }
      // Determine the request port
      let reqPort
      if (reqUrl.port) {
        reqPort = Number(reqUrl.port)
      } else if (reqUrl.protocol === 'http:') {
        reqPort = 80
      } else if (reqUrl.protocol === 'https:') {
        reqPort = 443
      }
      // Format the request hostname and hostname with port
      const upperReqHosts = [reqUrl.hostname.toUpperCase()]
      if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`)
      }
      // Compare request host against noproxy
      for (const upperNoProxyItem of noProxy
        .split(',')
        .map((x) => x.trim().toUpperCase())
        .filter((x) => x)) {
        if (upperReqHosts.some((x) => x === upperNoProxyItem)) {
          return true
        }
      }
      return false
    }
    exports.checkBypass = checkBypass
    //# sourceMappingURL=proxy.js.map

    /***/
  },

  /***/ 7541: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    var __webpack_unused_export__

    __webpack_unused_export__ = { value: true }

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var universalUserAgent = __nccwpck_require__(5030)
    var request = __nccwpck_require__(7052)
    var authOauthApp = __nccwpck_require__(8459)
    var deprecation = __nccwpck_require__(8932)
    var universalGithubAppJwt = __nccwpck_require__(4419)
    var LRU = _interopDefault(__nccwpck_require__(7129))
    var authOauthUser = __nccwpck_require__(1591)

    async function getAppAuthentication({ appId, privateKey, timeDifference }) {
      try {
        const appAuthentication = await universalGithubAppJwt.githubAppJwt({
          id: +appId,
          privateKey,
          now: timeDifference && Math.floor(Date.now() / 1000) + timeDifference
        })
        return {
          type: 'app',
          token: appAuthentication.token,
          appId: appAuthentication.appId,
          expiresAt: new Date(appAuthentication.expiration * 1000).toISOString()
        }
      } catch (error) {
        if (privateKey === '-----BEGIN RSA PRIVATE KEY-----') {
          throw new Error(
            "The 'privateKey` option contains only the first line '-----BEGIN RSA PRIVATE KEY-----'. If you are setting it using a `.env` file, make sure it is set on a single line with newlines replaced by '\n'"
          )
        } else {
          throw error
        }
      }
    }

    // https://github.com/isaacs/node-lru-cache#readme
    function getCache() {
      return new LRU({
        // cache max. 15000 tokens, that will use less than 10mb memory
        max: 15000,
        // Cache for 1 minute less than GitHub expiry
        maxAge: 1000 * 60 * 59
      })
    }
    async function get(cache, options) {
      const cacheKey = optionsToCacheKey(options)
      const result = await cache.get(cacheKey)

      if (!result) {
        return
      }

      const [
        token,
        createdAt,
        expiresAt,
        repositorySelection,
        permissionsString,
        singleFileName
      ] = result.split('|')
      const permissions =
        options.permissions ||
        permissionsString.split(/,/).reduce((permissions, string) => {
          if (/!$/.test(string)) {
            permissions[string.slice(0, -1)] = 'write'
          } else {
            permissions[string] = 'read'
          }

          return permissions
        }, {})
      return {
        token,
        createdAt,
        expiresAt,
        permissions,
        repositoryIds: options.repositoryIds,
        repositoryNames: options.repositoryNames,
        singleFileName,
        repositorySelection: repositorySelection
      }
    }
    async function set(cache, options, data) {
      const key = optionsToCacheKey(options)
      const permissionsString = options.permissions
        ? ''
        : Object.keys(data.permissions)
            .map(
              (name) =>
                `${name}${data.permissions[name] === 'write' ? '!' : ''}`
            )
            .join(',')
      const value = [
        data.token,
        data.createdAt,
        data.expiresAt,
        data.repositorySelection,
        permissionsString,
        data.singleFileName
      ].join('|')
      await cache.set(key, value)
    }

    function optionsToCacheKey({
      installationId,
      permissions = {},
      repositoryIds = [],
      repositoryNames = []
    }) {
      const permissionsString = Object.keys(permissions)
        .sort()
        .map((name) => (permissions[name] === 'read' ? name : `${name}!`))
        .join(',')
      const repositoryIdsString = repositoryIds.sort().join(',')
      const repositoryNamesString = repositoryNames.join(',')
      return [
        installationId,
        repositoryIdsString,
        repositoryNamesString,
        permissionsString
      ]
        .filter(Boolean)
        .join('|')
    }

    function toTokenAuthentication({
      installationId,
      token,
      createdAt,
      expiresAt,
      repositorySelection,
      permissions,
      repositoryIds,
      repositoryNames,
      singleFileName
    }) {
      return Object.assign(
        {
          type: 'token',
          tokenType: 'installation',
          token,
          installationId,
          permissions,
          createdAt,
          expiresAt,
          repositorySelection
        },
        repositoryIds
          ? {
              repositoryIds
            }
          : null,
        repositoryNames
          ? {
              repositoryNames
            }
          : null,
        singleFileName
          ? {
              singleFileName
            }
          : null
      )
    }

    async function getInstallationAuthentication(
      state,
      options,
      customRequest
    ) {
      const installationId = Number(
        options.installationId || state.installationId
      )

      if (!installationId) {
        throw new Error(
          '[@octokit/auth-app] installationId option is required for installation authentication.'
        )
      }

      if (options.factory) {
        const { type, factory, oauthApp, ...factoryAuthOptions } = {
          ...state,
          ...options
        } // @ts-expect-error if `options.factory` is set, the return type for `auth()` should be `Promise<ReturnType<options.factory>>`

        return factory(factoryAuthOptions)
      }

      const optionsWithInstallationTokenFromState = Object.assign(
        {
          installationId
        },
        options
      )

      if (!options.refresh) {
        const result = await get(
          state.cache,
          optionsWithInstallationTokenFromState
        )

        if (result) {
          const {
            token,
            createdAt,
            expiresAt,
            permissions,
            repositoryIds,
            repositoryNames,
            singleFileName,
            repositorySelection
          } = result
          return toTokenAuthentication({
            installationId,
            token,
            createdAt,
            expiresAt,
            permissions,
            repositorySelection,
            repositoryIds,
            repositoryNames,
            singleFileName
          })
        }
      }

      const appAuthentication = await getAppAuthentication(state)
      const request = customRequest || state.request
      const {
        data: {
          token,
          expires_at: expiresAt,
          repositories,
          permissions: permissionsOptional,
          repository_selection: repositorySelectionOptional,
          single_file: singleFileName
        }
      } = await request(
        'POST /app/installations/{installation_id}/access_tokens',
        {
          installation_id: installationId,
          repository_ids: options.repositoryIds,
          repositories: options.repositoryNames,
          permissions: options.permissions,
          mediaType: {
            previews: ['machine-man']
          },
          headers: {
            authorization: `bearer ${appAuthentication.token}`
          }
        }
      )
      /* istanbul ignore next - permissions are optional per OpenAPI spec, but we think that is incorrect */

      const permissions = permissionsOptional || {}
      /* istanbul ignore next - repositorySelection are optional per OpenAPI spec, but we think that is incorrect */

      const repositorySelection = repositorySelectionOptional || 'all'
      const repositoryIds = repositories
        ? repositories.map((r) => r.id)
        : void 0
      const repositoryNames = repositories
        ? repositories.map((repo) => repo.name)
        : void 0
      const createdAt = new Date().toISOString()
      await set(state.cache, optionsWithInstallationTokenFromState, {
        token,
        createdAt,
        expiresAt,
        repositorySelection,
        permissions,
        repositoryIds,
        repositoryNames,
        singleFileName
      })
      return toTokenAuthentication({
        installationId,
        token,
        createdAt,
        expiresAt,
        repositorySelection,
        permissions,
        repositoryIds,
        repositoryNames,
        singleFileName
      })
    }

    async function auth(state, authOptions) {
      switch (authOptions.type) {
        case 'app':
          return getAppAuthentication(state)
        // @ts-expect-error "oauth" is not supperted in types

        case 'oauth':
          state.log.warn(
            // @ts-expect-error `log.warn()` expects string
            new deprecation.Deprecation(
              `[@octokit/auth-app] {type: "oauth"} is deprecated. Use {type: "oauth-app"} instead`
            )
          )

        case 'oauth-app':
          return state.oauthApp({
            type: 'oauth-app'
          })

        case 'installation':
          return getInstallationAuthentication(state, {
            ...authOptions,
            type: 'installation'
          })

        case 'oauth-user':
          // @ts-expect-error TODO: infer correct auth options type based on type. authOptions should be typed as "WebFlowAuthOptions | OAuthAppDeviceFlowAuthOptions | GitHubAppDeviceFlowAuthOptions"
          return state.oauthApp(authOptions)

        default:
          // @ts-expect-error type is "never" at this point
          throw new Error(`Invalid auth type: ${authOptions.type}`)
      }
    }

    const PATHS = [
      '/app',
      '/app/hook/config',
      '/app/hook/deliveries',
      '/app/hook/deliveries/{delivery_id}',
      '/app/hook/deliveries/{delivery_id}/attempts',
      '/app/installations',
      '/app/installations/{installation_id}',
      '/app/installations/{installation_id}/access_tokens',
      '/app/installations/{installation_id}/suspended',
      '/marketplace_listing/accounts/{account_id}',
      '/marketplace_listing/plan',
      '/marketplace_listing/plans',
      '/marketplace_listing/plans/{plan_id}/accounts',
      '/marketplace_listing/stubbed/accounts/{account_id}',
      '/marketplace_listing/stubbed/plan',
      '/marketplace_listing/stubbed/plans',
      '/marketplace_listing/stubbed/plans/{plan_id}/accounts',
      '/orgs/{org}/installation',
      '/repos/{owner}/{repo}/installation',
      '/users/{username}/installation'
    ] // CREDIT: Simon Grondin (https://github.com/SGrondin)
    // https://github.com/octokit/plugin-throttling.js/blob/45c5d7f13b8af448a9dbca468d9c9150a73b3948/lib/route-matcher.js

    function routeMatcher(paths) {
      // EXAMPLE. For the following paths:

      /* [
      "/orgs/{org}/invitations",
      "/repos/{owner}/{repo}/collaborators/{username}"
  ] */
      const regexes = paths.map((p) =>
        p
          .split('/')
          .map((c) => (c.startsWith('{') ? '(?:.+?)' : c))
          .join('/')
      ) // 'regexes' would contain:

      /* [
      '/orgs/(?:.+?)/invitations',
      '/repos/(?:.+?)/(?:.+?)/collaborators/(?:.+?)'
  ] */

      const regex = `^(?:${regexes.map((r) => `(?:${r})`).join('|')})[^/]*$` // 'regex' would contain:

      /*
    ^(?:(?:\/orgs\/(?:.+?)\/invitations)|(?:\/repos\/(?:.+?)\/(?:.+?)\/collaborators\/(?:.+?)))[^\/]*$
       It may look scary, but paste it into https://www.debuggex.com/
    and it will make a lot more sense!
  */

      return new RegExp(regex, 'i')
    }

    const REGEX = routeMatcher(PATHS)
    function requiresAppAuth(url) {
      return !!url && REGEX.test(url)
    }

    const FIVE_SECONDS_IN_MS = 5 * 1000

    function isNotTimeSkewError(error) {
      return !(
        error.message.match(
          /'Expiration time' claim \('exp'\) must be a numeric value representing the future time at which the assertion expires/
        ) ||
        error.message.match(
          /'Issued at' claim \('iat'\) must be an Integer representing the time that the assertion was issued/
        )
      )
    }

    async function hook(state, request, route, parameters) {
      const endpoint = request.endpoint.merge(route, parameters)
      const url = endpoint.url // Do not intercept request to retrieve a new token

      if (/\/login\/oauth\/access_token$/.test(url)) {
        return request(endpoint)
      }

      if (requiresAppAuth(url.replace(request.endpoint.DEFAULTS.baseUrl, ''))) {
        const { token } = await getAppAuthentication(state)
        endpoint.headers.authorization = `bearer ${token}`
        let response

        try {
          response = await request(endpoint)
        } catch (error) {
          // If there's an issue with the expiration, regenerate the token and try again.
          // Otherwise rethrow the error for upstream handling.
          if (isNotTimeSkewError(error)) {
            throw error
          } // If the date header is missing, we can't correct the system time skew.
          // Throw the error to be handled upstream.

          if (typeof error.response.headers.date === 'undefined') {
            throw error
          }

          const diff = Math.floor(
            (Date.parse(error.response.headers.date) -
              Date.parse(new Date().toString())) /
              1000
          )
          state.log.warn(error.message)
          state.log.warn(
            `[@octokit/auth-app] GitHub API time and system time are different by ${diff} seconds. Retrying request with the difference accounted for.`
          )
          const { token } = await getAppAuthentication({
            ...state,
            timeDifference: diff
          })
          endpoint.headers.authorization = `bearer ${token}`
          return request(endpoint)
        }

        return response
      }

      if (authOauthUser.requiresBasicAuth(url)) {
        const authentication = await state.oauthApp({
          type: 'oauth-app'
        })
        endpoint.headers.authorization = authentication.headers.authorization
        return request(endpoint)
      }

      const { token, createdAt } = await getInstallationAuthentication(
        state, // @ts-expect-error TBD
        {},
        request
      )
      endpoint.headers.authorization = `token ${token}`
      return sendRequestWithRetries(state, request, endpoint, createdAt)
    }
    /**
     * Newly created tokens might not be accessible immediately after creation.
     * In case of a 401 response, we retry with an exponential delay until more
     * than five seconds pass since the creation of the token.
     *
     * @see https://github.com/octokit/auth-app.js/issues/65
     */

    async function sendRequestWithRetries(
      state,
      request,
      options,
      createdAt,
      retries = 0
    ) {
      const timeSinceTokenCreationInMs = +new Date() - +new Date(createdAt)

      try {
        return await request(options)
      } catch (error) {
        if (error.status !== 401) {
          throw error
        }

        if (timeSinceTokenCreationInMs >= FIVE_SECONDS_IN_MS) {
          if (retries > 0) {
            error.message = `After ${retries} retries within ${
              timeSinceTokenCreationInMs / 1000
            }s of creating the installation access token, the response remains 401. At this point, the cause may be an authentication problem or a system outage. Please check https://www.githubstatus.com for status information`
          }

          throw error
        }

        ++retries
        const awaitTime = retries * 1000
        state.log.warn(
          `[@octokit/auth-app] Retrying after 401 response to account for token replication delay (retry: ${retries}, wait: ${
            awaitTime / 1000
          }s)`
        )
        await new Promise((resolve) => setTimeout(resolve, awaitTime))
        return sendRequestWithRetries(
          state,
          request,
          options,
          createdAt,
          retries
        )
      }
    }

    const VERSION = '4.0.7'

    function createAppAuth(options) {
      if (!options.appId) {
        throw new Error('[@octokit/auth-app] appId option is required')
      }

      if (!Number.isFinite(+options.appId)) {
        throw new Error(
          '[@octokit/auth-app] appId option must be a number or numeric string'
        )
      }

      if (!options.privateKey) {
        throw new Error('[@octokit/auth-app] privateKey option is required')
      }

      if ('installationId' in options && !options.installationId) {
        throw new Error(
          '[@octokit/auth-app] installationId is set to a falsy value'
        )
      }

      const log = Object.assign(
        {
          warn: console.warn.bind(console)
        },
        options.log
      )
      const request$1 =
        options.request ||
        request.request.defaults({
          headers: {
            'user-agent': `octokit-auth-app.js/${VERSION} ${universalUserAgent.getUserAgent()}`
          }
        })
      const state = Object.assign(
        {
          request: request$1,
          cache: getCache()
        },
        options,
        options.installationId
          ? {
              installationId: Number(options.installationId)
            }
          : {},
        {
          log,
          oauthApp: authOauthApp.createOAuthAppAuth({
            clientType: 'github-app',
            clientId: options.clientId || '',
            clientSecret: options.clientSecret || '',
            request: request$1
          })
        }
      ) // @ts-expect-error not worth the extra code to appease TS

      return Object.assign(auth.bind(null, state), {
        hook: hook.bind(null, state)
      })
    }

    __webpack_unused_export__ = {
      enumerable: true,
      get: function () {
        return authOauthUser.createOAuthUserAuth
      }
    }
    exports.iq = createAppAuth
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 982: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var isPlainObject = __nccwpck_require__(3287)
    var universalUserAgent = __nccwpck_require__(5030)

    function lowercaseKeys(object) {
      if (!object) {
        return {}
      }

      return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key]
        return newObj
      }, {})
    }

    function mergeDeep(defaults, options) {
      const result = Object.assign({}, defaults)
      Object.keys(options).forEach((key) => {
        if (isPlainObject.isPlainObject(options[key])) {
          if (!(key in defaults))
            Object.assign(result, {
              [key]: options[key]
            })
          else result[key] = mergeDeep(defaults[key], options[key])
        } else {
          Object.assign(result, {
            [key]: options[key]
          })
        }
      })
      return result
    }

    function removeUndefinedProperties(obj) {
      for (const key in obj) {
        if (obj[key] === undefined) {
          delete obj[key]
        }
      }

      return obj
    }

    function merge(defaults, route, options) {
      if (typeof route === 'string') {
        let [method, url] = route.split(' ')
        options = Object.assign(
          url
            ? {
                method,
                url
              }
            : {
                url: method
              },
          options
        )
      } else {
        options = Object.assign({}, route)
      } // lowercase header names before merging with defaults to avoid duplicates

      options.headers = lowercaseKeys(options.headers) // remove properties with undefined values before merging

      removeUndefinedProperties(options)
      removeUndefinedProperties(options.headers)
      const mergedOptions = mergeDeep(defaults || {}, options) // mediaType.previews arrays are merged, instead of overwritten

      if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
          .filter(
            (preview) => !mergedOptions.mediaType.previews.includes(preview)
          )
          .concat(mergedOptions.mediaType.previews)
      }

      mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(
        (preview) => preview.replace(/-preview/, '')
      )
      return mergedOptions
    }

    function addQueryParameters(url, parameters) {
      const separator = /\?/.test(url) ? '&' : '?'
      const names = Object.keys(parameters)

      if (names.length === 0) {
        return url
      }

      return (
        url +
        separator +
        names
          .map((name) => {
            if (name === 'q') {
              return (
                'q=' + parameters.q.split('+').map(encodeURIComponent).join('+')
              )
            }

            return `${name}=${encodeURIComponent(parameters[name])}`
          })
          .join('&')
      )
    }

    const urlVariableRegex = /\{[^}]+\}/g

    function removeNonChars(variableName) {
      return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
    }

    function extractUrlVariableNames(url) {
      const matches = url.match(urlVariableRegex)

      if (!matches) {
        return []
      }

      return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
    }

    function omit(object, keysToOmit) {
      return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
          obj[key] = object[key]
          return obj
        }, {})
    }

    // Based on https://github.com/bramstein/url-template, licensed under BSD
    // TODO: create separate package.
    //
    // Copyright (c) 2012-2014, Bram Stein
    // All rights reserved.
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //  1. Redistributions of source code must retain the above copyright
    //     notice, this list of conditions and the following disclaimer.
    //  2. Redistributions in binary form must reproduce the above copyright
    //     notice, this list of conditions and the following disclaimer in the
    //     documentation and/or other materials provided with the distribution.
    //  3. The name of the author may not be used to endorse or promote products
    //     derived from this software without specific prior written permission.
    // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
    // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
    // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
    // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    /* istanbul ignore file */
    function encodeReserved(str) {
      return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
          if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']')
          }

          return part
        })
        .join('')
    }

    function encodeUnreserved(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    function encodeValue(operator, value, key) {
      value =
        operator === '+' || operator === '#'
          ? encodeReserved(value)
          : encodeUnreserved(value)

      if (key) {
        return encodeUnreserved(key) + '=' + value
      } else {
        return value
      }
    }

    function isDefined(value) {
      return value !== undefined && value !== null
    }

    function isKeyOperator(operator) {
      return operator === ';' || operator === '&' || operator === '?'
    }

    function getValues(context, operator, key, modifier) {
      var value = context[key],
        result = []

      if (isDefined(value) && value !== '') {
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          value = value.toString()

          if (modifier && modifier !== '*') {
            value = value.substring(0, parseInt(modifier, 10))
          }

          result.push(
            encodeValue(operator, value, isKeyOperator(operator) ? key : '')
          )
        } else {
          if (modifier === '*') {
            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                result.push(
                  encodeValue(
                    operator,
                    value,
                    isKeyOperator(operator) ? key : ''
                  )
                )
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  result.push(encodeValue(operator, value[k], k))
                }
              })
            }
          } else {
            const tmp = []

            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                tmp.push(encodeValue(operator, value))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  tmp.push(encodeUnreserved(k))
                  tmp.push(encodeValue(operator, value[k].toString()))
                }
              })
            }

            if (isKeyOperator(operator)) {
              result.push(encodeUnreserved(key) + '=' + tmp.join(','))
            } else if (tmp.length !== 0) {
              result.push(tmp.join(','))
            }
          }
        }
      } else {
        if (operator === ';') {
          if (isDefined(value)) {
            result.push(encodeUnreserved(key))
          }
        } else if (value === '' && (operator === '&' || operator === '?')) {
          result.push(encodeUnreserved(key) + '=')
        } else if (value === '') {
          result.push('')
        }
      }

      return result
    }

    function parseUrl(template) {
      return {
        expand: expand.bind(null, template)
      }
    }

    function expand(template, context) {
      var operators = ['+', '#', '.', '/', ';', '?', '&']
      return template.replace(
        /\{([^\{\}]+)\}|([^\{\}]+)/g,
        function (_, expression, literal) {
          if (expression) {
            let operator = ''
            const values = []

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0)
              expression = expression.substr(1)
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
              values.push(
                getValues(context, operator, tmp[1], tmp[2] || tmp[3])
              )
            })

            if (operator && operator !== '+') {
              var separator = ','

              if (operator === '?') {
                separator = '&'
              } else if (operator !== '#') {
                separator = operator
              }

              return (
                (values.length !== 0 ? operator : '') + values.join(separator)
              )
            } else {
              return values.join(',')
            }
          } else {
            return encodeReserved(literal)
          }
        }
      )
    }

    function parse(options) {
      // https://fetch.spec.whatwg.org/#methods
      let method = options.method.toUpperCase() // replace :varname with {varname} to make it RFC 6570 compatible

      let url = (options.url || '/').replace(/:([a-z]\w+)/g, '{$1}')
      let headers = Object.assign({}, options.headers)
      let body
      let parameters = omit(options, [
        'method',
        'baseUrl',
        'url',
        'headers',
        'request',
        'mediaType'
      ]) // extract variable names from URL to calculate remaining variables later

      const urlVariableNames = extractUrlVariableNames(url)
      url = parseUrl(url).expand(parameters)

      if (!/^http/.test(url)) {
        url = options.baseUrl + url
      }

      const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat('baseUrl')
      const remainingParameters = omit(parameters, omittedParameters)
      const isBinaryRequest = /application\/octet-stream/i.test(headers.accept)

      if (!isBinaryRequest) {
        if (options.mediaType.format) {
          // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
          headers.accept = headers.accept
            .split(/,/)
            .map((preview) =>
              preview.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${options.mediaType.format}`
              )
            )
            .join(',')
        }

        if (options.mediaType.previews.length) {
          const previewsFromAcceptHeader =
            headers.accept.match(/[\w-]+(?=-preview)/g) || []
          headers.accept = previewsFromAcceptHeader
            .concat(options.mediaType.previews)
            .map((preview) => {
              const format = options.mediaType.format
                ? `.${options.mediaType.format}`
                : '+json'
              return `application/vnd.github.${preview}-preview${format}`
            })
            .join(',')
        }
      } // for GET/HEAD requests, set URL query parameters from remaining parameters
      // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters

      if (['GET', 'HEAD'].includes(method)) {
        url = addQueryParameters(url, remainingParameters)
      } else {
        if ('data' in remainingParameters) {
          body = remainingParameters.data
        } else {
          if (Object.keys(remainingParameters).length) {
            body = remainingParameters
          } else {
            headers['content-length'] = 0
          }
        }
      } // default content-type for JSON if body is set

      if (!headers['content-type'] && typeof body !== 'undefined') {
        headers['content-type'] = 'application/json; charset=utf-8'
      } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
      // fetch does not allow to set `content-length` header, but we can set body to an empty string

      if (['PATCH', 'PUT'].includes(method) && typeof body === 'undefined') {
        body = ''
      } // Only return body/request keys if present

      return Object.assign(
        {
          method,
          url,
          headers
        },
        typeof body !== 'undefined'
          ? {
              body
            }
          : null,
        options.request
          ? {
              request: options.request
            }
          : null
      )
    }

    function endpointWithDefaults(defaults, route, options) {
      return parse(merge(defaults, route, options))
    }

    function withDefaults(oldDefaults, newDefaults) {
      const DEFAULTS = merge(oldDefaults, newDefaults)
      const endpoint = endpointWithDefaults.bind(null, DEFAULTS)
      return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
      })
    }

    const VERSION = '7.0.1'

    const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}` // DEFAULTS has all properties set that EndpointOptions has, except url.
    // So we use RequestParameters and add method as additional required property.

    const DEFAULTS = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': userAgent
      },
      mediaType: {
        format: '',
        previews: []
      }
    }

    const endpoint = withDefaults(null, DEFAULTS)

    exports.endpoint = endpoint
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 5634: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var deprecation = __nccwpck_require__(8932)
    var once = _interopDefault(__nccwpck_require__(1223))

    const logOnceCode = once((deprecation) => console.warn(deprecation))
    const logOnceHeaders = once((deprecation) => console.warn(deprecation))
    /**
     * Error with extra properties to help with debugging
     */

    class RequestError extends Error {
      constructor(message, statusCode, options) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'HttpError'
        this.status = statusCode
        let headers

        if ('headers' in options && typeof options.headers !== 'undefined') {
          headers = options.headers
        }

        if ('response' in options) {
          this.response = options.response
          headers = options.response.headers
        } // redact request credentials without mutating original request options

        const requestCopy = Object.assign({}, options.request)

        if (options.request.headers.authorization) {
          requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(
              / .*$/,
              ' [REDACTED]'
            )
          })
        }

        requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
          // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]') // OAuth tokens can be passed as URL query parameters, although it is not recommended
          // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = requestCopy // deprecations

        Object.defineProperty(this, 'code', {
          get() {
            logOnceCode(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return statusCode
          }
        })
        Object.defineProperty(this, 'headers', {
          get() {
            logOnceHeaders(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.'
              )
            )
            return headers || {}
          }
        })
      }
    }

    exports.RequestError = RequestError
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 7052: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var endpoint = __nccwpck_require__(982)
    var universalUserAgent = __nccwpck_require__(5030)
    var isPlainObject = __nccwpck_require__(3287)
    var nodeFetch = _interopDefault(__nccwpck_require__(467))
    var requestError = __nccwpck_require__(5634)

    const VERSION = '6.2.1'

    function getBufferResponse(response) {
      return response.arrayBuffer()
    }

    function fetchWrapper(requestOptions) {
      const log =
        requestOptions.request && requestOptions.request.log
          ? requestOptions.request.log
          : console

      if (
        isPlainObject.isPlainObject(requestOptions.body) ||
        Array.isArray(requestOptions.body)
      ) {
        requestOptions.body = JSON.stringify(requestOptions.body)
      }

      let headers = {}
      let status
      let url
      const fetch =
        (requestOptions.request && requestOptions.request.fetch) ||
        globalThis.fetch ||
        /* istanbul ignore next */
        nodeFetch
      return fetch(
        requestOptions.url,
        Object.assign(
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: requestOptions.headers,
            redirect: requestOptions.redirect
          }, // `requestOptions.request.agent` type is incompatible
          // see https://github.com/octokit/types.ts/pull/264
          requestOptions.request
        )
      )
        .then(async (response) => {
          url = response.url
          status = response.status

          for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1]
          }

          if ('deprecation' in headers) {
            const matches =
              headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/)
            const deprecationLink = matches && matches.pop()
            log.warn(
              `[@octokit/request] "${requestOptions.method} ${
                requestOptions.url
              }" is deprecated. It is scheduled to be removed on ${
                headers.sunset
              }${deprecationLink ? `. See ${deprecationLink}` : ''}`
            )
          }

          if (status === 204 || status === 205) {
            return
          } // GitHub API returns 200 for HEAD requests

          if (requestOptions.method === 'HEAD') {
            if (status < 400) {
              return
            }

            throw new requestError.RequestError(response.statusText, status, {
              response: {
                url,
                status,
                headers,
                data: undefined
              },
              request: requestOptions
            })
          }

          if (status === 304) {
            throw new requestError.RequestError('Not modified', status, {
              response: {
                url,
                status,
                headers,
                data: await getResponseData(response)
              },
              request: requestOptions
            })
          }

          if (status >= 400) {
            const data = await getResponseData(response)
            const error = new requestError.RequestError(
              toErrorMessage(data),
              status,
              {
                response: {
                  url,
                  status,
                  headers,
                  data
                },
                request: requestOptions
              }
            )
            throw error
          }

          return getResponseData(response)
        })
        .then((data) => {
          return {
            status,
            url,
            headers,
            data
          }
        })
        .catch((error) => {
          if (error instanceof requestError.RequestError) throw error
          else if (error.name === 'AbortError') throw error
          throw new requestError.RequestError(error.message, 500, {
            request: requestOptions
          })
        })
    }

    async function getResponseData(response) {
      const contentType = response.headers.get('content-type')

      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBufferResponse(response)
    }

    function toErrorMessage(data) {
      if (typeof data === 'string') return data // istanbul ignore else - just in case

      if ('message' in data) {
        if (Array.isArray(data.errors)) {
          return `${data.message}: ${data.errors
            .map(JSON.stringify)
            .join(', ')}`
        }

        return data.message
      } // istanbul ignore next - just in case

      return `Unknown error: ${JSON.stringify(data)}`
    }

    function withDefaults(oldEndpoint, newDefaults) {
      const endpoint = oldEndpoint.defaults(newDefaults)

      const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters)

        if (!endpointOptions.request || !endpointOptions.request.hook) {
          return fetchWrapper(endpoint.parse(endpointOptions))
        }

        const request = (route, parameters) => {
          return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)))
        }

        Object.assign(request, {
          endpoint,
          defaults: withDefaults.bind(null, endpoint)
        })
        return endpointOptions.request.hook(request, endpointOptions)
      }

      return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
      })
    }

    const request = withDefaults(endpoint.endpoint, {
      headers: {
        'user-agent': `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      }
    })

    exports.request = request
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 8459: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var universalUserAgent = __nccwpck_require__(5030)
    var request = __nccwpck_require__(6234)
    var btoa = _interopDefault(__nccwpck_require__(2358))
    var authOauthUser = __nccwpck_require__(1591)

    async function auth(state, authOptions) {
      if (authOptions.type === 'oauth-app') {
        return {
          type: 'oauth-app',
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          clientType: state.clientType,
          headers: {
            authorization: `basic ${btoa(
              `${state.clientId}:${state.clientSecret}`
            )}`
          }
        }
      }

      if ('factory' in authOptions) {
        const { type, ...options } = { ...authOptions, ...state } // @ts-expect-error TODO: `option` cannot be never, is this a bug?

        return authOptions.factory(options)
      }

      const common = {
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        request: state.request,
        ...authOptions
      } // TS: Look what you made me do

      const userAuth =
        state.clientType === 'oauth-app'
          ? await authOauthUser.createOAuthUserAuth({
              ...common,
              clientType: state.clientType
            })
          : await authOauthUser.createOAuthUserAuth({
              ...common,
              clientType: state.clientType
            })
      return userAuth()
    }

    async function hook(state, request, route, parameters) {
      let endpoint = request.endpoint.merge(route, parameters) // Do not intercept OAuth Web/Device flow request

      if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
        return request(endpoint)
      }

      if (
        state.clientType === 'github-app' &&
        !authOauthUser.requiresBasicAuth(endpoint.url)
      ) {
        throw new Error(
          `[@octokit/auth-oauth-app] GitHub Apps cannot use their client ID/secret for basic authentication for endpoints other than "/applications/{client_id}/**". "${endpoint.method} ${endpoint.url}" is not supported.`
        )
      }

      const credentials = btoa(`${state.clientId}:${state.clientSecret}`)
      endpoint.headers.authorization = `basic ${credentials}`

      try {
        return await request(endpoint)
      } catch (error) {
        /* istanbul ignore if */
        if (error.status !== 401) throw error
        error.message = `[@octokit/auth-oauth-app] "${endpoint.method} ${endpoint.url}" does not support clientId/clientSecret basic authentication.`
        throw error
      }
    }

    const VERSION = '5.0.2'

    function createOAuthAppAuth(options) {
      const state = Object.assign(
        {
          request: request.request.defaults({
            headers: {
              'user-agent': `octokit-auth-oauth-app.js/${VERSION} ${universalUserAgent.getUserAgent()}`
            }
          }),
          clientType: 'oauth-app'
        },
        options
      ) // @ts-expect-error not worth the extra code to appease TS

      return Object.assign(auth.bind(null, state), {
        hook: hook.bind(null, state)
      })
    }

    Object.defineProperty(exports, 'createOAuthUserAuth', {
      enumerable: true,
      get: function () {
        return authOauthUser.createOAuthUserAuth
      }
    })
    exports.createOAuthAppAuth = createOAuthAppAuth
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 4344: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var universalUserAgent = __nccwpck_require__(5030)
    var request = __nccwpck_require__(4847)
    var oauthMethods = __nccwpck_require__(8445)

    async function getOAuthAccessToken(state, options) {
      const cachedAuthentication = getCachedAuthentication(state, options.auth)
      if (cachedAuthentication) return cachedAuthentication // Step 1: Request device and user codes
      // https://docs.github.com/en/developers/apps/authorizing-oauth-apps#step-1-app-requests-the-device-and-user-verification-codes-from-github

      const { data: verification } = await oauthMethods.createDeviceCode({
        clientType: state.clientType,
        clientId: state.clientId,
        request: options.request || state.request,
        // @ts-expect-error the extra code to make TS happy is not worth it
        scopes: options.auth.scopes || state.scopes
      }) // Step 2: User must enter the user code on https://github.com/login/device
      // See https://docs.github.com/en/developers/apps/authorizing-oauth-apps#step-2-prompt-the-user-to-enter-the-user-code-in-a-browser

      await state.onVerification(verification) // Step 3: Exchange device code for access token
      // See https://docs.github.com/en/developers/apps/authorizing-oauth-apps#step-3-app-polls-github-to-check-if-the-user-authorized-the-device

      const authentication = await waitForAccessToken(
        options.request || state.request,
        state.clientId,
        state.clientType,
        verification
      )
      state.authentication = authentication
      return authentication
    }

    function getCachedAuthentication(state, auth) {
      if (auth.refresh === true) return false
      if (!state.authentication) return false

      if (state.clientType === 'github-app') {
        return state.authentication
      }

      const authentication = state.authentication
      const newScope = (('scopes' in auth && auth.scopes) || state.scopes).join(
        ' '
      )
      const currentScope = authentication.scopes.join(' ')
      return newScope === currentScope ? authentication : false
    }

    async function wait(seconds) {
      await new Promise((resolve) => setTimeout(resolve, seconds * 1000))
    }

    async function waitForAccessToken(
      request,
      clientId,
      clientType,
      verification
    ) {
      try {
        const options = {
          clientId,
          request,
          code: verification.device_code
        } // WHY TYPESCRIPT WHY ARE YOU DOING THIS TO ME

        const { authentication } =
          clientType === 'oauth-app'
            ? await oauthMethods.exchangeDeviceCode({
                ...options,
                clientType: 'oauth-app'
              })
            : await oauthMethods.exchangeDeviceCode({
                ...options,
                clientType: 'github-app'
              })
        return {
          type: 'token',
          tokenType: 'oauth',
          ...authentication
        }
      } catch (error) {
        // istanbul ignore if
        // @ts-ignore
        if (!error.response) throw error // @ts-ignore

        const errorType = error.response.data.error

        if (errorType === 'authorization_pending') {
          await wait(verification.interval)
          return waitForAccessToken(request, clientId, clientType, verification)
        }

        if (errorType === 'slow_down') {
          await wait(verification.interval + 5)
          return waitForAccessToken(request, clientId, clientType, verification)
        }

        throw error
      }
    }

    async function auth(state, authOptions) {
      return getOAuthAccessToken(state, {
        auth: authOptions
      })
    }

    async function hook(state, request, route, parameters) {
      let endpoint = request.endpoint.merge(route, parameters) // Do not intercept request to retrieve codes or token

      if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
        return request(endpoint)
      }

      const { token } = await getOAuthAccessToken(state, {
        request,
        auth: {
          type: 'oauth'
        }
      })
      endpoint.headers.authorization = `token ${token}`
      return request(endpoint)
    }

    const VERSION = '4.0.2'

    function createOAuthDeviceAuth(options) {
      const requestWithDefaults =
        options.request ||
        request.request.defaults({
          headers: {
            'user-agent': `octokit-auth-oauth-device.js/${VERSION} ${universalUserAgent.getUserAgent()}`
          }
        })
      const { request: request$1 = requestWithDefaults, ...otherOptions } =
        options
      const state =
        options.clientType === 'github-app'
          ? { ...otherOptions, clientType: 'github-app', request: request$1 }
          : {
              ...otherOptions,
              clientType: 'oauth-app',
              request: request$1,
              scopes: options.scopes || []
            }

      if (!options.clientId) {
        throw new Error(
          '[@octokit/auth-oauth-device] "clientId" option must be set (https://github.com/octokit/auth-oauth-device.js#usage)'
        )
      }

      if (!options.onVerification) {
        throw new Error(
          '[@octokit/auth-oauth-device] "onVerification" option must be a function (https://github.com/octokit/auth-oauth-device.js#usage)'
        )
      } // @ts-ignore too much for tsc / ts-jest ¯\_(ツ)_/¯

      return Object.assign(auth.bind(null, state), {
        hook: hook.bind(null, state)
      })
    }

    exports.createOAuthDeviceAuth = createOAuthDeviceAuth
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 6152: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var isPlainObject = __nccwpck_require__(3287)
    var universalUserAgent = __nccwpck_require__(5030)

    function lowercaseKeys(object) {
      if (!object) {
        return {}
      }

      return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key]
        return newObj
      }, {})
    }

    function mergeDeep(defaults, options) {
      const result = Object.assign({}, defaults)
      Object.keys(options).forEach((key) => {
        if (isPlainObject.isPlainObject(options[key])) {
          if (!(key in defaults))
            Object.assign(result, {
              [key]: options[key]
            })
          else result[key] = mergeDeep(defaults[key], options[key])
        } else {
          Object.assign(result, {
            [key]: options[key]
          })
        }
      })
      return result
    }

    function removeUndefinedProperties(obj) {
      for (const key in obj) {
        if (obj[key] === undefined) {
          delete obj[key]
        }
      }

      return obj
    }

    function merge(defaults, route, options) {
      if (typeof route === 'string') {
        let [method, url] = route.split(' ')
        options = Object.assign(
          url
            ? {
                method,
                url
              }
            : {
                url: method
              },
          options
        )
      } else {
        options = Object.assign({}, route)
      } // lowercase header names before merging with defaults to avoid duplicates

      options.headers = lowercaseKeys(options.headers) // remove properties with undefined values before merging

      removeUndefinedProperties(options)
      removeUndefinedProperties(options.headers)
      const mergedOptions = mergeDeep(defaults || {}, options) // mediaType.previews arrays are merged, instead of overwritten

      if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
          .filter(
            (preview) => !mergedOptions.mediaType.previews.includes(preview)
          )
          .concat(mergedOptions.mediaType.previews)
      }

      mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(
        (preview) => preview.replace(/-preview/, '')
      )
      return mergedOptions
    }

    function addQueryParameters(url, parameters) {
      const separator = /\?/.test(url) ? '&' : '?'
      const names = Object.keys(parameters)

      if (names.length === 0) {
        return url
      }

      return (
        url +
        separator +
        names
          .map((name) => {
            if (name === 'q') {
              return (
                'q=' + parameters.q.split('+').map(encodeURIComponent).join('+')
              )
            }

            return `${name}=${encodeURIComponent(parameters[name])}`
          })
          .join('&')
      )
    }

    const urlVariableRegex = /\{[^}]+\}/g

    function removeNonChars(variableName) {
      return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
    }

    function extractUrlVariableNames(url) {
      const matches = url.match(urlVariableRegex)

      if (!matches) {
        return []
      }

      return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
    }

    function omit(object, keysToOmit) {
      return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
          obj[key] = object[key]
          return obj
        }, {})
    }

    // Based on https://github.com/bramstein/url-template, licensed under BSD
    // TODO: create separate package.
    //
    // Copyright (c) 2012-2014, Bram Stein
    // All rights reserved.
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //  1. Redistributions of source code must retain the above copyright
    //     notice, this list of conditions and the following disclaimer.
    //  2. Redistributions in binary form must reproduce the above copyright
    //     notice, this list of conditions and the following disclaimer in the
    //     documentation and/or other materials provided with the distribution.
    //  3. The name of the author may not be used to endorse or promote products
    //     derived from this software without specific prior written permission.
    // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
    // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
    // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
    // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    /* istanbul ignore file */
    function encodeReserved(str) {
      return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
          if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']')
          }

          return part
        })
        .join('')
    }

    function encodeUnreserved(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    function encodeValue(operator, value, key) {
      value =
        operator === '+' || operator === '#'
          ? encodeReserved(value)
          : encodeUnreserved(value)

      if (key) {
        return encodeUnreserved(key) + '=' + value
      } else {
        return value
      }
    }

    function isDefined(value) {
      return value !== undefined && value !== null
    }

    function isKeyOperator(operator) {
      return operator === ';' || operator === '&' || operator === '?'
    }

    function getValues(context, operator, key, modifier) {
      var value = context[key],
        result = []

      if (isDefined(value) && value !== '') {
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          value = value.toString()

          if (modifier && modifier !== '*') {
            value = value.substring(0, parseInt(modifier, 10))
          }

          result.push(
            encodeValue(operator, value, isKeyOperator(operator) ? key : '')
          )
        } else {
          if (modifier === '*') {
            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                result.push(
                  encodeValue(
                    operator,
                    value,
                    isKeyOperator(operator) ? key : ''
                  )
                )
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  result.push(encodeValue(operator, value[k], k))
                }
              })
            }
          } else {
            const tmp = []

            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                tmp.push(encodeValue(operator, value))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  tmp.push(encodeUnreserved(k))
                  tmp.push(encodeValue(operator, value[k].toString()))
                }
              })
            }

            if (isKeyOperator(operator)) {
              result.push(encodeUnreserved(key) + '=' + tmp.join(','))
            } else if (tmp.length !== 0) {
              result.push(tmp.join(','))
            }
          }
        }
      } else {
        if (operator === ';') {
          if (isDefined(value)) {
            result.push(encodeUnreserved(key))
          }
        } else if (value === '' && (operator === '&' || operator === '?')) {
          result.push(encodeUnreserved(key) + '=')
        } else if (value === '') {
          result.push('')
        }
      }

      return result
    }

    function parseUrl(template) {
      return {
        expand: expand.bind(null, template)
      }
    }

    function expand(template, context) {
      var operators = ['+', '#', '.', '/', ';', '?', '&']
      return template.replace(
        /\{([^\{\}]+)\}|([^\{\}]+)/g,
        function (_, expression, literal) {
          if (expression) {
            let operator = ''
            const values = []

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0)
              expression = expression.substr(1)
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
              values.push(
                getValues(context, operator, tmp[1], tmp[2] || tmp[3])
              )
            })

            if (operator && operator !== '+') {
              var separator = ','

              if (operator === '?') {
                separator = '&'
              } else if (operator !== '#') {
                separator = operator
              }

              return (
                (values.length !== 0 ? operator : '') + values.join(separator)
              )
            } else {
              return values.join(',')
            }
          } else {
            return encodeReserved(literal)
          }
        }
      )
    }

    function parse(options) {
      // https://fetch.spec.whatwg.org/#methods
      let method = options.method.toUpperCase() // replace :varname with {varname} to make it RFC 6570 compatible

      let url = (options.url || '/').replace(/:([a-z]\w+)/g, '{$1}')
      let headers = Object.assign({}, options.headers)
      let body
      let parameters = omit(options, [
        'method',
        'baseUrl',
        'url',
        'headers',
        'request',
        'mediaType'
      ]) // extract variable names from URL to calculate remaining variables later

      const urlVariableNames = extractUrlVariableNames(url)
      url = parseUrl(url).expand(parameters)

      if (!/^http/.test(url)) {
        url = options.baseUrl + url
      }

      const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat('baseUrl')
      const remainingParameters = omit(parameters, omittedParameters)
      const isBinaryRequest = /application\/octet-stream/i.test(headers.accept)

      if (!isBinaryRequest) {
        if (options.mediaType.format) {
          // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
          headers.accept = headers.accept
            .split(/,/)
            .map((preview) =>
              preview.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${options.mediaType.format}`
              )
            )
            .join(',')
        }

        if (options.mediaType.previews.length) {
          const previewsFromAcceptHeader =
            headers.accept.match(/[\w-]+(?=-preview)/g) || []
          headers.accept = previewsFromAcceptHeader
            .concat(options.mediaType.previews)
            .map((preview) => {
              const format = options.mediaType.format
                ? `.${options.mediaType.format}`
                : '+json'
              return `application/vnd.github.${preview}-preview${format}`
            })
            .join(',')
        }
      } // for GET/HEAD requests, set URL query parameters from remaining parameters
      // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters

      if (['GET', 'HEAD'].includes(method)) {
        url = addQueryParameters(url, remainingParameters)
      } else {
        if ('data' in remainingParameters) {
          body = remainingParameters.data
        } else {
          if (Object.keys(remainingParameters).length) {
            body = remainingParameters
          } else {
            headers['content-length'] = 0
          }
        }
      } // default content-type for JSON if body is set

      if (!headers['content-type'] && typeof body !== 'undefined') {
        headers['content-type'] = 'application/json; charset=utf-8'
      } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
      // fetch does not allow to set `content-length` header, but we can set body to an empty string

      if (['PATCH', 'PUT'].includes(method) && typeof body === 'undefined') {
        body = ''
      } // Only return body/request keys if present

      return Object.assign(
        {
          method,
          url,
          headers
        },
        typeof body !== 'undefined'
          ? {
              body
            }
          : null,
        options.request
          ? {
              request: options.request
            }
          : null
      )
    }

    function endpointWithDefaults(defaults, route, options) {
      return parse(merge(defaults, route, options))
    }

    function withDefaults(oldDefaults, newDefaults) {
      const DEFAULTS = merge(oldDefaults, newDefaults)
      const endpoint = endpointWithDefaults.bind(null, DEFAULTS)
      return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
      })
    }

    const VERSION = '7.0.1'

    const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}` // DEFAULTS has all properties set that EndpointOptions has, except url.
    // So we use RequestParameters and add method as additional required property.

    const DEFAULTS = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': userAgent
      },
      mediaType: {
        format: '',
        previews: []
      }
    }

    const endpoint = withDefaults(null, DEFAULTS)

    exports.endpoint = endpoint
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 4384: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var deprecation = __nccwpck_require__(8932)
    var once = _interopDefault(__nccwpck_require__(1223))

    const logOnceCode = once((deprecation) => console.warn(deprecation))
    const logOnceHeaders = once((deprecation) => console.warn(deprecation))
    /**
     * Error with extra properties to help with debugging
     */

    class RequestError extends Error {
      constructor(message, statusCode, options) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'HttpError'
        this.status = statusCode
        let headers

        if ('headers' in options && typeof options.headers !== 'undefined') {
          headers = options.headers
        }

        if ('response' in options) {
          this.response = options.response
          headers = options.response.headers
        } // redact request credentials without mutating original request options

        const requestCopy = Object.assign({}, options.request)

        if (options.request.headers.authorization) {
          requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(
              / .*$/,
              ' [REDACTED]'
            )
          })
        }

        requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
          // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]') // OAuth tokens can be passed as URL query parameters, although it is not recommended
          // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = requestCopy // deprecations

        Object.defineProperty(this, 'code', {
          get() {
            logOnceCode(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return statusCode
          }
        })
        Object.defineProperty(this, 'headers', {
          get() {
            logOnceHeaders(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.'
              )
            )
            return headers || {}
          }
        })
      }
    }

    exports.RequestError = RequestError
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 4847: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var endpoint = __nccwpck_require__(6152)
    var universalUserAgent = __nccwpck_require__(5030)
    var isPlainObject = __nccwpck_require__(3287)
    var nodeFetch = _interopDefault(__nccwpck_require__(467))
    var requestError = __nccwpck_require__(4384)

    const VERSION = '6.2.1'

    function getBufferResponse(response) {
      return response.arrayBuffer()
    }

    function fetchWrapper(requestOptions) {
      const log =
        requestOptions.request && requestOptions.request.log
          ? requestOptions.request.log
          : console

      if (
        isPlainObject.isPlainObject(requestOptions.body) ||
        Array.isArray(requestOptions.body)
      ) {
        requestOptions.body = JSON.stringify(requestOptions.body)
      }

      let headers = {}
      let status
      let url
      const fetch =
        (requestOptions.request && requestOptions.request.fetch) ||
        globalThis.fetch ||
        /* istanbul ignore next */
        nodeFetch
      return fetch(
        requestOptions.url,
        Object.assign(
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: requestOptions.headers,
            redirect: requestOptions.redirect
          }, // `requestOptions.request.agent` type is incompatible
          // see https://github.com/octokit/types.ts/pull/264
          requestOptions.request
        )
      )
        .then(async (response) => {
          url = response.url
          status = response.status

          for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1]
          }

          if ('deprecation' in headers) {
            const matches =
              headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/)
            const deprecationLink = matches && matches.pop()
            log.warn(
              `[@octokit/request] "${requestOptions.method} ${
                requestOptions.url
              }" is deprecated. It is scheduled to be removed on ${
                headers.sunset
              }${deprecationLink ? `. See ${deprecationLink}` : ''}`
            )
          }

          if (status === 204 || status === 205) {
            return
          } // GitHub API returns 200 for HEAD requests

          if (requestOptions.method === 'HEAD') {
            if (status < 400) {
              return
            }

            throw new requestError.RequestError(response.statusText, status, {
              response: {
                url,
                status,
                headers,
                data: undefined
              },
              request: requestOptions
            })
          }

          if (status === 304) {
            throw new requestError.RequestError('Not modified', status, {
              response: {
                url,
                status,
                headers,
                data: await getResponseData(response)
              },
              request: requestOptions
            })
          }

          if (status >= 400) {
            const data = await getResponseData(response)
            const error = new requestError.RequestError(
              toErrorMessage(data),
              status,
              {
                response: {
                  url,
                  status,
                  headers,
                  data
                },
                request: requestOptions
              }
            )
            throw error
          }

          return getResponseData(response)
        })
        .then((data) => {
          return {
            status,
            url,
            headers,
            data
          }
        })
        .catch((error) => {
          if (error instanceof requestError.RequestError) throw error
          else if (error.name === 'AbortError') throw error
          throw new requestError.RequestError(error.message, 500, {
            request: requestOptions
          })
        })
    }

    async function getResponseData(response) {
      const contentType = response.headers.get('content-type')

      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBufferResponse(response)
    }

    function toErrorMessage(data) {
      if (typeof data === 'string') return data // istanbul ignore else - just in case

      if ('message' in data) {
        if (Array.isArray(data.errors)) {
          return `${data.message}: ${data.errors
            .map(JSON.stringify)
            .join(', ')}`
        }

        return data.message
      } // istanbul ignore next - just in case

      return `Unknown error: ${JSON.stringify(data)}`
    }

    function withDefaults(oldEndpoint, newDefaults) {
      const endpoint = oldEndpoint.defaults(newDefaults)

      const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters)

        if (!endpointOptions.request || !endpointOptions.request.hook) {
          return fetchWrapper(endpoint.parse(endpointOptions))
        }

        const request = (route, parameters) => {
          return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)))
        }

        Object.assign(request, {
          endpoint,
          defaults: withDefaults.bind(null, endpoint)
        })
        return endpointOptions.request.hook(request, endpointOptions)
      }

      return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
      })
    }

    const request = withDefaults(endpoint.endpoint, {
      headers: {
        'user-agent': `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      }
    })

    exports.request = request
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 1591: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var universalUserAgent = __nccwpck_require__(5030)
    var request = __nccwpck_require__(8608)
    var authOauthDevice = __nccwpck_require__(4344)
    var oauthMethods = __nccwpck_require__(8445)
    var btoa = _interopDefault(__nccwpck_require__(2358))

    const VERSION = '2.0.3'

    // @ts-nocheck there is only place for one of us in this file. And it's not you, TS
    async function getAuthentication(state) {
      // handle code exchange form OAuth Web Flow
      if ('code' in state.strategyOptions) {
        const { authentication } = await oauthMethods.exchangeWebFlowCode({
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          clientType: state.clientType,
          ...state.strategyOptions,
          request: state.request
        })
        return {
          type: 'token',
          tokenType: 'oauth',
          ...authentication
        }
      } // handle OAuth device flow

      if ('onVerification' in state.strategyOptions) {
        const deviceAuth = authOauthDevice.createOAuthDeviceAuth({
          clientType: state.clientType,
          clientId: state.clientId,
          ...state.strategyOptions,
          request: state.request
        })
        const authentication = await deviceAuth({
          type: 'oauth'
        })
        return {
          clientSecret: state.clientSecret,
          ...authentication
        }
      } // use existing authentication

      if ('token' in state.strategyOptions) {
        return {
          type: 'token',
          tokenType: 'oauth',
          clientId: state.clientId,
          clientSecret: state.clientSecret,
          clientType: state.clientType,
          ...state.strategyOptions
        }
      }

      throw new Error('[@octokit/auth-oauth-user] Invalid strategy options')
    }

    async function auth(state, options = {}) {
      if (!state.authentication) {
        // This is what TS makes us do ¯\_(ツ)_/¯
        state.authentication =
          state.clientType === 'oauth-app'
            ? await getAuthentication(state)
            : await getAuthentication(state)
      }

      if (state.authentication.invalid) {
        throw new Error('[@octokit/auth-oauth-user] Token is invalid')
      }

      const currentAuthentication = state.authentication // (auto) refresh for user-to-server tokens

      if ('expiresAt' in currentAuthentication) {
        if (
          options.type === 'refresh' ||
          new Date(currentAuthentication.expiresAt) < new Date()
        ) {
          const { authentication } = await oauthMethods.refreshToken({
            clientType: 'github-app',
            clientId: state.clientId,
            clientSecret: state.clientSecret,
            refreshToken: currentAuthentication.refreshToken,
            request: state.request
          })
          state.authentication = {
            tokenType: 'oauth',
            type: 'token',
            ...authentication
          }
        }
      } // throw error for invalid refresh call

      if (options.type === 'refresh') {
        if (state.clientType === 'oauth-app') {
          throw new Error(
            '[@octokit/auth-oauth-user] OAuth Apps do not support expiring tokens'
          )
        }

        if (!currentAuthentication.hasOwnProperty('expiresAt')) {
          throw new Error('[@octokit/auth-oauth-user] Refresh token missing')
        }
      } // check or reset token

      if (options.type === 'check' || options.type === 'reset') {
        const method =
          options.type === 'check'
            ? oauthMethods.checkToken
            : oauthMethods.resetToken

        try {
          const { authentication } = await method({
            // @ts-expect-error making TS happy would require unnecessary code so no
            clientType: state.clientType,
            clientId: state.clientId,
            clientSecret: state.clientSecret,
            token: state.authentication.token,
            request: state.request
          })
          state.authentication = {
            tokenType: 'oauth',
            type: 'token',
            // @ts-expect-error TBD
            ...authentication
          }
          return state.authentication
        } catch (error) {
          // istanbul ignore else
          if (error.status === 404) {
            error.message = '[@octokit/auth-oauth-user] Token is invalid' // @ts-expect-error TBD

            state.authentication.invalid = true
          }

          throw error
        }
      } // invalidate

      if (options.type === 'delete' || options.type === 'deleteAuthorization') {
        const method =
          options.type === 'delete'
            ? oauthMethods.deleteToken
            : oauthMethods.deleteAuthorization

        try {
          await method({
            // @ts-expect-error making TS happy would require unnecessary code so no
            clientType: state.clientType,
            clientId: state.clientId,
            clientSecret: state.clientSecret,
            token: state.authentication.token,
            request: state.request
          })
        } catch (error) {
          // istanbul ignore if
          if (error.status !== 404) throw error
        }

        state.authentication.invalid = true
        return state.authentication
      }

      return state.authentication
    }

    /**
     * The following endpoints require an OAuth App to authenticate using its client_id and client_secret.
     *
     * - [`POST /applications/{client_id}/token`](https://docs.github.com/en/rest/reference/apps#check-a-token) - Check a token
     * - [`PATCH /applications/{client_id}/token`](https://docs.github.com/en/rest/reference/apps#reset-a-token) - Reset a token
     * - [`POST /applications/{client_id}/token/scoped`](https://docs.github.com/en/rest/reference/apps#create-a-scoped-access-token) - Create a scoped access token
     * - [`DELETE /applications/{client_id}/token`](https://docs.github.com/en/rest/reference/apps#delete-an-app-token) - Delete an app token
     * - [`DELETE /applications/{client_id}/grant`](https://docs.github.com/en/rest/reference/apps#delete-an-app-authorization) - Delete an app authorization
     *
     * deprecated:
     *
     * - [`GET /applications/{client_id}/tokens/{access_token}`](https://docs.github.com/en/rest/reference/apps#check-an-authorization) - Check an authorization
     * - [`POST /applications/{client_id}/tokens/{access_token}`](https://docs.github.com/en/rest/reference/apps#reset-an-authorization) - Reset an authorization
     * - [`DELETE /applications/{client_id}/tokens/{access_token}`](https://docs.github.com/en/rest/reference/apps#revoke-an-authorization-for-an-application) - Revoke an authorization for an application
     * - [`DELETE /applications/{client_id}/grants/{access_token}`](https://docs.github.com/en/rest/reference/apps#revoke-a-grant-for-an-application) - Revoke a grant for an application
     */
    const ROUTES_REQUIRING_BASIC_AUTH = /\/applications\/[^/]+\/(token|grant)s?/
    function requiresBasicAuth(url) {
      return url && ROUTES_REQUIRING_BASIC_AUTH.test(url)
    }

    async function hook(state, request, route, parameters = {}) {
      const endpoint = request.endpoint.merge(route, parameters) // Do not intercept OAuth Web/Device flow request

      if (/\/login\/(oauth\/access_token|device\/code)$/.test(endpoint.url)) {
        return request(endpoint)
      }

      if (requiresBasicAuth(endpoint.url)) {
        const credentials = btoa(`${state.clientId}:${state.clientSecret}`)
        endpoint.headers.authorization = `basic ${credentials}`
        return request(endpoint)
      } // TS makes us do this ¯\_(ツ)_/¯

      const { token } =
        state.clientType === 'oauth-app'
          ? await auth({ ...state, request })
          : await auth({ ...state, request })
      endpoint.headers.authorization = 'token ' + token
      return request(endpoint)
    }

    function createOAuthUserAuth({
      clientId,
      clientSecret,
      clientType = 'oauth-app',
      request: request$1 = request.request.defaults({
        headers: {
          'user-agent': `octokit-auth-oauth-app.js/${VERSION} ${universalUserAgent.getUserAgent()}`
        }
      }),
      ...strategyOptions
    }) {
      const state = Object.assign({
        clientType,
        clientId,
        clientSecret,
        strategyOptions,
        request: request$1
      }) // @ts-expect-error not worth the extra code needed to appease TS

      return Object.assign(auth.bind(null, state), {
        // @ts-expect-error not worth the extra code needed to appease TS
        hook: hook.bind(null, state)
      })
    }
    createOAuthUserAuth.VERSION = VERSION

    exports.createOAuthUserAuth = createOAuthUserAuth
    exports.requiresBasicAuth = requiresBasicAuth
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 7224: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var isPlainObject = __nccwpck_require__(3287)
    var universalUserAgent = __nccwpck_require__(5030)

    function lowercaseKeys(object) {
      if (!object) {
        return {}
      }

      return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key]
        return newObj
      }, {})
    }

    function mergeDeep(defaults, options) {
      const result = Object.assign({}, defaults)
      Object.keys(options).forEach((key) => {
        if (isPlainObject.isPlainObject(options[key])) {
          if (!(key in defaults))
            Object.assign(result, {
              [key]: options[key]
            })
          else result[key] = mergeDeep(defaults[key], options[key])
        } else {
          Object.assign(result, {
            [key]: options[key]
          })
        }
      })
      return result
    }

    function removeUndefinedProperties(obj) {
      for (const key in obj) {
        if (obj[key] === undefined) {
          delete obj[key]
        }
      }

      return obj
    }

    function merge(defaults, route, options) {
      if (typeof route === 'string') {
        let [method, url] = route.split(' ')
        options = Object.assign(
          url
            ? {
                method,
                url
              }
            : {
                url: method
              },
          options
        )
      } else {
        options = Object.assign({}, route)
      } // lowercase header names before merging with defaults to avoid duplicates

      options.headers = lowercaseKeys(options.headers) // remove properties with undefined values before merging

      removeUndefinedProperties(options)
      removeUndefinedProperties(options.headers)
      const mergedOptions = mergeDeep(defaults || {}, options) // mediaType.previews arrays are merged, instead of overwritten

      if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
          .filter(
            (preview) => !mergedOptions.mediaType.previews.includes(preview)
          )
          .concat(mergedOptions.mediaType.previews)
      }

      mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(
        (preview) => preview.replace(/-preview/, '')
      )
      return mergedOptions
    }

    function addQueryParameters(url, parameters) {
      const separator = /\?/.test(url) ? '&' : '?'
      const names = Object.keys(parameters)

      if (names.length === 0) {
        return url
      }

      return (
        url +
        separator +
        names
          .map((name) => {
            if (name === 'q') {
              return (
                'q=' + parameters.q.split('+').map(encodeURIComponent).join('+')
              )
            }

            return `${name}=${encodeURIComponent(parameters[name])}`
          })
          .join('&')
      )
    }

    const urlVariableRegex = /\{[^}]+\}/g

    function removeNonChars(variableName) {
      return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
    }

    function extractUrlVariableNames(url) {
      const matches = url.match(urlVariableRegex)

      if (!matches) {
        return []
      }

      return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
    }

    function omit(object, keysToOmit) {
      return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
          obj[key] = object[key]
          return obj
        }, {})
    }

    // Based on https://github.com/bramstein/url-template, licensed under BSD
    // TODO: create separate package.
    //
    // Copyright (c) 2012-2014, Bram Stein
    // All rights reserved.
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //  1. Redistributions of source code must retain the above copyright
    //     notice, this list of conditions and the following disclaimer.
    //  2. Redistributions in binary form must reproduce the above copyright
    //     notice, this list of conditions and the following disclaimer in the
    //     documentation and/or other materials provided with the distribution.
    //  3. The name of the author may not be used to endorse or promote products
    //     derived from this software without specific prior written permission.
    // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
    // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
    // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
    // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    /* istanbul ignore file */
    function encodeReserved(str) {
      return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
          if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']')
          }

          return part
        })
        .join('')
    }

    function encodeUnreserved(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    function encodeValue(operator, value, key) {
      value =
        operator === '+' || operator === '#'
          ? encodeReserved(value)
          : encodeUnreserved(value)

      if (key) {
        return encodeUnreserved(key) + '=' + value
      } else {
        return value
      }
    }

    function isDefined(value) {
      return value !== undefined && value !== null
    }

    function isKeyOperator(operator) {
      return operator === ';' || operator === '&' || operator === '?'
    }

    function getValues(context, operator, key, modifier) {
      var value = context[key],
        result = []

      if (isDefined(value) && value !== '') {
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          value = value.toString()

          if (modifier && modifier !== '*') {
            value = value.substring(0, parseInt(modifier, 10))
          }

          result.push(
            encodeValue(operator, value, isKeyOperator(operator) ? key : '')
          )
        } else {
          if (modifier === '*') {
            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                result.push(
                  encodeValue(
                    operator,
                    value,
                    isKeyOperator(operator) ? key : ''
                  )
                )
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  result.push(encodeValue(operator, value[k], k))
                }
              })
            }
          } else {
            const tmp = []

            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                tmp.push(encodeValue(operator, value))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  tmp.push(encodeUnreserved(k))
                  tmp.push(encodeValue(operator, value[k].toString()))
                }
              })
            }

            if (isKeyOperator(operator)) {
              result.push(encodeUnreserved(key) + '=' + tmp.join(','))
            } else if (tmp.length !== 0) {
              result.push(tmp.join(','))
            }
          }
        }
      } else {
        if (operator === ';') {
          if (isDefined(value)) {
            result.push(encodeUnreserved(key))
          }
        } else if (value === '' && (operator === '&' || operator === '?')) {
          result.push(encodeUnreserved(key) + '=')
        } else if (value === '') {
          result.push('')
        }
      }

      return result
    }

    function parseUrl(template) {
      return {
        expand: expand.bind(null, template)
      }
    }

    function expand(template, context) {
      var operators = ['+', '#', '.', '/', ';', '?', '&']
      return template.replace(
        /\{([^\{\}]+)\}|([^\{\}]+)/g,
        function (_, expression, literal) {
          if (expression) {
            let operator = ''
            const values = []

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0)
              expression = expression.substr(1)
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
              values.push(
                getValues(context, operator, tmp[1], tmp[2] || tmp[3])
              )
            })

            if (operator && operator !== '+') {
              var separator = ','

              if (operator === '?') {
                separator = '&'
              } else if (operator !== '#') {
                separator = operator
              }

              return (
                (values.length !== 0 ? operator : '') + values.join(separator)
              )
            } else {
              return values.join(',')
            }
          } else {
            return encodeReserved(literal)
          }
        }
      )
    }

    function parse(options) {
      // https://fetch.spec.whatwg.org/#methods
      let method = options.method.toUpperCase() // replace :varname with {varname} to make it RFC 6570 compatible

      let url = (options.url || '/').replace(/:([a-z]\w+)/g, '{$1}')
      let headers = Object.assign({}, options.headers)
      let body
      let parameters = omit(options, [
        'method',
        'baseUrl',
        'url',
        'headers',
        'request',
        'mediaType'
      ]) // extract variable names from URL to calculate remaining variables later

      const urlVariableNames = extractUrlVariableNames(url)
      url = parseUrl(url).expand(parameters)

      if (!/^http/.test(url)) {
        url = options.baseUrl + url
      }

      const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat('baseUrl')
      const remainingParameters = omit(parameters, omittedParameters)
      const isBinaryRequest = /application\/octet-stream/i.test(headers.accept)

      if (!isBinaryRequest) {
        if (options.mediaType.format) {
          // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
          headers.accept = headers.accept
            .split(/,/)
            .map((preview) =>
              preview.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${options.mediaType.format}`
              )
            )
            .join(',')
        }

        if (options.mediaType.previews.length) {
          const previewsFromAcceptHeader =
            headers.accept.match(/[\w-]+(?=-preview)/g) || []
          headers.accept = previewsFromAcceptHeader
            .concat(options.mediaType.previews)
            .map((preview) => {
              const format = options.mediaType.format
                ? `.${options.mediaType.format}`
                : '+json'
              return `application/vnd.github.${preview}-preview${format}`
            })
            .join(',')
        }
      } // for GET/HEAD requests, set URL query parameters from remaining parameters
      // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters

      if (['GET', 'HEAD'].includes(method)) {
        url = addQueryParameters(url, remainingParameters)
      } else {
        if ('data' in remainingParameters) {
          body = remainingParameters.data
        } else {
          if (Object.keys(remainingParameters).length) {
            body = remainingParameters
          } else {
            headers['content-length'] = 0
          }
        }
      } // default content-type for JSON if body is set

      if (!headers['content-type'] && typeof body !== 'undefined') {
        headers['content-type'] = 'application/json; charset=utf-8'
      } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
      // fetch does not allow to set `content-length` header, but we can set body to an empty string

      if (['PATCH', 'PUT'].includes(method) && typeof body === 'undefined') {
        body = ''
      } // Only return body/request keys if present

      return Object.assign(
        {
          method,
          url,
          headers
        },
        typeof body !== 'undefined'
          ? {
              body
            }
          : null,
        options.request
          ? {
              request: options.request
            }
          : null
      )
    }

    function endpointWithDefaults(defaults, route, options) {
      return parse(merge(defaults, route, options))
    }

    function withDefaults(oldDefaults, newDefaults) {
      const DEFAULTS = merge(oldDefaults, newDefaults)
      const endpoint = endpointWithDefaults.bind(null, DEFAULTS)
      return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
      })
    }

    const VERSION = '7.0.1'

    const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}` // DEFAULTS has all properties set that EndpointOptions has, except url.
    // So we use RequestParameters and add method as additional required property.

    const DEFAULTS = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': userAgent
      },
      mediaType: {
        format: '',
        previews: []
      }
    }

    const endpoint = withDefaults(null, DEFAULTS)

    exports.endpoint = endpoint
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 7450: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var deprecation = __nccwpck_require__(8932)
    var once = _interopDefault(__nccwpck_require__(1223))

    const logOnceCode = once((deprecation) => console.warn(deprecation))
    const logOnceHeaders = once((deprecation) => console.warn(deprecation))
    /**
     * Error with extra properties to help with debugging
     */

    class RequestError extends Error {
      constructor(message, statusCode, options) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'HttpError'
        this.status = statusCode
        let headers

        if ('headers' in options && typeof options.headers !== 'undefined') {
          headers = options.headers
        }

        if ('response' in options) {
          this.response = options.response
          headers = options.response.headers
        } // redact request credentials without mutating original request options

        const requestCopy = Object.assign({}, options.request)

        if (options.request.headers.authorization) {
          requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(
              / .*$/,
              ' [REDACTED]'
            )
          })
        }

        requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
          // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]') // OAuth tokens can be passed as URL query parameters, although it is not recommended
          // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = requestCopy // deprecations

        Object.defineProperty(this, 'code', {
          get() {
            logOnceCode(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return statusCode
          }
        })
        Object.defineProperty(this, 'headers', {
          get() {
            logOnceHeaders(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.'
              )
            )
            return headers || {}
          }
        })
      }
    }

    exports.RequestError = RequestError
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 8608: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var endpoint = __nccwpck_require__(7224)
    var universalUserAgent = __nccwpck_require__(5030)
    var isPlainObject = __nccwpck_require__(3287)
    var nodeFetch = _interopDefault(__nccwpck_require__(467))
    var requestError = __nccwpck_require__(7450)

    const VERSION = '6.2.1'

    function getBufferResponse(response) {
      return response.arrayBuffer()
    }

    function fetchWrapper(requestOptions) {
      const log =
        requestOptions.request && requestOptions.request.log
          ? requestOptions.request.log
          : console

      if (
        isPlainObject.isPlainObject(requestOptions.body) ||
        Array.isArray(requestOptions.body)
      ) {
        requestOptions.body = JSON.stringify(requestOptions.body)
      }

      let headers = {}
      let status
      let url
      const fetch =
        (requestOptions.request && requestOptions.request.fetch) ||
        globalThis.fetch ||
        /* istanbul ignore next */
        nodeFetch
      return fetch(
        requestOptions.url,
        Object.assign(
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: requestOptions.headers,
            redirect: requestOptions.redirect
          }, // `requestOptions.request.agent` type is incompatible
          // see https://github.com/octokit/types.ts/pull/264
          requestOptions.request
        )
      )
        .then(async (response) => {
          url = response.url
          status = response.status

          for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1]
          }

          if ('deprecation' in headers) {
            const matches =
              headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/)
            const deprecationLink = matches && matches.pop()
            log.warn(
              `[@octokit/request] "${requestOptions.method} ${
                requestOptions.url
              }" is deprecated. It is scheduled to be removed on ${
                headers.sunset
              }${deprecationLink ? `. See ${deprecationLink}` : ''}`
            )
          }

          if (status === 204 || status === 205) {
            return
          } // GitHub API returns 200 for HEAD requests

          if (requestOptions.method === 'HEAD') {
            if (status < 400) {
              return
            }

            throw new requestError.RequestError(response.statusText, status, {
              response: {
                url,
                status,
                headers,
                data: undefined
              },
              request: requestOptions
            })
          }

          if (status === 304) {
            throw new requestError.RequestError('Not modified', status, {
              response: {
                url,
                status,
                headers,
                data: await getResponseData(response)
              },
              request: requestOptions
            })
          }

          if (status >= 400) {
            const data = await getResponseData(response)
            const error = new requestError.RequestError(
              toErrorMessage(data),
              status,
              {
                response: {
                  url,
                  status,
                  headers,
                  data
                },
                request: requestOptions
              }
            )
            throw error
          }

          return getResponseData(response)
        })
        .then((data) => {
          return {
            status,
            url,
            headers,
            data
          }
        })
        .catch((error) => {
          if (error instanceof requestError.RequestError) throw error
          else if (error.name === 'AbortError') throw error
          throw new requestError.RequestError(error.message, 500, {
            request: requestOptions
          })
        })
    }

    async function getResponseData(response) {
      const contentType = response.headers.get('content-type')

      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBufferResponse(response)
    }

    function toErrorMessage(data) {
      if (typeof data === 'string') return data // istanbul ignore else - just in case

      if ('message' in data) {
        if (Array.isArray(data.errors)) {
          return `${data.message}: ${data.errors
            .map(JSON.stringify)
            .join(', ')}`
        }

        return data.message
      } // istanbul ignore next - just in case

      return `Unknown error: ${JSON.stringify(data)}`
    }

    function withDefaults(oldEndpoint, newDefaults) {
      const endpoint = oldEndpoint.defaults(newDefaults)

      const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters)

        if (!endpointOptions.request || !endpointOptions.request.hook) {
          return fetchWrapper(endpoint.parse(endpointOptions))
        }

        const request = (route, parameters) => {
          return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)))
        }

        Object.assign(request, {
          endpoint,
          defaults: withDefaults.bind(null, endpoint)
        })
        return endpointOptions.request.hook(request, endpointOptions)
      }

      return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
      })
    }

    const request = withDefaults(endpoint.endpoint, {
      headers: {
        'user-agent': `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      }
    })

    exports.request = request
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 334: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    const REGEX_IS_INSTALLATION_LEGACY = /^v1\./
    const REGEX_IS_INSTALLATION = /^ghs_/
    const REGEX_IS_USER_TO_SERVER = /^ghu_/
    async function auth(token) {
      const isApp = token.split(/\./).length === 3
      const isInstallation =
        REGEX_IS_INSTALLATION_LEGACY.test(token) ||
        REGEX_IS_INSTALLATION.test(token)
      const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token)
      const tokenType = isApp
        ? 'app'
        : isInstallation
        ? 'installation'
        : isUserToServer
        ? 'user-to-server'
        : 'oauth'
      return {
        type: 'token',
        token: token,
        tokenType
      }
    }

    /**
     * Prefix token for usage in the Authorization header
     *
     * @param token OAuth token or JSON Web Token
     */
    function withAuthorizationPrefix(token) {
      if (token.split(/\./).length === 3) {
        return `bearer ${token}`
      }

      return `token ${token}`
    }

    async function hook(token, request, route, parameters) {
      const endpoint = request.endpoint.merge(route, parameters)
      endpoint.headers.authorization = withAuthorizationPrefix(token)
      return request(endpoint)
    }

    const createTokenAuth = function createTokenAuth(token) {
      if (!token) {
        throw new Error(
          '[@octokit/auth-token] No token passed to createTokenAuth'
        )
      }

      if (typeof token !== 'string') {
        throw new Error(
          '[@octokit/auth-token] Token passed to createTokenAuth is not a string'
        )
      }

      token = token.replace(/^(token|bearer) +/i, '')
      return Object.assign(auth.bind(null, token), {
        hook: hook.bind(null, token)
      })
    }

    exports.createTokenAuth = createTokenAuth
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 6762: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var universalUserAgent = __nccwpck_require__(5030)
    var beforeAfterHook = __nccwpck_require__(3682)
    var request = __nccwpck_require__(6234)
    var graphql = __nccwpck_require__(8467)
    var authToken = __nccwpck_require__(334)

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {}
      var target = {}
      var sourceKeys = Object.keys(source)
      var key, i

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        target[key] = source[key]
      }

      return target
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {}

      var target = _objectWithoutPropertiesLoose(source, excluded)

      var key, i

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source)

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i]
          if (excluded.indexOf(key) >= 0) continue
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
          target[key] = source[key]
        }
      }

      return target
    }

    const VERSION = '3.6.0'

    const _excluded = ['authStrategy']
    class Octokit {
      constructor(options = {}) {
        const hook = new beforeAfterHook.Collection()
        const requestDefaults = {
          baseUrl: request.request.endpoint.DEFAULTS.baseUrl,
          headers: {},
          request: Object.assign({}, options.request, {
            // @ts-ignore internal usage only, no need to type
            hook: hook.bind(null, 'request')
          }),
          mediaType: {
            previews: [],
            format: ''
          }
        } // prepend default user agent with `options.userAgent` if set

        requestDefaults.headers['user-agent'] = [
          options.userAgent,
          `octokit-core.js/${VERSION} ${universalUserAgent.getUserAgent()}`
        ]
          .filter(Boolean)
          .join(' ')

        if (options.baseUrl) {
          requestDefaults.baseUrl = options.baseUrl
        }

        if (options.previews) {
          requestDefaults.mediaType.previews = options.previews
        }

        if (options.timeZone) {
          requestDefaults.headers['time-zone'] = options.timeZone
        }

        this.request = request.request.defaults(requestDefaults)
        this.graphql = graphql
          .withCustomRequest(this.request)
          .defaults(requestDefaults)
        this.log = Object.assign(
          {
            debug: () => {},
            info: () => {},
            warn: console.warn.bind(console),
            error: console.error.bind(console)
          },
          options.log
        )
        this.hook = hook // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
        //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
        // (2) If only `options.auth` is set, use the default token authentication strategy.
        // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
        // TODO: type `options.auth` based on `options.authStrategy`.

        if (!options.authStrategy) {
          if (!options.auth) {
            // (1)
            this.auth = async () => ({
              type: 'unauthenticated'
            })
          } else {
            // (2)
            const auth = authToken.createTokenAuth(options.auth) // @ts-ignore  ¯\_(ツ)_/¯

            hook.wrap('request', auth.hook)
            this.auth = auth
          }
        } else {
          const { authStrategy } = options,
            otherOptions = _objectWithoutProperties(options, _excluded)

          const auth = authStrategy(
            Object.assign(
              {
                request: this.request,
                log: this.log,
                // we pass the current octokit instance as well as its constructor options
                // to allow for authentication strategies that return a new octokit instance
                // that shares the same internal state as the current one. The original
                // requirement for this was the "event-octokit" authentication strategy
                // of https://github.com/probot/octokit-auth-probot.
                octokit: this,
                octokitOptions: otherOptions
              },
              options.auth
            )
          ) // @ts-ignore  ¯\_(ツ)_/¯

          hook.wrap('request', auth.hook)
          this.auth = auth
        } // apply plugins
        // https://stackoverflow.com/a/16345172

        const classConstructor = this.constructor
        classConstructor.plugins.forEach((plugin) => {
          Object.assign(this, plugin(this, options))
        })
      }

      static defaults(defaults) {
        const OctokitWithDefaults = class extends this {
          constructor(...args) {
            const options = args[0] || {}

            if (typeof defaults === 'function') {
              super(defaults(options))
              return
            }

            super(
              Object.assign(
                {},
                defaults,
                options,
                options.userAgent && defaults.userAgent
                  ? {
                      userAgent: `${options.userAgent} ${defaults.userAgent}`
                    }
                  : null
              )
            )
          }
        }
        return OctokitWithDefaults
      }
      /**
       * Attach a plugin (or many) to your Octokit instance.
       *
       * @example
       * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
       */

      static plugin(...newPlugins) {
        var _a

        const currentPlugins = this.plugins
        const NewOctokit =
          ((_a = class extends this {}),
          (_a.plugins = currentPlugins.concat(
            newPlugins.filter((plugin) => !currentPlugins.includes(plugin))
          )),
          _a)
        return NewOctokit
      }
    }
    Octokit.VERSION = VERSION
    Octokit.plugins = []

    exports.Octokit = Octokit
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 9440: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var isPlainObject = __nccwpck_require__(3287)
    var universalUserAgent = __nccwpck_require__(5030)

    function lowercaseKeys(object) {
      if (!object) {
        return {}
      }

      return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key]
        return newObj
      }, {})
    }

    function mergeDeep(defaults, options) {
      const result = Object.assign({}, defaults)
      Object.keys(options).forEach((key) => {
        if (isPlainObject.isPlainObject(options[key])) {
          if (!(key in defaults))
            Object.assign(result, {
              [key]: options[key]
            })
          else result[key] = mergeDeep(defaults[key], options[key])
        } else {
          Object.assign(result, {
            [key]: options[key]
          })
        }
      })
      return result
    }

    function removeUndefinedProperties(obj) {
      for (const key in obj) {
        if (obj[key] === undefined) {
          delete obj[key]
        }
      }

      return obj
    }

    function merge(defaults, route, options) {
      if (typeof route === 'string') {
        let [method, url] = route.split(' ')
        options = Object.assign(
          url
            ? {
                method,
                url
              }
            : {
                url: method
              },
          options
        )
      } else {
        options = Object.assign({}, route)
      } // lowercase header names before merging with defaults to avoid duplicates

      options.headers = lowercaseKeys(options.headers) // remove properties with undefined values before merging

      removeUndefinedProperties(options)
      removeUndefinedProperties(options.headers)
      const mergedOptions = mergeDeep(defaults || {}, options) // mediaType.previews arrays are merged, instead of overwritten

      if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
          .filter(
            (preview) => !mergedOptions.mediaType.previews.includes(preview)
          )
          .concat(mergedOptions.mediaType.previews)
      }

      mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(
        (preview) => preview.replace(/-preview/, '')
      )
      return mergedOptions
    }

    function addQueryParameters(url, parameters) {
      const separator = /\?/.test(url) ? '&' : '?'
      const names = Object.keys(parameters)

      if (names.length === 0) {
        return url
      }

      return (
        url +
        separator +
        names
          .map((name) => {
            if (name === 'q') {
              return (
                'q=' + parameters.q.split('+').map(encodeURIComponent).join('+')
              )
            }

            return `${name}=${encodeURIComponent(parameters[name])}`
          })
          .join('&')
      )
    }

    const urlVariableRegex = /\{[^}]+\}/g

    function removeNonChars(variableName) {
      return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
    }

    function extractUrlVariableNames(url) {
      const matches = url.match(urlVariableRegex)

      if (!matches) {
        return []
      }

      return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
    }

    function omit(object, keysToOmit) {
      return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
          obj[key] = object[key]
          return obj
        }, {})
    }

    // Based on https://github.com/bramstein/url-template, licensed under BSD
    // TODO: create separate package.
    //
    // Copyright (c) 2012-2014, Bram Stein
    // All rights reserved.
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //  1. Redistributions of source code must retain the above copyright
    //     notice, this list of conditions and the following disclaimer.
    //  2. Redistributions in binary form must reproduce the above copyright
    //     notice, this list of conditions and the following disclaimer in the
    //     documentation and/or other materials provided with the distribution.
    //  3. The name of the author may not be used to endorse or promote products
    //     derived from this software without specific prior written permission.
    // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
    // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
    // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
    // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    /* istanbul ignore file */
    function encodeReserved(str) {
      return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
          if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']')
          }

          return part
        })
        .join('')
    }

    function encodeUnreserved(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    function encodeValue(operator, value, key) {
      value =
        operator === '+' || operator === '#'
          ? encodeReserved(value)
          : encodeUnreserved(value)

      if (key) {
        return encodeUnreserved(key) + '=' + value
      } else {
        return value
      }
    }

    function isDefined(value) {
      return value !== undefined && value !== null
    }

    function isKeyOperator(operator) {
      return operator === ';' || operator === '&' || operator === '?'
    }

    function getValues(context, operator, key, modifier) {
      var value = context[key],
        result = []

      if (isDefined(value) && value !== '') {
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          value = value.toString()

          if (modifier && modifier !== '*') {
            value = value.substring(0, parseInt(modifier, 10))
          }

          result.push(
            encodeValue(operator, value, isKeyOperator(operator) ? key : '')
          )
        } else {
          if (modifier === '*') {
            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                result.push(
                  encodeValue(
                    operator,
                    value,
                    isKeyOperator(operator) ? key : ''
                  )
                )
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  result.push(encodeValue(operator, value[k], k))
                }
              })
            }
          } else {
            const tmp = []

            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                tmp.push(encodeValue(operator, value))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  tmp.push(encodeUnreserved(k))
                  tmp.push(encodeValue(operator, value[k].toString()))
                }
              })
            }

            if (isKeyOperator(operator)) {
              result.push(encodeUnreserved(key) + '=' + tmp.join(','))
            } else if (tmp.length !== 0) {
              result.push(tmp.join(','))
            }
          }
        }
      } else {
        if (operator === ';') {
          if (isDefined(value)) {
            result.push(encodeUnreserved(key))
          }
        } else if (value === '' && (operator === '&' || operator === '?')) {
          result.push(encodeUnreserved(key) + '=')
        } else if (value === '') {
          result.push('')
        }
      }

      return result
    }

    function parseUrl(template) {
      return {
        expand: expand.bind(null, template)
      }
    }

    function expand(template, context) {
      var operators = ['+', '#', '.', '/', ';', '?', '&']
      return template.replace(
        /\{([^\{\}]+)\}|([^\{\}]+)/g,
        function (_, expression, literal) {
          if (expression) {
            let operator = ''
            const values = []

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0)
              expression = expression.substr(1)
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
              values.push(
                getValues(context, operator, tmp[1], tmp[2] || tmp[3])
              )
            })

            if (operator && operator !== '+') {
              var separator = ','

              if (operator === '?') {
                separator = '&'
              } else if (operator !== '#') {
                separator = operator
              }

              return (
                (values.length !== 0 ? operator : '') + values.join(separator)
              )
            } else {
              return values.join(',')
            }
          } else {
            return encodeReserved(literal)
          }
        }
      )
    }

    function parse(options) {
      // https://fetch.spec.whatwg.org/#methods
      let method = options.method.toUpperCase() // replace :varname with {varname} to make it RFC 6570 compatible

      let url = (options.url || '/').replace(/:([a-z]\w+)/g, '{$1}')
      let headers = Object.assign({}, options.headers)
      let body
      let parameters = omit(options, [
        'method',
        'baseUrl',
        'url',
        'headers',
        'request',
        'mediaType'
      ]) // extract variable names from URL to calculate remaining variables later

      const urlVariableNames = extractUrlVariableNames(url)
      url = parseUrl(url).expand(parameters)

      if (!/^http/.test(url)) {
        url = options.baseUrl + url
      }

      const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat('baseUrl')
      const remainingParameters = omit(parameters, omittedParameters)
      const isBinaryRequest = /application\/octet-stream/i.test(headers.accept)

      if (!isBinaryRequest) {
        if (options.mediaType.format) {
          // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
          headers.accept = headers.accept
            .split(/,/)
            .map((preview) =>
              preview.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${options.mediaType.format}`
              )
            )
            .join(',')
        }

        if (options.mediaType.previews.length) {
          const previewsFromAcceptHeader =
            headers.accept.match(/[\w-]+(?=-preview)/g) || []
          headers.accept = previewsFromAcceptHeader
            .concat(options.mediaType.previews)
            .map((preview) => {
              const format = options.mediaType.format
                ? `.${options.mediaType.format}`
                : '+json'
              return `application/vnd.github.${preview}-preview${format}`
            })
            .join(',')
        }
      } // for GET/HEAD requests, set URL query parameters from remaining parameters
      // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters

      if (['GET', 'HEAD'].includes(method)) {
        url = addQueryParameters(url, remainingParameters)
      } else {
        if ('data' in remainingParameters) {
          body = remainingParameters.data
        } else {
          if (Object.keys(remainingParameters).length) {
            body = remainingParameters
          } else {
            headers['content-length'] = 0
          }
        }
      } // default content-type for JSON if body is set

      if (!headers['content-type'] && typeof body !== 'undefined') {
        headers['content-type'] = 'application/json; charset=utf-8'
      } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
      // fetch does not allow to set `content-length` header, but we can set body to an empty string

      if (['PATCH', 'PUT'].includes(method) && typeof body === 'undefined') {
        body = ''
      } // Only return body/request keys if present

      return Object.assign(
        {
          method,
          url,
          headers
        },
        typeof body !== 'undefined'
          ? {
              body
            }
          : null,
        options.request
          ? {
              request: options.request
            }
          : null
      )
    }

    function endpointWithDefaults(defaults, route, options) {
      return parse(merge(defaults, route, options))
    }

    function withDefaults(oldDefaults, newDefaults) {
      const DEFAULTS = merge(oldDefaults, newDefaults)
      const endpoint = endpointWithDefaults.bind(null, DEFAULTS)
      return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
      })
    }

    const VERSION = '6.0.12'

    const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}` // DEFAULTS has all properties set that EndpointOptions has, except url.
    // So we use RequestParameters and add method as additional required property.

    const DEFAULTS = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': userAgent
      },
      mediaType: {
        format: '',
        previews: []
      }
    }

    const endpoint = withDefaults(null, DEFAULTS)

    exports.endpoint = endpoint
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 8467: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var request = __nccwpck_require__(6234)
    var universalUserAgent = __nccwpck_require__(5030)

    const VERSION = '4.8.0'

    function _buildMessageForResponseErrors(data) {
      return (
        `Request failed due to following response errors:\n` +
        data.errors.map((e) => ` - ${e.message}`).join('\n')
      )
    }

    class GraphqlResponseError extends Error {
      constructor(request, headers, response) {
        super(_buildMessageForResponseErrors(response))
        this.request = request
        this.headers = headers
        this.response = response
        this.name = 'GraphqlResponseError' // Expose the errors and response data in their shorthand properties.

        this.errors = response.errors
        this.data = response.data // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
      }
    }

    const NON_VARIABLE_OPTIONS = [
      'method',
      'baseUrl',
      'url',
      'headers',
      'request',
      'query',
      'mediaType'
    ]
    const FORBIDDEN_VARIABLE_OPTIONS = ['query', 'method', 'url']
    const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/
    function graphql(request, query, options) {
      if (options) {
        if (typeof query === 'string' && 'query' in options) {
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "query" cannot be used as variable name`
            )
          )
        }

        for (const key in options) {
          if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "${key}" cannot be used as variable name`
            )
          )
        }
      }

      const parsedOptions =
        typeof query === 'string'
          ? Object.assign(
              {
                query
              },
              options
            )
          : query
      const requestOptions = Object.keys(parsedOptions).reduce(
        (result, key) => {
          if (NON_VARIABLE_OPTIONS.includes(key)) {
            result[key] = parsedOptions[key]
            return result
          }

          if (!result.variables) {
            result.variables = {}
          }

          result.variables[key] = parsedOptions[key]
          return result
        },
        {}
      ) // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
      // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

      const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl

      if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
        requestOptions.url = baseUrl.replace(
          GHES_V3_SUFFIX_REGEX,
          '/api/graphql'
        )
      }

      return request(requestOptions).then((response) => {
        if (response.data.errors) {
          const headers = {}

          for (const key of Object.keys(response.headers)) {
            headers[key] = response.headers[key]
          }

          throw new GraphqlResponseError(requestOptions, headers, response.data)
        }

        return response.data.data
      })
    }

    function withDefaults(request$1, newDefaults) {
      const newRequest = request$1.defaults(newDefaults)

      const newApi = (query, options) => {
        return graphql(newRequest, query, options)
      }

      return Object.assign(newApi, {
        defaults: withDefaults.bind(null, newRequest),
        endpoint: request.request.endpoint
      })
    }

    const graphql$1 = withDefaults(request.request, {
      headers: {
        'user-agent': `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      },
      method: 'POST',
      url: '/graphql'
    })
    function withCustomRequest(customRequest) {
      return withDefaults(customRequest, {
        method: 'POST',
        url: '/graphql'
      })
    }

    exports.GraphqlResponseError = GraphqlResponseError
    exports.graphql = graphql$1
    exports.withCustomRequest = withCustomRequest
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 2272: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function oauthAuthorizationUrl(options) {
      const clientType = options.clientType || 'oauth-app'
      const baseUrl = options.baseUrl || 'https://github.com'
      const result = {
        clientType,
        allowSignup: options.allowSignup === false ? false : true,
        clientId: options.clientId,
        login: options.login || null,
        redirectUrl: options.redirectUrl || null,
        state: options.state || Math.random().toString(36).substr(2),
        url: ''
      }

      if (clientType === 'oauth-app') {
        const scopes = 'scopes' in options ? options.scopes : []
        result.scopes =
          typeof scopes === 'string'
            ? scopes.split(/[,\s]+/).filter(Boolean)
            : scopes
      }

      result.url = urlBuilderAuthorize(
        `${baseUrl}/login/oauth/authorize`,
        result
      )
      return result
    }

    function urlBuilderAuthorize(base, options) {
      const map = {
        allowSignup: 'allow_signup',
        clientId: 'client_id',
        login: 'login',
        redirectUrl: 'redirect_uri',
        scopes: 'scope',
        state: 'state'
      }
      let url = base
      Object.keys(map) // Filter out keys that are null and remove the url key
        .filter((k) => options[k] !== null) // Filter out empty scopes array
        .filter((k) => {
          if (k !== 'scopes') return true
          if (options.clientType === 'github-app') return false
          return !Array.isArray(options[k]) || options[k].length > 0
        }) // Map Array with the proper URL parameter names and change the value to a string using template strings
        // @ts-ignore
        .map((key) => [map[key], `${options[key]}`]) // Finally, build the URL
        .forEach(([key, value], index) => {
          url += index === 0 ? `?` : '&'
          url += `${key}=${encodeURIComponent(value)}`
        })
      return url
    }

    exports.oauthAuthorizationUrl = oauthAuthorizationUrl
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 8445: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var oauthAuthorizationUrl = __nccwpck_require__(2272)
    var request = __nccwpck_require__(3315)
    var requestError = __nccwpck_require__(2434)
    var btoa = _interopDefault(__nccwpck_require__(2358))

    const VERSION = '2.0.3'

    function requestToOAuthBaseUrl(request) {
      const endpointDefaults = request.endpoint.DEFAULTS
      return /^https:\/\/(api\.)?github\.com$/.test(endpointDefaults.baseUrl)
        ? 'https://github.com'
        : endpointDefaults.baseUrl.replace('/api/v3', '')
    }
    async function oauthRequest(request, route, parameters) {
      const withOAuthParameters = {
        baseUrl: requestToOAuthBaseUrl(request),
        headers: {
          accept: 'application/json'
        },
        ...parameters
      }
      const response = await request(route, withOAuthParameters)

      if ('error' in response.data) {
        const error = new requestError.RequestError(
          `${response.data.error_description} (${response.data.error}, ${response.data.error_uri})`,
          400,
          {
            request: request.endpoint.merge(route, withOAuthParameters),
            headers: response.headers
          }
        ) // @ts-ignore add custom response property until https://github.com/octokit/request-error.js/issues/169 is resolved

        error.response = response
        throw error
      }

      return response
    }

    function getWebFlowAuthorizationUrl({
      request: request$1 = request.request,
      ...options
    }) {
      const baseUrl = requestToOAuthBaseUrl(request$1) // @ts-expect-error TypeScript wants `clientType` to be set explicitly ¯\_(ツ)_/¯

      return oauthAuthorizationUrl.oauthAuthorizationUrl({
        ...options,
        baseUrl
      })
    }

    async function exchangeWebFlowCode(options) {
      const request$1 =
        options.request ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request
      const response = await oauthRequest(
        request$1,
        'POST /login/oauth/access_token',
        {
          client_id: options.clientId,
          client_secret: options.clientSecret,
          code: options.code,
          redirect_uri: options.redirectUrl
        }
      )
      const authentication = {
        clientType: options.clientType,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        token: response.data.access_token,
        scopes: response.data.scope.split(/\s+/).filter(Boolean)
      }

      if (options.clientType === 'github-app') {
        if ('refresh_token' in response.data) {
          const apiTimeInMs = new Date(response.headers.date).getTime()
          ;(authentication.refreshToken = response.data.refresh_token),
            (authentication.expiresAt = toTimestamp(
              apiTimeInMs,
              response.data.expires_in
            )),
            (authentication.refreshTokenExpiresAt = toTimestamp(
              apiTimeInMs,
              response.data.refresh_token_expires_in
            ))
        }

        delete authentication.scopes
      }

      return { ...response, authentication }
    }

    function toTimestamp(apiTimeInMs, expirationInSeconds) {
      return new Date(apiTimeInMs + expirationInSeconds * 1000).toISOString()
    }

    async function createDeviceCode(options) {
      const request$1 =
        options.request ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request
      const parameters = {
        client_id: options.clientId
      }

      if ('scopes' in options && Array.isArray(options.scopes)) {
        parameters.scope = options.scopes.join(' ')
      }

      return oauthRequest(request$1, 'POST /login/device/code', parameters)
    }

    async function exchangeDeviceCode(options) {
      const request$1 =
        options.request ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request
      const response = await oauthRequest(
        request$1,
        'POST /login/oauth/access_token',
        {
          client_id: options.clientId,
          device_code: options.code,
          grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
        }
      )
      const authentication = {
        clientType: options.clientType,
        clientId: options.clientId,
        token: response.data.access_token,
        scopes: response.data.scope.split(/\s+/).filter(Boolean)
      }

      if ('clientSecret' in options) {
        authentication.clientSecret = options.clientSecret
      }

      if (options.clientType === 'github-app') {
        if ('refresh_token' in response.data) {
          const apiTimeInMs = new Date(response.headers.date).getTime()
          ;(authentication.refreshToken = response.data.refresh_token),
            (authentication.expiresAt = toTimestamp$1(
              apiTimeInMs,
              response.data.expires_in
            )),
            (authentication.refreshTokenExpiresAt = toTimestamp$1(
              apiTimeInMs,
              response.data.refresh_token_expires_in
            ))
        }

        delete authentication.scopes
      }

      return { ...response, authentication }
    }

    function toTimestamp$1(apiTimeInMs, expirationInSeconds) {
      return new Date(apiTimeInMs + expirationInSeconds * 1000).toISOString()
    }

    async function checkToken(options) {
      const request$1 =
        options.request ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request // @ts-expect-error - TODO: I don't get why TS is complaining here. It works with `defaultRequest` directly

      const response = await request$1('POST /applications/{client_id}/token', {
        headers: {
          authorization: `basic ${btoa(
            `${options.clientId}:${options.clientSecret}`
          )}`
        },
        client_id: options.clientId,
        access_token: options.token
      })
      const authentication = {
        clientType: options.clientType,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        token: options.token,
        scopes: response.data.scopes
      }
      if (response.data.expires_at)
        authentication.expiresAt = response.data.expires_at

      if (options.clientType === 'github-app') {
        delete authentication.scopes
      }

      return { ...response, authentication }
    }

    async function refreshToken(options) {
      const request$1 =
        options.request ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request
      const response = await oauthRequest(
        request$1,
        'POST /login/oauth/access_token',
        {
          client_id: options.clientId,
          client_secret: options.clientSecret,
          grant_type: 'refresh_token',
          refresh_token: options.refreshToken
        }
      )
      const apiTimeInMs = new Date(response.headers.date).getTime()
      const authentication = {
        clientType: 'github-app',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        token: response.data.access_token,
        refreshToken: response.data.refresh_token,
        expiresAt: toTimestamp$2(apiTimeInMs, response.data.expires_in),
        refreshTokenExpiresAt: toTimestamp$2(
          apiTimeInMs,
          response.data.refresh_token_expires_in
        )
      }
      return { ...response, authentication }
    }

    function toTimestamp$2(apiTimeInMs, expirationInSeconds) {
      return new Date(apiTimeInMs + expirationInSeconds * 1000).toISOString()
    }

    async function scopeToken(options) {
      const {
        request: optionsRequest,
        clientType,
        clientId,
        clientSecret,
        token,
        ...requestOptions
      } = options
      const request$1 =
        optionsRequest ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request
      const response = await request$1(
        'POST /applications/{client_id}/token/scoped', // @ts-expect-error - TODO: I don't get why TS is complaining here. It works with `defaultRequest` directly
        {
          headers: {
            authorization: `basic ${btoa(`${clientId}:${clientSecret}`)}`
          },
          client_id: clientId,
          access_token: token,
          ...requestOptions
        }
      )
      const authentication = Object.assign(
        {
          clientType,
          clientId,
          clientSecret,
          token: response.data.token
        },
        response.data.expires_at
          ? {
              expiresAt: response.data.expires_at
            }
          : {}
      ) // @ts-expect-error - response.status type is incompatible (200 vs number)

      return { ...response, authentication }
    }

    async function resetToken(options) {
      const request$1 =
        options.request ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request
      const auth = btoa(`${options.clientId}:${options.clientSecret}`)
      const response = await request$1(
        'PATCH /applications/{client_id}/token', // @ts-expect-error - TODO: I don't get why TS is complaining here. It works with `defaultRequest` directly
        {
          headers: {
            authorization: `basic ${auth}`
          },
          client_id: options.clientId,
          access_token: options.token
        }
      )
      const authentication = {
        clientType: options.clientType,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        token: response.data.token,
        scopes: response.data.scopes
      }
      if (response.data.expires_at)
        authentication.expiresAt = response.data.expires_at

      if (options.clientType === 'github-app') {
        delete authentication.scopes
      }

      return { ...response, authentication }
    }

    async function deleteToken(options) {
      const request$1 =
        options.request ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request
      const auth = btoa(`${options.clientId}:${options.clientSecret}`)
      return request$1(
        'DELETE /applications/{client_id}/token', // @ts-expect-error - TODO: I don't get why TS is complaining here. It works with `defaultRequest` directly
        {
          headers: {
            authorization: `basic ${auth}`
          },
          client_id: options.clientId,
          access_token: options.token
        }
      )
    }

    async function deleteAuthorization(options) {
      const request$1 =
        options.request ||
        /* istanbul ignore next: we always pass a custom request in tests */
        request.request
      const auth = btoa(`${options.clientId}:${options.clientSecret}`)
      return request$1(
        'DELETE /applications/{client_id}/grant', // @ts-expect-error - TODO: I don't get why TS is complaining here. It works with `defaultRequest` directly
        {
          headers: {
            authorization: `basic ${auth}`
          },
          client_id: options.clientId,
          access_token: options.token
        }
      )
    }

    exports.VERSION = VERSION
    exports.checkToken = checkToken
    exports.createDeviceCode = createDeviceCode
    exports.deleteAuthorization = deleteAuthorization
    exports.deleteToken = deleteToken
    exports.exchangeDeviceCode = exchangeDeviceCode
    exports.exchangeWebFlowCode = exchangeWebFlowCode
    exports.getWebFlowAuthorizationUrl = getWebFlowAuthorizationUrl
    exports.refreshToken = refreshToken
    exports.resetToken = resetToken
    exports.scopeToken = scopeToken
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 1301: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var isPlainObject = __nccwpck_require__(3287)
    var universalUserAgent = __nccwpck_require__(5030)

    function lowercaseKeys(object) {
      if (!object) {
        return {}
      }

      return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key]
        return newObj
      }, {})
    }

    function mergeDeep(defaults, options) {
      const result = Object.assign({}, defaults)
      Object.keys(options).forEach((key) => {
        if (isPlainObject.isPlainObject(options[key])) {
          if (!(key in defaults))
            Object.assign(result, {
              [key]: options[key]
            })
          else result[key] = mergeDeep(defaults[key], options[key])
        } else {
          Object.assign(result, {
            [key]: options[key]
          })
        }
      })
      return result
    }

    function removeUndefinedProperties(obj) {
      for (const key in obj) {
        if (obj[key] === undefined) {
          delete obj[key]
        }
      }

      return obj
    }

    function merge(defaults, route, options) {
      if (typeof route === 'string') {
        let [method, url] = route.split(' ')
        options = Object.assign(
          url
            ? {
                method,
                url
              }
            : {
                url: method
              },
          options
        )
      } else {
        options = Object.assign({}, route)
      } // lowercase header names before merging with defaults to avoid duplicates

      options.headers = lowercaseKeys(options.headers) // remove properties with undefined values before merging

      removeUndefinedProperties(options)
      removeUndefinedProperties(options.headers)
      const mergedOptions = mergeDeep(defaults || {}, options) // mediaType.previews arrays are merged, instead of overwritten

      if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
          .filter(
            (preview) => !mergedOptions.mediaType.previews.includes(preview)
          )
          .concat(mergedOptions.mediaType.previews)
      }

      mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(
        (preview) => preview.replace(/-preview/, '')
      )
      return mergedOptions
    }

    function addQueryParameters(url, parameters) {
      const separator = /\?/.test(url) ? '&' : '?'
      const names = Object.keys(parameters)

      if (names.length === 0) {
        return url
      }

      return (
        url +
        separator +
        names
          .map((name) => {
            if (name === 'q') {
              return (
                'q=' + parameters.q.split('+').map(encodeURIComponent).join('+')
              )
            }

            return `${name}=${encodeURIComponent(parameters[name])}`
          })
          .join('&')
      )
    }

    const urlVariableRegex = /\{[^}]+\}/g

    function removeNonChars(variableName) {
      return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
    }

    function extractUrlVariableNames(url) {
      const matches = url.match(urlVariableRegex)

      if (!matches) {
        return []
      }

      return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
    }

    function omit(object, keysToOmit) {
      return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
          obj[key] = object[key]
          return obj
        }, {})
    }

    // Based on https://github.com/bramstein/url-template, licensed under BSD
    // TODO: create separate package.
    //
    // Copyright (c) 2012-2014, Bram Stein
    // All rights reserved.
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //  1. Redistributions of source code must retain the above copyright
    //     notice, this list of conditions and the following disclaimer.
    //  2. Redistributions in binary form must reproduce the above copyright
    //     notice, this list of conditions and the following disclaimer in the
    //     documentation and/or other materials provided with the distribution.
    //  3. The name of the author may not be used to endorse or promote products
    //     derived from this software without specific prior written permission.
    // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
    // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
    // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
    // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    /* istanbul ignore file */
    function encodeReserved(str) {
      return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
          if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']')
          }

          return part
        })
        .join('')
    }

    function encodeUnreserved(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    function encodeValue(operator, value, key) {
      value =
        operator === '+' || operator === '#'
          ? encodeReserved(value)
          : encodeUnreserved(value)

      if (key) {
        return encodeUnreserved(key) + '=' + value
      } else {
        return value
      }
    }

    function isDefined(value) {
      return value !== undefined && value !== null
    }

    function isKeyOperator(operator) {
      return operator === ';' || operator === '&' || operator === '?'
    }

    function getValues(context, operator, key, modifier) {
      var value = context[key],
        result = []

      if (isDefined(value) && value !== '') {
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          value = value.toString()

          if (modifier && modifier !== '*') {
            value = value.substring(0, parseInt(modifier, 10))
          }

          result.push(
            encodeValue(operator, value, isKeyOperator(operator) ? key : '')
          )
        } else {
          if (modifier === '*') {
            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                result.push(
                  encodeValue(
                    operator,
                    value,
                    isKeyOperator(operator) ? key : ''
                  )
                )
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  result.push(encodeValue(operator, value[k], k))
                }
              })
            }
          } else {
            const tmp = []

            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                tmp.push(encodeValue(operator, value))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  tmp.push(encodeUnreserved(k))
                  tmp.push(encodeValue(operator, value[k].toString()))
                }
              })
            }

            if (isKeyOperator(operator)) {
              result.push(encodeUnreserved(key) + '=' + tmp.join(','))
            } else if (tmp.length !== 0) {
              result.push(tmp.join(','))
            }
          }
        }
      } else {
        if (operator === ';') {
          if (isDefined(value)) {
            result.push(encodeUnreserved(key))
          }
        } else if (value === '' && (operator === '&' || operator === '?')) {
          result.push(encodeUnreserved(key) + '=')
        } else if (value === '') {
          result.push('')
        }
      }

      return result
    }

    function parseUrl(template) {
      return {
        expand: expand.bind(null, template)
      }
    }

    function expand(template, context) {
      var operators = ['+', '#', '.', '/', ';', '?', '&']
      return template.replace(
        /\{([^\{\}]+)\}|([^\{\}]+)/g,
        function (_, expression, literal) {
          if (expression) {
            let operator = ''
            const values = []

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0)
              expression = expression.substr(1)
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
              values.push(
                getValues(context, operator, tmp[1], tmp[2] || tmp[3])
              )
            })

            if (operator && operator !== '+') {
              var separator = ','

              if (operator === '?') {
                separator = '&'
              } else if (operator !== '#') {
                separator = operator
              }

              return (
                (values.length !== 0 ? operator : '') + values.join(separator)
              )
            } else {
              return values.join(',')
            }
          } else {
            return encodeReserved(literal)
          }
        }
      )
    }

    function parse(options) {
      // https://fetch.spec.whatwg.org/#methods
      let method = options.method.toUpperCase() // replace :varname with {varname} to make it RFC 6570 compatible

      let url = (options.url || '/').replace(/:([a-z]\w+)/g, '{$1}')
      let headers = Object.assign({}, options.headers)
      let body
      let parameters = omit(options, [
        'method',
        'baseUrl',
        'url',
        'headers',
        'request',
        'mediaType'
      ]) // extract variable names from URL to calculate remaining variables later

      const urlVariableNames = extractUrlVariableNames(url)
      url = parseUrl(url).expand(parameters)

      if (!/^http/.test(url)) {
        url = options.baseUrl + url
      }

      const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat('baseUrl')
      const remainingParameters = omit(parameters, omittedParameters)
      const isBinaryRequest = /application\/octet-stream/i.test(headers.accept)

      if (!isBinaryRequest) {
        if (options.mediaType.format) {
          // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
          headers.accept = headers.accept
            .split(/,/)
            .map((preview) =>
              preview.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${options.mediaType.format}`
              )
            )
            .join(',')
        }

        if (options.mediaType.previews.length) {
          const previewsFromAcceptHeader =
            headers.accept.match(/[\w-]+(?=-preview)/g) || []
          headers.accept = previewsFromAcceptHeader
            .concat(options.mediaType.previews)
            .map((preview) => {
              const format = options.mediaType.format
                ? `.${options.mediaType.format}`
                : '+json'
              return `application/vnd.github.${preview}-preview${format}`
            })
            .join(',')
        }
      } // for GET/HEAD requests, set URL query parameters from remaining parameters
      // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters

      if (['GET', 'HEAD'].includes(method)) {
        url = addQueryParameters(url, remainingParameters)
      } else {
        if ('data' in remainingParameters) {
          body = remainingParameters.data
        } else {
          if (Object.keys(remainingParameters).length) {
            body = remainingParameters
          } else {
            headers['content-length'] = 0
          }
        }
      } // default content-type for JSON if body is set

      if (!headers['content-type'] && typeof body !== 'undefined') {
        headers['content-type'] = 'application/json; charset=utf-8'
      } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
      // fetch does not allow to set `content-length` header, but we can set body to an empty string

      if (['PATCH', 'PUT'].includes(method) && typeof body === 'undefined') {
        body = ''
      } // Only return body/request keys if present

      return Object.assign(
        {
          method,
          url,
          headers
        },
        typeof body !== 'undefined'
          ? {
              body
            }
          : null,
        options.request
          ? {
              request: options.request
            }
          : null
      )
    }

    function endpointWithDefaults(defaults, route, options) {
      return parse(merge(defaults, route, options))
    }

    function withDefaults(oldDefaults, newDefaults) {
      const DEFAULTS = merge(oldDefaults, newDefaults)
      const endpoint = endpointWithDefaults.bind(null, DEFAULTS)
      return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
      })
    }

    const VERSION = '7.0.1'

    const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}` // DEFAULTS has all properties set that EndpointOptions has, except url.
    // So we use RequestParameters and add method as additional required property.

    const DEFAULTS = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': userAgent
      },
      mediaType: {
        format: '',
        previews: []
      }
    }

    const endpoint = withDefaults(null, DEFAULTS)

    exports.endpoint = endpoint
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 2434: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var deprecation = __nccwpck_require__(8932)
    var once = _interopDefault(__nccwpck_require__(1223))

    const logOnceCode = once((deprecation) => console.warn(deprecation))
    const logOnceHeaders = once((deprecation) => console.warn(deprecation))
    /**
     * Error with extra properties to help with debugging
     */

    class RequestError extends Error {
      constructor(message, statusCode, options) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'HttpError'
        this.status = statusCode
        let headers

        if ('headers' in options && typeof options.headers !== 'undefined') {
          headers = options.headers
        }

        if ('response' in options) {
          this.response = options.response
          headers = options.response.headers
        } // redact request credentials without mutating original request options

        const requestCopy = Object.assign({}, options.request)

        if (options.request.headers.authorization) {
          requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(
              / .*$/,
              ' [REDACTED]'
            )
          })
        }

        requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
          // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]') // OAuth tokens can be passed as URL query parameters, although it is not recommended
          // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = requestCopy // deprecations

        Object.defineProperty(this, 'code', {
          get() {
            logOnceCode(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return statusCode
          }
        })
        Object.defineProperty(this, 'headers', {
          get() {
            logOnceHeaders(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.'
              )
            )
            return headers || {}
          }
        })
      }
    }

    exports.RequestError = RequestError
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 3315: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var endpoint = __nccwpck_require__(1301)
    var universalUserAgent = __nccwpck_require__(5030)
    var isPlainObject = __nccwpck_require__(3287)
    var nodeFetch = _interopDefault(__nccwpck_require__(467))
    var requestError = __nccwpck_require__(2434)

    const VERSION = '6.2.1'

    function getBufferResponse(response) {
      return response.arrayBuffer()
    }

    function fetchWrapper(requestOptions) {
      const log =
        requestOptions.request && requestOptions.request.log
          ? requestOptions.request.log
          : console

      if (
        isPlainObject.isPlainObject(requestOptions.body) ||
        Array.isArray(requestOptions.body)
      ) {
        requestOptions.body = JSON.stringify(requestOptions.body)
      }

      let headers = {}
      let status
      let url
      const fetch =
        (requestOptions.request && requestOptions.request.fetch) ||
        globalThis.fetch ||
        /* istanbul ignore next */
        nodeFetch
      return fetch(
        requestOptions.url,
        Object.assign(
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: requestOptions.headers,
            redirect: requestOptions.redirect
          }, // `requestOptions.request.agent` type is incompatible
          // see https://github.com/octokit/types.ts/pull/264
          requestOptions.request
        )
      )
        .then(async (response) => {
          url = response.url
          status = response.status

          for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1]
          }

          if ('deprecation' in headers) {
            const matches =
              headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/)
            const deprecationLink = matches && matches.pop()
            log.warn(
              `[@octokit/request] "${requestOptions.method} ${
                requestOptions.url
              }" is deprecated. It is scheduled to be removed on ${
                headers.sunset
              }${deprecationLink ? `. See ${deprecationLink}` : ''}`
            )
          }

          if (status === 204 || status === 205) {
            return
          } // GitHub API returns 200 for HEAD requests

          if (requestOptions.method === 'HEAD') {
            if (status < 400) {
              return
            }

            throw new requestError.RequestError(response.statusText, status, {
              response: {
                url,
                status,
                headers,
                data: undefined
              },
              request: requestOptions
            })
          }

          if (status === 304) {
            throw new requestError.RequestError('Not modified', status, {
              response: {
                url,
                status,
                headers,
                data: await getResponseData(response)
              },
              request: requestOptions
            })
          }

          if (status >= 400) {
            const data = await getResponseData(response)
            const error = new requestError.RequestError(
              toErrorMessage(data),
              status,
              {
                response: {
                  url,
                  status,
                  headers,
                  data
                },
                request: requestOptions
              }
            )
            throw error
          }

          return getResponseData(response)
        })
        .then((data) => {
          return {
            status,
            url,
            headers,
            data
          }
        })
        .catch((error) => {
          if (error instanceof requestError.RequestError) throw error
          else if (error.name === 'AbortError') throw error
          throw new requestError.RequestError(error.message, 500, {
            request: requestOptions
          })
        })
    }

    async function getResponseData(response) {
      const contentType = response.headers.get('content-type')

      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBufferResponse(response)
    }

    function toErrorMessage(data) {
      if (typeof data === 'string') return data // istanbul ignore else - just in case

      if ('message' in data) {
        if (Array.isArray(data.errors)) {
          return `${data.message}: ${data.errors
            .map(JSON.stringify)
            .join(', ')}`
        }

        return data.message
      } // istanbul ignore next - just in case

      return `Unknown error: ${JSON.stringify(data)}`
    }

    function withDefaults(oldEndpoint, newDefaults) {
      const endpoint = oldEndpoint.defaults(newDefaults)

      const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters)

        if (!endpointOptions.request || !endpointOptions.request.hook) {
          return fetchWrapper(endpoint.parse(endpointOptions))
        }

        const request = (route, parameters) => {
          return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)))
        }

        Object.assign(request, {
          endpoint,
          defaults: withDefaults.bind(null, endpoint)
        })
        return endpointOptions.request.hook(request, endpointOptions)
      }

      return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
      })
    }

    const request = withDefaults(endpoint.endpoint, {
      headers: {
        'user-agent': `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      }
    })

    exports.request = request
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 4193: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    const VERSION = '2.17.0'

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })
        }

        keys.push.apply(keys, symbols)
      }

      return keys
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            )
          })
        }
      }

      return target
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        })
      } else {
        obj[key] = value
      }

      return obj
    }

    /**
     * Some “list” response that can be paginated have a different response structure
     *
     * They have a `total_count` key in the response (search also has `incomplete_results`,
     * /installation/repositories also has `repository_selection`), as well as a key with
     * the list of the items which name varies from endpoint to endpoint.
     *
     * Octokit normalizes these responses so that paginated results are always returned following
     * the same structure. One challenge is that if the list response has only one page, no Link
     * header is provided, so this header alone is not sufficient to check wether a response is
     * paginated or not.
     *
     * We check if a "total_count" key is present in the response data, but also make sure that
     * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
     * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
     */
    function normalizePaginatedListResponse(response) {
      // endpoints can respond with 204 if repository is empty
      if (!response.data) {
        return _objectSpread2(
          _objectSpread2({}, response),
          {},
          {
            data: []
          }
        )
      }

      const responseNeedsNormalization =
        'total_count' in response.data && !('url' in response.data)
      if (!responseNeedsNormalization) return response // keep the additional properties intact as there is currently no other way
      // to retrieve the same information.

      const incompleteResults = response.data.incomplete_results
      const repositorySelection = response.data.repository_selection
      const totalCount = response.data.total_count
      delete response.data.incomplete_results
      delete response.data.repository_selection
      delete response.data.total_count
      const namespaceKey = Object.keys(response.data)[0]
      const data = response.data[namespaceKey]
      response.data = data

      if (typeof incompleteResults !== 'undefined') {
        response.data.incomplete_results = incompleteResults
      }

      if (typeof repositorySelection !== 'undefined') {
        response.data.repository_selection = repositorySelection
      }

      response.data.total_count = totalCount
      return response
    }

    function iterator(octokit, route, parameters) {
      const options =
        typeof route === 'function'
          ? route.endpoint(parameters)
          : octokit.request.endpoint(route, parameters)
      const requestMethod =
        typeof route === 'function' ? route : octokit.request
      const method = options.method
      const headers = options.headers
      let url = options.url
      return {
        [Symbol.asyncIterator]: () => ({
          async next() {
            if (!url)
              return {
                done: true
              }

            try {
              const response = await requestMethod({
                method,
                url,
                headers
              })
              const normalizedResponse =
                normalizePaginatedListResponse(response) // `response.headers.link` format:
              // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
              // sets `url` to undefined if "next" URL is not present or `link` header is not set

              url = ((normalizedResponse.headers.link || '').match(
                /<([^>]+)>;\s*rel="next"/
              ) || [])[1]
              return {
                value: normalizedResponse
              }
            } catch (error) {
              if (error.status !== 409) throw error
              url = ''
              return {
                value: {
                  status: 200,
                  headers: {},
                  data: []
                }
              }
            }
          }
        })
      }
    }

    function paginate(octokit, route, parameters, mapFn) {
      if (typeof parameters === 'function') {
        mapFn = parameters
        parameters = undefined
      }

      return gather(
        octokit,
        [],
        iterator(octokit, route, parameters)[Symbol.asyncIterator](),
        mapFn
      )
    }

    function gather(octokit, results, iterator, mapFn) {
      return iterator.next().then((result) => {
        if (result.done) {
          return results
        }

        let earlyExit = false

        function done() {
          earlyExit = true
        }

        results = results.concat(
          mapFn ? mapFn(result.value, done) : result.value.data
        )

        if (earlyExit) {
          return results
        }

        return gather(octokit, results, iterator, mapFn)
      })
    }

    const composePaginateRest = Object.assign(paginate, {
      iterator
    })

    const paginatingEndpoints = [
      'GET /app/hook/deliveries',
      'GET /app/installations',
      'GET /applications/grants',
      'GET /authorizations',
      'GET /enterprises/{enterprise}/actions/permissions/organizations',
      'GET /enterprises/{enterprise}/actions/runner-groups',
      'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations',
      'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners',
      'GET /enterprises/{enterprise}/actions/runners',
      'GET /enterprises/{enterprise}/actions/runners/downloads',
      'GET /events',
      'GET /gists',
      'GET /gists/public',
      'GET /gists/starred',
      'GET /gists/{gist_id}/comments',
      'GET /gists/{gist_id}/commits',
      'GET /gists/{gist_id}/forks',
      'GET /installation/repositories',
      'GET /issues',
      'GET /marketplace_listing/plans',
      'GET /marketplace_listing/plans/{plan_id}/accounts',
      'GET /marketplace_listing/stubbed/plans',
      'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts',
      'GET /networks/{owner}/{repo}/events',
      'GET /notifications',
      'GET /organizations',
      'GET /orgs/{org}/actions/permissions/repositories',
      'GET /orgs/{org}/actions/runner-groups',
      'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories',
      'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners',
      'GET /orgs/{org}/actions/runners',
      'GET /orgs/{org}/actions/runners/downloads',
      'GET /orgs/{org}/actions/secrets',
      'GET /orgs/{org}/actions/secrets/{secret_name}/repositories',
      'GET /orgs/{org}/blocks',
      'GET /orgs/{org}/credential-authorizations',
      'GET /orgs/{org}/events',
      'GET /orgs/{org}/failed_invitations',
      'GET /orgs/{org}/hooks',
      'GET /orgs/{org}/hooks/{hook_id}/deliveries',
      'GET /orgs/{org}/installations',
      'GET /orgs/{org}/invitations',
      'GET /orgs/{org}/invitations/{invitation_id}/teams',
      'GET /orgs/{org}/issues',
      'GET /orgs/{org}/members',
      'GET /orgs/{org}/migrations',
      'GET /orgs/{org}/migrations/{migration_id}/repositories',
      'GET /orgs/{org}/outside_collaborators',
      'GET /orgs/{org}/packages',
      'GET /orgs/{org}/projects',
      'GET /orgs/{org}/public_members',
      'GET /orgs/{org}/repos',
      'GET /orgs/{org}/secret-scanning/alerts',
      'GET /orgs/{org}/team-sync/groups',
      'GET /orgs/{org}/teams',
      'GET /orgs/{org}/teams/{team_slug}/discussions',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
      'GET /orgs/{org}/teams/{team_slug}/invitations',
      'GET /orgs/{org}/teams/{team_slug}/members',
      'GET /orgs/{org}/teams/{team_slug}/projects',
      'GET /orgs/{org}/teams/{team_slug}/repos',
      'GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings',
      'GET /orgs/{org}/teams/{team_slug}/teams',
      'GET /projects/columns/{column_id}/cards',
      'GET /projects/{project_id}/collaborators',
      'GET /projects/{project_id}/columns',
      'GET /repos/{owner}/{repo}/actions/artifacts',
      'GET /repos/{owner}/{repo}/actions/runners',
      'GET /repos/{owner}/{repo}/actions/runners/downloads',
      'GET /repos/{owner}/{repo}/actions/runs',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs',
      'GET /repos/{owner}/{repo}/actions/secrets',
      'GET /repos/{owner}/{repo}/actions/workflows',
      'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
      'GET /repos/{owner}/{repo}/assignees',
      'GET /repos/{owner}/{repo}/autolinks',
      'GET /repos/{owner}/{repo}/branches',
      'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations',
      'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs',
      'GET /repos/{owner}/{repo}/code-scanning/alerts',
      'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
      'GET /repos/{owner}/{repo}/code-scanning/analyses',
      'GET /repos/{owner}/{repo}/collaborators',
      'GET /repos/{owner}/{repo}/comments',
      'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/commits',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls',
      'GET /repos/{owner}/{repo}/commits/{ref}/check-runs',
      'GET /repos/{owner}/{repo}/commits/{ref}/check-suites',
      'GET /repos/{owner}/{repo}/commits/{ref}/statuses',
      'GET /repos/{owner}/{repo}/contributors',
      'GET /repos/{owner}/{repo}/deployments',
      'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
      'GET /repos/{owner}/{repo}/events',
      'GET /repos/{owner}/{repo}/forks',
      'GET /repos/{owner}/{repo}/git/matching-refs/{ref}',
      'GET /repos/{owner}/{repo}/hooks',
      'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries',
      'GET /repos/{owner}/{repo}/invitations',
      'GET /repos/{owner}/{repo}/issues',
      'GET /repos/{owner}/{repo}/issues/comments',
      'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/issues/events',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/comments',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/events',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/labels',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline',
      'GET /repos/{owner}/{repo}/keys',
      'GET /repos/{owner}/{repo}/labels',
      'GET /repos/{owner}/{repo}/milestones',
      'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels',
      'GET /repos/{owner}/{repo}/notifications',
      'GET /repos/{owner}/{repo}/pages/builds',
      'GET /repos/{owner}/{repo}/projects',
      'GET /repos/{owner}/{repo}/pulls',
      'GET /repos/{owner}/{repo}/pulls/comments',
      'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/commits',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/files',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments',
      'GET /repos/{owner}/{repo}/releases',
      'GET /repos/{owner}/{repo}/releases/{release_id}/assets',
      'GET /repos/{owner}/{repo}/secret-scanning/alerts',
      'GET /repos/{owner}/{repo}/stargazers',
      'GET /repos/{owner}/{repo}/subscribers',
      'GET /repos/{owner}/{repo}/tags',
      'GET /repos/{owner}/{repo}/teams',
      'GET /repositories',
      'GET /repositories/{repository_id}/environments/{environment_name}/secrets',
      'GET /scim/v2/enterprises/{enterprise}/Groups',
      'GET /scim/v2/enterprises/{enterprise}/Users',
      'GET /scim/v2/organizations/{org}/Users',
      'GET /search/code',
      'GET /search/commits',
      'GET /search/issues',
      'GET /search/labels',
      'GET /search/repositories',
      'GET /search/topics',
      'GET /search/users',
      'GET /teams/{team_id}/discussions',
      'GET /teams/{team_id}/discussions/{discussion_number}/comments',
      'GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions',
      'GET /teams/{team_id}/discussions/{discussion_number}/reactions',
      'GET /teams/{team_id}/invitations',
      'GET /teams/{team_id}/members',
      'GET /teams/{team_id}/projects',
      'GET /teams/{team_id}/repos',
      'GET /teams/{team_id}/team-sync/group-mappings',
      'GET /teams/{team_id}/teams',
      'GET /user/blocks',
      'GET /user/emails',
      'GET /user/followers',
      'GET /user/following',
      'GET /user/gpg_keys',
      'GET /user/installations',
      'GET /user/installations/{installation_id}/repositories',
      'GET /user/issues',
      'GET /user/keys',
      'GET /user/marketplace_purchases',
      'GET /user/marketplace_purchases/stubbed',
      'GET /user/memberships/orgs',
      'GET /user/migrations',
      'GET /user/migrations/{migration_id}/repositories',
      'GET /user/orgs',
      'GET /user/packages',
      'GET /user/public_emails',
      'GET /user/repos',
      'GET /user/repository_invitations',
      'GET /user/starred',
      'GET /user/subscriptions',
      'GET /user/teams',
      'GET /users',
      'GET /users/{username}/events',
      'GET /users/{username}/events/orgs/{org}',
      'GET /users/{username}/events/public',
      'GET /users/{username}/followers',
      'GET /users/{username}/following',
      'GET /users/{username}/gists',
      'GET /users/{username}/gpg_keys',
      'GET /users/{username}/keys',
      'GET /users/{username}/orgs',
      'GET /users/{username}/packages',
      'GET /users/{username}/projects',
      'GET /users/{username}/received_events',
      'GET /users/{username}/received_events/public',
      'GET /users/{username}/repos',
      'GET /users/{username}/starred',
      'GET /users/{username}/subscriptions'
    ]

    function isPaginatingEndpoint(arg) {
      if (typeof arg === 'string') {
        return paginatingEndpoints.includes(arg)
      } else {
        return false
      }
    }

    /**
     * @param octokit Octokit instance
     * @param options Options passed to Octokit constructor
     */

    function paginateRest(octokit) {
      return {
        paginate: Object.assign(paginate.bind(null, octokit), {
          iterator: iterator.bind(null, octokit)
        })
      }
    }
    paginateRest.VERSION = VERSION

    exports.composePaginateRest = composePaginateRest
    exports.isPaginatingEndpoint = isPaginatingEndpoint
    exports.paginateRest = paginateRest
    exports.paginatingEndpoints = paginatingEndpoints
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 8883: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    const VERSION = '1.0.4'

    /**
     * @param octokit Octokit instance
     * @param options Options passed to Octokit constructor
     */

    function requestLog(octokit) {
      octokit.hook.wrap('request', (request, options) => {
        octokit.log.debug('request', options)
        const start = Date.now()
        const requestOptions = octokit.request.endpoint.parse(options)
        const path = requestOptions.url.replace(options.baseUrl, '')
        return request(options)
          .then((response) => {
            octokit.log.info(
              `${requestOptions.method} ${path} - ${response.status} in ${
                Date.now() - start
              }ms`
            )
            return response
          })
          .catch((error) => {
            octokit.log.info(
              `${requestOptions.method} ${path} - ${error.status} in ${
                Date.now() - start
              }ms`
            )
            throw error
          })
      })
    }
    requestLog.VERSION = VERSION

    exports.requestLog = requestLog
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 3044: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object)

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object)

        if (enumerableOnly) {
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable
          })
        }

        keys.push.apply(keys, symbols)
      }

      return keys
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key])
          })
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            )
          })
        }
      }

      return target
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        })
      } else {
        obj[key] = value
      }

      return obj
    }

    const Endpoints = {
      actions: {
        addSelectedRepoToOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}'
        ],
        approveWorkflowRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve'
        ],
        cancelWorkflowRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel'
        ],
        createOrUpdateEnvironmentSecret: [
          'PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        createOrUpdateOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}'
        ],
        createOrUpdateRepoSecret: [
          'PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        createRegistrationTokenForOrg: [
          'POST /orgs/{org}/actions/runners/registration-token'
        ],
        createRegistrationTokenForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/registration-token'
        ],
        createRemoveTokenForOrg: [
          'POST /orgs/{org}/actions/runners/remove-token'
        ],
        createRemoveTokenForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/remove-token'
        ],
        createWorkflowDispatch: [
          'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches'
        ],
        deleteArtifact: [
          'DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'
        ],
        deleteEnvironmentSecret: [
          'DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        deleteOrgSecret: ['DELETE /orgs/{org}/actions/secrets/{secret_name}'],
        deleteRepoSecret: [
          'DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        deleteSelfHostedRunnerFromOrg: [
          'DELETE /orgs/{org}/actions/runners/{runner_id}'
        ],
        deleteSelfHostedRunnerFromRepo: [
          'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}'
        ],
        deleteWorkflowRun: [
          'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}'
        ],
        deleteWorkflowRunLogs: [
          'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs'
        ],
        disableSelectedRepositoryGithubActionsOrganization: [
          'DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}'
        ],
        disableWorkflow: [
          'PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable'
        ],
        downloadArtifact: [
          'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}'
        ],
        downloadJobLogsForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs'
        ],
        downloadWorkflowRunAttemptLogs: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs'
        ],
        downloadWorkflowRunLogs: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs'
        ],
        enableSelectedRepositoryGithubActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/repositories/{repository_id}'
        ],
        enableWorkflow: [
          'PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable'
        ],
        getAllowedActionsOrganization: [
          'GET /orgs/{org}/actions/permissions/selected-actions'
        ],
        getAllowedActionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions/selected-actions'
        ],
        getArtifact: [
          'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'
        ],
        getEnvironmentPublicKey: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key'
        ],
        getEnvironmentSecret: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        getGithubActionsPermissionsOrganization: [
          'GET /orgs/{org}/actions/permissions'
        ],
        getGithubActionsPermissionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions'
        ],
        getJobForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/jobs/{job_id}'
        ],
        getOrgPublicKey: ['GET /orgs/{org}/actions/secrets/public-key'],
        getOrgSecret: ['GET /orgs/{org}/actions/secrets/{secret_name}'],
        getPendingDeploymentsForRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments'
        ],
        getRepoPermissions: [
          'GET /repos/{owner}/{repo}/actions/permissions',
          {},
          {
            renamed: ['actions', 'getGithubActionsPermissionsRepository']
          }
        ],
        getRepoPublicKey: [
          'GET /repos/{owner}/{repo}/actions/secrets/public-key'
        ],
        getRepoSecret: [
          'GET /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        getReviewsForRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals'
        ],
        getSelfHostedRunnerForOrg: [
          'GET /orgs/{org}/actions/runners/{runner_id}'
        ],
        getSelfHostedRunnerForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners/{runner_id}'
        ],
        getWorkflow: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}'
        ],
        getWorkflowRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}'],
        getWorkflowRunAttempt: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}'
        ],
        getWorkflowRunUsage: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing'
        ],
        getWorkflowUsage: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing'
        ],
        listArtifactsForRepo: ['GET /repos/{owner}/{repo}/actions/artifacts'],
        listEnvironmentSecrets: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets'
        ],
        listJobsForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs'
        ],
        listJobsForWorkflowRunAttempt: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs'
        ],
        listOrgSecrets: ['GET /orgs/{org}/actions/secrets'],
        listRepoSecrets: ['GET /repos/{owner}/{repo}/actions/secrets'],
        listRepoWorkflows: ['GET /repos/{owner}/{repo}/actions/workflows'],
        listRunnerApplicationsForOrg: [
          'GET /orgs/{org}/actions/runners/downloads'
        ],
        listRunnerApplicationsForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners/downloads'
        ],
        listSelectedReposForOrgSecret: [
          'GET /orgs/{org}/actions/secrets/{secret_name}/repositories'
        ],
        listSelectedRepositoriesEnabledGithubActionsOrganization: [
          'GET /orgs/{org}/actions/permissions/repositories'
        ],
        listSelfHostedRunnersForOrg: ['GET /orgs/{org}/actions/runners'],
        listSelfHostedRunnersForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners'
        ],
        listWorkflowRunArtifacts: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts'
        ],
        listWorkflowRuns: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs'
        ],
        listWorkflowRunsForRepo: ['GET /repos/{owner}/{repo}/actions/runs'],
        removeSelectedRepoFromOrgSecret: [
          'DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}'
        ],
        reviewPendingDeploymentsForRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments'
        ],
        setAllowedActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/selected-actions'
        ],
        setAllowedActionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions/selected-actions'
        ],
        setGithubActionsPermissionsOrganization: [
          'PUT /orgs/{org}/actions/permissions'
        ],
        setGithubActionsPermissionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions'
        ],
        setSelectedReposForOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories'
        ],
        setSelectedRepositoriesEnabledGithubActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/repositories'
        ]
      },
      activity: {
        checkRepoIsStarredByAuthenticatedUser: [
          'GET /user/starred/{owner}/{repo}'
        ],
        deleteRepoSubscription: ['DELETE /repos/{owner}/{repo}/subscription'],
        deleteThreadSubscription: [
          'DELETE /notifications/threads/{thread_id}/subscription'
        ],
        getFeeds: ['GET /feeds'],
        getRepoSubscription: ['GET /repos/{owner}/{repo}/subscription'],
        getThread: ['GET /notifications/threads/{thread_id}'],
        getThreadSubscriptionForAuthenticatedUser: [
          'GET /notifications/threads/{thread_id}/subscription'
        ],
        listEventsForAuthenticatedUser: ['GET /users/{username}/events'],
        listNotificationsForAuthenticatedUser: ['GET /notifications'],
        listOrgEventsForAuthenticatedUser: [
          'GET /users/{username}/events/orgs/{org}'
        ],
        listPublicEvents: ['GET /events'],
        listPublicEventsForRepoNetwork: ['GET /networks/{owner}/{repo}/events'],
        listPublicEventsForUser: ['GET /users/{username}/events/public'],
        listPublicOrgEvents: ['GET /orgs/{org}/events'],
        listReceivedEventsForUser: ['GET /users/{username}/received_events'],
        listReceivedPublicEventsForUser: [
          'GET /users/{username}/received_events/public'
        ],
        listRepoEvents: ['GET /repos/{owner}/{repo}/events'],
        listRepoNotificationsForAuthenticatedUser: [
          'GET /repos/{owner}/{repo}/notifications'
        ],
        listReposStarredByAuthenticatedUser: ['GET /user/starred'],
        listReposStarredByUser: ['GET /users/{username}/starred'],
        listReposWatchedByUser: ['GET /users/{username}/subscriptions'],
        listStargazersForRepo: ['GET /repos/{owner}/{repo}/stargazers'],
        listWatchedReposForAuthenticatedUser: ['GET /user/subscriptions'],
        listWatchersForRepo: ['GET /repos/{owner}/{repo}/subscribers'],
        markNotificationsAsRead: ['PUT /notifications'],
        markRepoNotificationsAsRead: [
          'PUT /repos/{owner}/{repo}/notifications'
        ],
        markThreadAsRead: ['PATCH /notifications/threads/{thread_id}'],
        setRepoSubscription: ['PUT /repos/{owner}/{repo}/subscription'],
        setThreadSubscription: [
          'PUT /notifications/threads/{thread_id}/subscription'
        ],
        starRepoForAuthenticatedUser: ['PUT /user/starred/{owner}/{repo}'],
        unstarRepoForAuthenticatedUser: ['DELETE /user/starred/{owner}/{repo}']
      },
      apps: {
        addRepoToInstallation: [
          'PUT /user/installations/{installation_id}/repositories/{repository_id}',
          {},
          {
            renamed: ['apps', 'addRepoToInstallationForAuthenticatedUser']
          }
        ],
        addRepoToInstallationForAuthenticatedUser: [
          'PUT /user/installations/{installation_id}/repositories/{repository_id}'
        ],
        checkToken: ['POST /applications/{client_id}/token'],
        createContentAttachment: [
          'POST /content_references/{content_reference_id}/attachments',
          {
            mediaType: {
              previews: ['corsair']
            }
          }
        ],
        createContentAttachmentForRepo: [
          'POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments',
          {
            mediaType: {
              previews: ['corsair']
            }
          }
        ],
        createFromManifest: ['POST /app-manifests/{code}/conversions'],
        createInstallationAccessToken: [
          'POST /app/installations/{installation_id}/access_tokens'
        ],
        deleteAuthorization: ['DELETE /applications/{client_id}/grant'],
        deleteInstallation: ['DELETE /app/installations/{installation_id}'],
        deleteToken: ['DELETE /applications/{client_id}/token'],
        getAuthenticated: ['GET /app'],
        getBySlug: ['GET /apps/{app_slug}'],
        getInstallation: ['GET /app/installations/{installation_id}'],
        getOrgInstallation: ['GET /orgs/{org}/installation'],
        getRepoInstallation: ['GET /repos/{owner}/{repo}/installation'],
        getSubscriptionPlanForAccount: [
          'GET /marketplace_listing/accounts/{account_id}'
        ],
        getSubscriptionPlanForAccountStubbed: [
          'GET /marketplace_listing/stubbed/accounts/{account_id}'
        ],
        getUserInstallation: ['GET /users/{username}/installation'],
        getWebhookConfigForApp: ['GET /app/hook/config'],
        getWebhookDelivery: ['GET /app/hook/deliveries/{delivery_id}'],
        listAccountsForPlan: [
          'GET /marketplace_listing/plans/{plan_id}/accounts'
        ],
        listAccountsForPlanStubbed: [
          'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts'
        ],
        listInstallationReposForAuthenticatedUser: [
          'GET /user/installations/{installation_id}/repositories'
        ],
        listInstallations: ['GET /app/installations'],
        listInstallationsForAuthenticatedUser: ['GET /user/installations'],
        listPlans: ['GET /marketplace_listing/plans'],
        listPlansStubbed: ['GET /marketplace_listing/stubbed/plans'],
        listReposAccessibleToInstallation: ['GET /installation/repositories'],
        listSubscriptionsForAuthenticatedUser: [
          'GET /user/marketplace_purchases'
        ],
        listSubscriptionsForAuthenticatedUserStubbed: [
          'GET /user/marketplace_purchases/stubbed'
        ],
        listWebhookDeliveries: ['GET /app/hook/deliveries'],
        redeliverWebhookDelivery: [
          'POST /app/hook/deliveries/{delivery_id}/attempts'
        ],
        removeRepoFromInstallation: [
          'DELETE /user/installations/{installation_id}/repositories/{repository_id}',
          {},
          {
            renamed: ['apps', 'removeRepoFromInstallationForAuthenticatedUser']
          }
        ],
        removeRepoFromInstallationForAuthenticatedUser: [
          'DELETE /user/installations/{installation_id}/repositories/{repository_id}'
        ],
        resetToken: ['PATCH /applications/{client_id}/token'],
        revokeInstallationAccessToken: ['DELETE /installation/token'],
        scopeToken: ['POST /applications/{client_id}/token/scoped'],
        suspendInstallation: [
          'PUT /app/installations/{installation_id}/suspended'
        ],
        unsuspendInstallation: [
          'DELETE /app/installations/{installation_id}/suspended'
        ],
        updateWebhookConfigForApp: ['PATCH /app/hook/config']
      },
      billing: {
        getGithubActionsBillingOrg: [
          'GET /orgs/{org}/settings/billing/actions'
        ],
        getGithubActionsBillingUser: [
          'GET /users/{username}/settings/billing/actions'
        ],
        getGithubPackagesBillingOrg: [
          'GET /orgs/{org}/settings/billing/packages'
        ],
        getGithubPackagesBillingUser: [
          'GET /users/{username}/settings/billing/packages'
        ],
        getSharedStorageBillingOrg: [
          'GET /orgs/{org}/settings/billing/shared-storage'
        ],
        getSharedStorageBillingUser: [
          'GET /users/{username}/settings/billing/shared-storage'
        ]
      },
      checks: {
        create: ['POST /repos/{owner}/{repo}/check-runs'],
        createSuite: ['POST /repos/{owner}/{repo}/check-suites'],
        get: ['GET /repos/{owner}/{repo}/check-runs/{check_run_id}'],
        getSuite: ['GET /repos/{owner}/{repo}/check-suites/{check_suite_id}'],
        listAnnotations: [
          'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations'
        ],
        listForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/check-runs'],
        listForSuite: [
          'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs'
        ],
        listSuitesForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/check-suites'
        ],
        rerequestRun: [
          'POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest'
        ],
        rerequestSuite: [
          'POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest'
        ],
        setSuitesPreferences: [
          'PATCH /repos/{owner}/{repo}/check-suites/preferences'
        ],
        update: ['PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}']
      },
      codeScanning: {
        deleteAnalysis: [
          'DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}'
        ],
        getAlert: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
          {},
          {
            renamedParameters: {
              alert_id: 'alert_number'
            }
          }
        ],
        getAnalysis: [
          'GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}'
        ],
        getSarif: ['GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}'],
        listAlertInstances: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances'
        ],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/code-scanning/alerts'],
        listAlertsInstances: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
          {},
          {
            renamed: ['codeScanning', 'listAlertInstances']
          }
        ],
        listRecentAnalyses: [
          'GET /repos/{owner}/{repo}/code-scanning/analyses'
        ],
        updateAlert: [
          'PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}'
        ],
        uploadSarif: ['POST /repos/{owner}/{repo}/code-scanning/sarifs']
      },
      codesOfConduct: {
        getAllCodesOfConduct: ['GET /codes_of_conduct'],
        getConductCode: ['GET /codes_of_conduct/{key}']
      },
      emojis: {
        get: ['GET /emojis']
      },
      enterpriseAdmin: {
        disableSelectedOrganizationGithubActionsEnterprise: [
          'DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}'
        ],
        enableSelectedOrganizationGithubActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}'
        ],
        getAllowedActionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/selected-actions'
        ],
        getGithubActionsPermissionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions'
        ],
        listSelectedOrganizationsEnabledGithubActionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/organizations'
        ],
        setAllowedActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/selected-actions'
        ],
        setGithubActionsPermissionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions'
        ],
        setSelectedOrganizationsEnabledGithubActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/organizations'
        ]
      },
      gists: {
        checkIsStarred: ['GET /gists/{gist_id}/star'],
        create: ['POST /gists'],
        createComment: ['POST /gists/{gist_id}/comments'],
        delete: ['DELETE /gists/{gist_id}'],
        deleteComment: ['DELETE /gists/{gist_id}/comments/{comment_id}'],
        fork: ['POST /gists/{gist_id}/forks'],
        get: ['GET /gists/{gist_id}'],
        getComment: ['GET /gists/{gist_id}/comments/{comment_id}'],
        getRevision: ['GET /gists/{gist_id}/{sha}'],
        list: ['GET /gists'],
        listComments: ['GET /gists/{gist_id}/comments'],
        listCommits: ['GET /gists/{gist_id}/commits'],
        listForUser: ['GET /users/{username}/gists'],
        listForks: ['GET /gists/{gist_id}/forks'],
        listPublic: ['GET /gists/public'],
        listStarred: ['GET /gists/starred'],
        star: ['PUT /gists/{gist_id}/star'],
        unstar: ['DELETE /gists/{gist_id}/star'],
        update: ['PATCH /gists/{gist_id}'],
        updateComment: ['PATCH /gists/{gist_id}/comments/{comment_id}']
      },
      git: {
        createBlob: ['POST /repos/{owner}/{repo}/git/blobs'],
        createCommit: ['POST /repos/{owner}/{repo}/git/commits'],
        createRef: ['POST /repos/{owner}/{repo}/git/refs'],
        createTag: ['POST /repos/{owner}/{repo}/git/tags'],
        createTree: ['POST /repos/{owner}/{repo}/git/trees'],
        deleteRef: ['DELETE /repos/{owner}/{repo}/git/refs/{ref}'],
        getBlob: ['GET /repos/{owner}/{repo}/git/blobs/{file_sha}'],
        getCommit: ['GET /repos/{owner}/{repo}/git/commits/{commit_sha}'],
        getRef: ['GET /repos/{owner}/{repo}/git/ref/{ref}'],
        getTag: ['GET /repos/{owner}/{repo}/git/tags/{tag_sha}'],
        getTree: ['GET /repos/{owner}/{repo}/git/trees/{tree_sha}'],
        listMatchingRefs: ['GET /repos/{owner}/{repo}/git/matching-refs/{ref}'],
        updateRef: ['PATCH /repos/{owner}/{repo}/git/refs/{ref}']
      },
      gitignore: {
        getAllTemplates: ['GET /gitignore/templates'],
        getTemplate: ['GET /gitignore/templates/{name}']
      },
      interactions: {
        getRestrictionsForAuthenticatedUser: ['GET /user/interaction-limits'],
        getRestrictionsForOrg: ['GET /orgs/{org}/interaction-limits'],
        getRestrictionsForRepo: [
          'GET /repos/{owner}/{repo}/interaction-limits'
        ],
        getRestrictionsForYourPublicRepos: [
          'GET /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'getRestrictionsForAuthenticatedUser']
          }
        ],
        removeRestrictionsForAuthenticatedUser: [
          'DELETE /user/interaction-limits'
        ],
        removeRestrictionsForOrg: ['DELETE /orgs/{org}/interaction-limits'],
        removeRestrictionsForRepo: [
          'DELETE /repos/{owner}/{repo}/interaction-limits'
        ],
        removeRestrictionsForYourPublicRepos: [
          'DELETE /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'removeRestrictionsForAuthenticatedUser']
          }
        ],
        setRestrictionsForAuthenticatedUser: ['PUT /user/interaction-limits'],
        setRestrictionsForOrg: ['PUT /orgs/{org}/interaction-limits'],
        setRestrictionsForRepo: [
          'PUT /repos/{owner}/{repo}/interaction-limits'
        ],
        setRestrictionsForYourPublicRepos: [
          'PUT /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'setRestrictionsForAuthenticatedUser']
          }
        ]
      },
      issues: {
        addAssignees: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/assignees'
        ],
        addLabels: ['POST /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        checkUserCanBeAssigned: [
          'GET /repos/{owner}/{repo}/assignees/{assignee}'
        ],
        create: ['POST /repos/{owner}/{repo}/issues'],
        createComment: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/comments'
        ],
        createLabel: ['POST /repos/{owner}/{repo}/labels'],
        createMilestone: ['POST /repos/{owner}/{repo}/milestones'],
        deleteComment: [
          'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}'
        ],
        deleteLabel: ['DELETE /repos/{owner}/{repo}/labels/{name}'],
        deleteMilestone: [
          'DELETE /repos/{owner}/{repo}/milestones/{milestone_number}'
        ],
        get: ['GET /repos/{owner}/{repo}/issues/{issue_number}'],
        getComment: ['GET /repos/{owner}/{repo}/issues/comments/{comment_id}'],
        getEvent: ['GET /repos/{owner}/{repo}/issues/events/{event_id}'],
        getLabel: ['GET /repos/{owner}/{repo}/labels/{name}'],
        getMilestone: [
          'GET /repos/{owner}/{repo}/milestones/{milestone_number}'
        ],
        list: ['GET /issues'],
        listAssignees: ['GET /repos/{owner}/{repo}/assignees'],
        listComments: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/comments'
        ],
        listCommentsForRepo: ['GET /repos/{owner}/{repo}/issues/comments'],
        listEvents: ['GET /repos/{owner}/{repo}/issues/{issue_number}/events'],
        listEventsForRepo: ['GET /repos/{owner}/{repo}/issues/events'],
        listEventsForTimeline: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline'
        ],
        listForAuthenticatedUser: ['GET /user/issues'],
        listForOrg: ['GET /orgs/{org}/issues'],
        listForRepo: ['GET /repos/{owner}/{repo}/issues'],
        listLabelsForMilestone: [
          'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels'
        ],
        listLabelsForRepo: ['GET /repos/{owner}/{repo}/labels'],
        listLabelsOnIssue: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/labels'
        ],
        listMilestones: ['GET /repos/{owner}/{repo}/milestones'],
        lock: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/lock'],
        removeAllLabels: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels'
        ],
        removeAssignees: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees'
        ],
        removeLabel: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}'
        ],
        setLabels: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        unlock: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock'],
        update: ['PATCH /repos/{owner}/{repo}/issues/{issue_number}'],
        updateComment: [
          'PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}'
        ],
        updateLabel: ['PATCH /repos/{owner}/{repo}/labels/{name}'],
        updateMilestone: [
          'PATCH /repos/{owner}/{repo}/milestones/{milestone_number}'
        ]
      },
      licenses: {
        get: ['GET /licenses/{license}'],
        getAllCommonlyUsed: ['GET /licenses'],
        getForRepo: ['GET /repos/{owner}/{repo}/license']
      },
      markdown: {
        render: ['POST /markdown'],
        renderRaw: [
          'POST /markdown/raw',
          {
            headers: {
              'content-type': 'text/plain; charset=utf-8'
            }
          }
        ]
      },
      meta: {
        get: ['GET /meta'],
        getOctocat: ['GET /octocat'],
        getZen: ['GET /zen'],
        root: ['GET /']
      },
      migrations: {
        cancelImport: ['DELETE /repos/{owner}/{repo}/import'],
        deleteArchiveForAuthenticatedUser: [
          'DELETE /user/migrations/{migration_id}/archive'
        ],
        deleteArchiveForOrg: [
          'DELETE /orgs/{org}/migrations/{migration_id}/archive'
        ],
        downloadArchiveForOrg: [
          'GET /orgs/{org}/migrations/{migration_id}/archive'
        ],
        getArchiveForAuthenticatedUser: [
          'GET /user/migrations/{migration_id}/archive'
        ],
        getCommitAuthors: ['GET /repos/{owner}/{repo}/import/authors'],
        getImportStatus: ['GET /repos/{owner}/{repo}/import'],
        getLargeFiles: ['GET /repos/{owner}/{repo}/import/large_files'],
        getStatusForAuthenticatedUser: ['GET /user/migrations/{migration_id}'],
        getStatusForOrg: ['GET /orgs/{org}/migrations/{migration_id}'],
        listForAuthenticatedUser: ['GET /user/migrations'],
        listForOrg: ['GET /orgs/{org}/migrations'],
        listReposForAuthenticatedUser: [
          'GET /user/migrations/{migration_id}/repositories'
        ],
        listReposForOrg: [
          'GET /orgs/{org}/migrations/{migration_id}/repositories'
        ],
        listReposForUser: [
          'GET /user/migrations/{migration_id}/repositories',
          {},
          {
            renamed: ['migrations', 'listReposForAuthenticatedUser']
          }
        ],
        mapCommitAuthor: [
          'PATCH /repos/{owner}/{repo}/import/authors/{author_id}'
        ],
        setLfsPreference: ['PATCH /repos/{owner}/{repo}/import/lfs'],
        startForAuthenticatedUser: ['POST /user/migrations'],
        startForOrg: ['POST /orgs/{org}/migrations'],
        startImport: ['PUT /repos/{owner}/{repo}/import'],
        unlockRepoForAuthenticatedUser: [
          'DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock'
        ],
        unlockRepoForOrg: [
          'DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock'
        ],
        updateImport: ['PATCH /repos/{owner}/{repo}/import']
      },
      orgs: {
        blockUser: ['PUT /orgs/{org}/blocks/{username}'],
        cancelInvitation: ['DELETE /orgs/{org}/invitations/{invitation_id}'],
        checkBlockedUser: ['GET /orgs/{org}/blocks/{username}'],
        checkMembershipForUser: ['GET /orgs/{org}/members/{username}'],
        checkPublicMembershipForUser: [
          'GET /orgs/{org}/public_members/{username}'
        ],
        convertMemberToOutsideCollaborator: [
          'PUT /orgs/{org}/outside_collaborators/{username}'
        ],
        createInvitation: ['POST /orgs/{org}/invitations'],
        createWebhook: ['POST /orgs/{org}/hooks'],
        deleteWebhook: ['DELETE /orgs/{org}/hooks/{hook_id}'],
        get: ['GET /orgs/{org}'],
        getMembershipForAuthenticatedUser: ['GET /user/memberships/orgs/{org}'],
        getMembershipForUser: ['GET /orgs/{org}/memberships/{username}'],
        getWebhook: ['GET /orgs/{org}/hooks/{hook_id}'],
        getWebhookConfigForOrg: ['GET /orgs/{org}/hooks/{hook_id}/config'],
        getWebhookDelivery: [
          'GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}'
        ],
        list: ['GET /organizations'],
        listAppInstallations: ['GET /orgs/{org}/installations'],
        listBlockedUsers: ['GET /orgs/{org}/blocks'],
        listFailedInvitations: ['GET /orgs/{org}/failed_invitations'],
        listForAuthenticatedUser: ['GET /user/orgs'],
        listForUser: ['GET /users/{username}/orgs'],
        listInvitationTeams: [
          'GET /orgs/{org}/invitations/{invitation_id}/teams'
        ],
        listMembers: ['GET /orgs/{org}/members'],
        listMembershipsForAuthenticatedUser: ['GET /user/memberships/orgs'],
        listOutsideCollaborators: ['GET /orgs/{org}/outside_collaborators'],
        listPendingInvitations: ['GET /orgs/{org}/invitations'],
        listPublicMembers: ['GET /orgs/{org}/public_members'],
        listWebhookDeliveries: ['GET /orgs/{org}/hooks/{hook_id}/deliveries'],
        listWebhooks: ['GET /orgs/{org}/hooks'],
        pingWebhook: ['POST /orgs/{org}/hooks/{hook_id}/pings'],
        redeliverWebhookDelivery: [
          'POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts'
        ],
        removeMember: ['DELETE /orgs/{org}/members/{username}'],
        removeMembershipForUser: ['DELETE /orgs/{org}/memberships/{username}'],
        removeOutsideCollaborator: [
          'DELETE /orgs/{org}/outside_collaborators/{username}'
        ],
        removePublicMembershipForAuthenticatedUser: [
          'DELETE /orgs/{org}/public_members/{username}'
        ],
        setMembershipForUser: ['PUT /orgs/{org}/memberships/{username}'],
        setPublicMembershipForAuthenticatedUser: [
          'PUT /orgs/{org}/public_members/{username}'
        ],
        unblockUser: ['DELETE /orgs/{org}/blocks/{username}'],
        update: ['PATCH /orgs/{org}'],
        updateMembershipForAuthenticatedUser: [
          'PATCH /user/memberships/orgs/{org}'
        ],
        updateWebhook: ['PATCH /orgs/{org}/hooks/{hook_id}'],
        updateWebhookConfigForOrg: ['PATCH /orgs/{org}/hooks/{hook_id}/config']
      },
      packages: {
        deletePackageForAuthenticatedUser: [
          'DELETE /user/packages/{package_type}/{package_name}'
        ],
        deletePackageForOrg: [
          'DELETE /orgs/{org}/packages/{package_type}/{package_name}'
        ],
        deletePackageForUser: [
          'DELETE /users/{username}/packages/{package_type}/{package_name}'
        ],
        deletePackageVersionForAuthenticatedUser: [
          'DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        deletePackageVersionForOrg: [
          'DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        deletePackageVersionForUser: [
          'DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getAllPackageVersionsForAPackageOwnedByAnOrg: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
          {},
          {
            renamed: ['packages', 'getAllPackageVersionsForPackageOwnedByOrg']
          }
        ],
        getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions',
          {},
          {
            renamed: [
              'packages',
              'getAllPackageVersionsForPackageOwnedByAuthenticatedUser'
            ]
          }
        ],
        getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions'
        ],
        getAllPackageVersionsForPackageOwnedByOrg: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions'
        ],
        getAllPackageVersionsForPackageOwnedByUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}/versions'
        ],
        getPackageForAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}'
        ],
        getPackageForOrganization: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}'
        ],
        getPackageForUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}'
        ],
        getPackageVersionForAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getPackageVersionForOrganization: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getPackageVersionForUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        listPackagesForAuthenticatedUser: ['GET /user/packages'],
        listPackagesForOrganization: ['GET /orgs/{org}/packages'],
        listPackagesForUser: ['GET /users/{username}/packages'],
        restorePackageForAuthenticatedUser: [
          'POST /user/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageForOrg: [
          'POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageForUser: [
          'POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageVersionForAuthenticatedUser: [
          'POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ],
        restorePackageVersionForOrg: [
          'POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ],
        restorePackageVersionForUser: [
          'POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ]
      },
      projects: {
        addCollaborator: [
          'PUT /projects/{project_id}/collaborators/{username}'
        ],
        createCard: ['POST /projects/columns/{column_id}/cards'],
        createColumn: ['POST /projects/{project_id}/columns'],
        createForAuthenticatedUser: ['POST /user/projects'],
        createForOrg: ['POST /orgs/{org}/projects'],
        createForRepo: ['POST /repos/{owner}/{repo}/projects'],
        delete: ['DELETE /projects/{project_id}'],
        deleteCard: ['DELETE /projects/columns/cards/{card_id}'],
        deleteColumn: ['DELETE /projects/columns/{column_id}'],
        get: ['GET /projects/{project_id}'],
        getCard: ['GET /projects/columns/cards/{card_id}'],
        getColumn: ['GET /projects/columns/{column_id}'],
        getPermissionForUser: [
          'GET /projects/{project_id}/collaborators/{username}/permission'
        ],
        listCards: ['GET /projects/columns/{column_id}/cards'],
        listCollaborators: ['GET /projects/{project_id}/collaborators'],
        listColumns: ['GET /projects/{project_id}/columns'],
        listForOrg: ['GET /orgs/{org}/projects'],
        listForRepo: ['GET /repos/{owner}/{repo}/projects'],
        listForUser: ['GET /users/{username}/projects'],
        moveCard: ['POST /projects/columns/cards/{card_id}/moves'],
        moveColumn: ['POST /projects/columns/{column_id}/moves'],
        removeCollaborator: [
          'DELETE /projects/{project_id}/collaborators/{username}'
        ],
        update: ['PATCH /projects/{project_id}'],
        updateCard: ['PATCH /projects/columns/cards/{card_id}'],
        updateColumn: ['PATCH /projects/columns/{column_id}']
      },
      pulls: {
        checkIfMerged: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
        create: ['POST /repos/{owner}/{repo}/pulls'],
        createReplyForReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies'
        ],
        createReview: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews'
        ],
        createReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments'
        ],
        deletePendingReview: [
          'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        deleteReviewComment: [
          'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ],
        dismissReview: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals'
        ],
        get: ['GET /repos/{owner}/{repo}/pulls/{pull_number}'],
        getReview: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        getReviewComment: [
          'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ],
        list: ['GET /repos/{owner}/{repo}/pulls'],
        listCommentsForReview: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments'
        ],
        listCommits: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/commits'],
        listFiles: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/files'],
        listRequestedReviewers: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        listReviewComments: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments'
        ],
        listReviewCommentsForRepo: ['GET /repos/{owner}/{repo}/pulls/comments'],
        listReviews: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews'],
        merge: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
        removeRequestedReviewers: [
          'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        requestReviewers: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        submitReview: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events'
        ],
        update: ['PATCH /repos/{owner}/{repo}/pulls/{pull_number}'],
        updateBranch: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch'
        ],
        updateReview: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        updateReviewComment: [
          'PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ]
      },
      rateLimit: {
        get: ['GET /rate_limit']
      },
      reactions: {
        createForCommitComment: [
          'POST /repos/{owner}/{repo}/comments/{comment_id}/reactions'
        ],
        createForIssue: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/reactions'
        ],
        createForIssueComment: [
          'POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions'
        ],
        createForPullRequestReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions'
        ],
        createForRelease: [
          'POST /repos/{owner}/{repo}/releases/{release_id}/reactions'
        ],
        createForTeamDiscussionCommentInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions'
        ],
        createForTeamDiscussionInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions'
        ],
        deleteForCommitComment: [
          'DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForIssue: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}'
        ],
        deleteForIssueComment: [
          'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForPullRequestComment: [
          'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForTeamDiscussion: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}'
        ],
        deleteForTeamDiscussionComment: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}'
        ],
        listForCommitComment: [
          'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions'
        ],
        listForIssue: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions'
        ],
        listForIssueComment: [
          'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions'
        ],
        listForPullRequestReviewComment: [
          'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions'
        ],
        listForTeamDiscussionCommentInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions'
        ],
        listForTeamDiscussionInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions'
        ]
      },
      repos: {
        acceptInvitation: [
          'PATCH /user/repository_invitations/{invitation_id}',
          {},
          {
            renamed: ['repos', 'acceptInvitationForAuthenticatedUser']
          }
        ],
        acceptInvitationForAuthenticatedUser: [
          'PATCH /user/repository_invitations/{invitation_id}'
        ],
        addAppAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        addCollaborator: ['PUT /repos/{owner}/{repo}/collaborators/{username}'],
        addStatusCheckContexts: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        addTeamAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        addUserAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        checkCollaborator: [
          'GET /repos/{owner}/{repo}/collaborators/{username}'
        ],
        checkVulnerabilityAlerts: [
          'GET /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        compareCommits: ['GET /repos/{owner}/{repo}/compare/{base}...{head}'],
        compareCommitsWithBasehead: [
          'GET /repos/{owner}/{repo}/compare/{basehead}'
        ],
        createAutolink: ['POST /repos/{owner}/{repo}/autolinks'],
        createCommitComment: [
          'POST /repos/{owner}/{repo}/commits/{commit_sha}/comments'
        ],
        createCommitSignatureProtection: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        createCommitStatus: ['POST /repos/{owner}/{repo}/statuses/{sha}'],
        createDeployKey: ['POST /repos/{owner}/{repo}/keys'],
        createDeployment: ['POST /repos/{owner}/{repo}/deployments'],
        createDeploymentStatus: [
          'POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'
        ],
        createDispatchEvent: ['POST /repos/{owner}/{repo}/dispatches'],
        createForAuthenticatedUser: ['POST /user/repos'],
        createFork: ['POST /repos/{owner}/{repo}/forks'],
        createInOrg: ['POST /orgs/{org}/repos'],
        createOrUpdateEnvironment: [
          'PUT /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        createOrUpdateFileContents: [
          'PUT /repos/{owner}/{repo}/contents/{path}'
        ],
        createPagesSite: ['POST /repos/{owner}/{repo}/pages'],
        createRelease: ['POST /repos/{owner}/{repo}/releases'],
        createUsingTemplate: [
          'POST /repos/{template_owner}/{template_repo}/generate'
        ],
        createWebhook: ['POST /repos/{owner}/{repo}/hooks'],
        declineInvitation: [
          'DELETE /user/repository_invitations/{invitation_id}',
          {},
          {
            renamed: ['repos', 'declineInvitationForAuthenticatedUser']
          }
        ],
        declineInvitationForAuthenticatedUser: [
          'DELETE /user/repository_invitations/{invitation_id}'
        ],
        delete: ['DELETE /repos/{owner}/{repo}'],
        deleteAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions'
        ],
        deleteAdminBranchProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        deleteAnEnvironment: [
          'DELETE /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        deleteAutolink: [
          'DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}'
        ],
        deleteBranchProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        deleteCommitComment: [
          'DELETE /repos/{owner}/{repo}/comments/{comment_id}'
        ],
        deleteCommitSignatureProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        deleteDeployKey: ['DELETE /repos/{owner}/{repo}/keys/{key_id}'],
        deleteDeployment: [
          'DELETE /repos/{owner}/{repo}/deployments/{deployment_id}'
        ],
        deleteFile: ['DELETE /repos/{owner}/{repo}/contents/{path}'],
        deleteInvitation: [
          'DELETE /repos/{owner}/{repo}/invitations/{invitation_id}'
        ],
        deletePagesSite: ['DELETE /repos/{owner}/{repo}/pages'],
        deletePullRequestReviewProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        deleteRelease: ['DELETE /repos/{owner}/{repo}/releases/{release_id}'],
        deleteReleaseAsset: [
          'DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        deleteWebhook: ['DELETE /repos/{owner}/{repo}/hooks/{hook_id}'],
        disableAutomatedSecurityFixes: [
          'DELETE /repos/{owner}/{repo}/automated-security-fixes'
        ],
        disableLfsForRepo: ['DELETE /repos/{owner}/{repo}/lfs'],
        disableVulnerabilityAlerts: [
          'DELETE /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        downloadArchive: [
          'GET /repos/{owner}/{repo}/zipball/{ref}',
          {},
          {
            renamed: ['repos', 'downloadZipballArchive']
          }
        ],
        downloadTarballArchive: ['GET /repos/{owner}/{repo}/tarball/{ref}'],
        downloadZipballArchive: ['GET /repos/{owner}/{repo}/zipball/{ref}'],
        enableAutomatedSecurityFixes: [
          'PUT /repos/{owner}/{repo}/automated-security-fixes'
        ],
        enableLfsForRepo: ['PUT /repos/{owner}/{repo}/lfs'],
        enableVulnerabilityAlerts: [
          'PUT /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        generateReleaseNotes: [
          'POST /repos/{owner}/{repo}/releases/generate-notes'
        ],
        get: ['GET /repos/{owner}/{repo}'],
        getAccessRestrictions: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions'
        ],
        getAdminBranchProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        getAllEnvironments: ['GET /repos/{owner}/{repo}/environments'],
        getAllStatusCheckContexts: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts'
        ],
        getAllTopics: [
          'GET /repos/{owner}/{repo}/topics',
          {
            mediaType: {
              previews: ['mercy']
            }
          }
        ],
        getAppsWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps'
        ],
        getAutolink: ['GET /repos/{owner}/{repo}/autolinks/{autolink_id}'],
        getBranch: ['GET /repos/{owner}/{repo}/branches/{branch}'],
        getBranchProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        getClones: ['GET /repos/{owner}/{repo}/traffic/clones'],
        getCodeFrequencyStats: [
          'GET /repos/{owner}/{repo}/stats/code_frequency'
        ],
        getCollaboratorPermissionLevel: [
          'GET /repos/{owner}/{repo}/collaborators/{username}/permission'
        ],
        getCombinedStatusForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/status'
        ],
        getCommit: ['GET /repos/{owner}/{repo}/commits/{ref}'],
        getCommitActivityStats: [
          'GET /repos/{owner}/{repo}/stats/commit_activity'
        ],
        getCommitComment: ['GET /repos/{owner}/{repo}/comments/{comment_id}'],
        getCommitSignatureProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        getCommunityProfileMetrics: [
          'GET /repos/{owner}/{repo}/community/profile'
        ],
        getContent: ['GET /repos/{owner}/{repo}/contents/{path}'],
        getContributorsStats: ['GET /repos/{owner}/{repo}/stats/contributors'],
        getDeployKey: ['GET /repos/{owner}/{repo}/keys/{key_id}'],
        getDeployment: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}'
        ],
        getDeploymentStatus: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}'
        ],
        getEnvironment: [
          'GET /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        getLatestPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/latest'],
        getLatestRelease: ['GET /repos/{owner}/{repo}/releases/latest'],
        getPages: ['GET /repos/{owner}/{repo}/pages'],
        getPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/{build_id}'],
        getPagesHealthCheck: ['GET /repos/{owner}/{repo}/pages/health'],
        getParticipationStats: [
          'GET /repos/{owner}/{repo}/stats/participation'
        ],
        getPullRequestReviewProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        getPunchCardStats: ['GET /repos/{owner}/{repo}/stats/punch_card'],
        getReadme: ['GET /repos/{owner}/{repo}/readme'],
        getReadmeInDirectory: ['GET /repos/{owner}/{repo}/readme/{dir}'],
        getRelease: ['GET /repos/{owner}/{repo}/releases/{release_id}'],
        getReleaseAsset: [
          'GET /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        getReleaseByTag: ['GET /repos/{owner}/{repo}/releases/tags/{tag}'],
        getStatusChecksProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        getTeamsWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams'
        ],
        getTopPaths: ['GET /repos/{owner}/{repo}/traffic/popular/paths'],
        getTopReferrers: [
          'GET /repos/{owner}/{repo}/traffic/popular/referrers'
        ],
        getUsersWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users'
        ],
        getViews: ['GET /repos/{owner}/{repo}/traffic/views'],
        getWebhook: ['GET /repos/{owner}/{repo}/hooks/{hook_id}'],
        getWebhookConfigForRepo: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/config'
        ],
        getWebhookDelivery: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}'
        ],
        listAutolinks: ['GET /repos/{owner}/{repo}/autolinks'],
        listBranches: ['GET /repos/{owner}/{repo}/branches'],
        listBranchesForHeadCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head'
        ],
        listCollaborators: ['GET /repos/{owner}/{repo}/collaborators'],
        listCommentsForCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments'
        ],
        listCommitCommentsForRepo: ['GET /repos/{owner}/{repo}/comments'],
        listCommitStatusesForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/statuses'
        ],
        listCommits: ['GET /repos/{owner}/{repo}/commits'],
        listContributors: ['GET /repos/{owner}/{repo}/contributors'],
        listDeployKeys: ['GET /repos/{owner}/{repo}/keys'],
        listDeploymentStatuses: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'
        ],
        listDeployments: ['GET /repos/{owner}/{repo}/deployments'],
        listForAuthenticatedUser: ['GET /user/repos'],
        listForOrg: ['GET /orgs/{org}/repos'],
        listForUser: ['GET /users/{username}/repos'],
        listForks: ['GET /repos/{owner}/{repo}/forks'],
        listInvitations: ['GET /repos/{owner}/{repo}/invitations'],
        listInvitationsForAuthenticatedUser: [
          'GET /user/repository_invitations'
        ],
        listLanguages: ['GET /repos/{owner}/{repo}/languages'],
        listPagesBuilds: ['GET /repos/{owner}/{repo}/pages/builds'],
        listPublic: ['GET /repositories'],
        listPullRequestsAssociatedWithCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls'
        ],
        listReleaseAssets: [
          'GET /repos/{owner}/{repo}/releases/{release_id}/assets'
        ],
        listReleases: ['GET /repos/{owner}/{repo}/releases'],
        listTags: ['GET /repos/{owner}/{repo}/tags'],
        listTeams: ['GET /repos/{owner}/{repo}/teams'],
        listWebhookDeliveries: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries'
        ],
        listWebhooks: ['GET /repos/{owner}/{repo}/hooks'],
        merge: ['POST /repos/{owner}/{repo}/merges'],
        mergeUpstream: ['POST /repos/{owner}/{repo}/merge-upstream'],
        pingWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/pings'],
        redeliverWebhookDelivery: [
          'POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts'
        ],
        removeAppAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        removeCollaborator: [
          'DELETE /repos/{owner}/{repo}/collaborators/{username}'
        ],
        removeStatusCheckContexts: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        removeStatusCheckProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        removeTeamAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        removeUserAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        renameBranch: ['POST /repos/{owner}/{repo}/branches/{branch}/rename'],
        replaceAllTopics: [
          'PUT /repos/{owner}/{repo}/topics',
          {
            mediaType: {
              previews: ['mercy']
            }
          }
        ],
        requestPagesBuild: ['POST /repos/{owner}/{repo}/pages/builds'],
        setAdminBranchProtection: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        setAppAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        setStatusCheckContexts: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        setTeamAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        setUserAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        testPushWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/tests'],
        transfer: ['POST /repos/{owner}/{repo}/transfer'],
        update: ['PATCH /repos/{owner}/{repo}'],
        updateBranchProtection: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        updateCommitComment: [
          'PATCH /repos/{owner}/{repo}/comments/{comment_id}'
        ],
        updateInformationAboutPagesSite: ['PUT /repos/{owner}/{repo}/pages'],
        updateInvitation: [
          'PATCH /repos/{owner}/{repo}/invitations/{invitation_id}'
        ],
        updatePullRequestReviewProtection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        updateRelease: ['PATCH /repos/{owner}/{repo}/releases/{release_id}'],
        updateReleaseAsset: [
          'PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        updateStatusCheckPotection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
          {},
          {
            renamed: ['repos', 'updateStatusCheckProtection']
          }
        ],
        updateStatusCheckProtection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        updateWebhook: ['PATCH /repos/{owner}/{repo}/hooks/{hook_id}'],
        updateWebhookConfigForRepo: [
          'PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config'
        ],
        uploadReleaseAsset: [
          'POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}',
          {
            baseUrl: 'https://uploads.github.com'
          }
        ]
      },
      search: {
        code: ['GET /search/code'],
        commits: ['GET /search/commits'],
        issuesAndPullRequests: ['GET /search/issues'],
        labels: ['GET /search/labels'],
        repos: ['GET /search/repositories'],
        topics: [
          'GET /search/topics',
          {
            mediaType: {
              previews: ['mercy']
            }
          }
        ],
        users: ['GET /search/users']
      },
      secretScanning: {
        getAlert: [
          'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'
        ],
        listAlertsForOrg: ['GET /orgs/{org}/secret-scanning/alerts'],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/secret-scanning/alerts'],
        updateAlert: [
          'PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'
        ]
      },
      teams: {
        addOrUpdateMembershipForUserInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        addOrUpdateProjectPermissionsInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        addOrUpdateRepoPermissionsInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        checkPermissionsForProjectInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        checkPermissionsForRepoInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        create: ['POST /orgs/{org}/teams'],
        createDiscussionCommentInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments'
        ],
        createDiscussionInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions'
        ],
        deleteDiscussionCommentInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        deleteDiscussionInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        deleteInOrg: ['DELETE /orgs/{org}/teams/{team_slug}'],
        getByName: ['GET /orgs/{org}/teams/{team_slug}'],
        getDiscussionCommentInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        getDiscussionInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        getMembershipForUserInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        list: ['GET /orgs/{org}/teams'],
        listChildInOrg: ['GET /orgs/{org}/teams/{team_slug}/teams'],
        listDiscussionCommentsInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments'
        ],
        listDiscussionsInOrg: ['GET /orgs/{org}/teams/{team_slug}/discussions'],
        listForAuthenticatedUser: ['GET /user/teams'],
        listMembersInOrg: ['GET /orgs/{org}/teams/{team_slug}/members'],
        listPendingInvitationsInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/invitations'
        ],
        listProjectsInOrg: ['GET /orgs/{org}/teams/{team_slug}/projects'],
        listReposInOrg: ['GET /orgs/{org}/teams/{team_slug}/repos'],
        removeMembershipForUserInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        removeProjectInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        removeRepoInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        updateDiscussionCommentInOrg: [
          'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        updateDiscussionInOrg: [
          'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        updateInOrg: ['PATCH /orgs/{org}/teams/{team_slug}']
      },
      users: {
        addEmailForAuthenticated: [
          'POST /user/emails',
          {},
          {
            renamed: ['users', 'addEmailForAuthenticatedUser']
          }
        ],
        addEmailForAuthenticatedUser: ['POST /user/emails'],
        block: ['PUT /user/blocks/{username}'],
        checkBlocked: ['GET /user/blocks/{username}'],
        checkFollowingForUser: [
          'GET /users/{username}/following/{target_user}'
        ],
        checkPersonIsFollowedByAuthenticated: [
          'GET /user/following/{username}'
        ],
        createGpgKeyForAuthenticated: [
          'POST /user/gpg_keys',
          {},
          {
            renamed: ['users', 'createGpgKeyForAuthenticatedUser']
          }
        ],
        createGpgKeyForAuthenticatedUser: ['POST /user/gpg_keys'],
        createPublicSshKeyForAuthenticated: [
          'POST /user/keys',
          {},
          {
            renamed: ['users', 'createPublicSshKeyForAuthenticatedUser']
          }
        ],
        createPublicSshKeyForAuthenticatedUser: ['POST /user/keys'],
        deleteEmailForAuthenticated: [
          'DELETE /user/emails',
          {},
          {
            renamed: ['users', 'deleteEmailForAuthenticatedUser']
          }
        ],
        deleteEmailForAuthenticatedUser: ['DELETE /user/emails'],
        deleteGpgKeyForAuthenticated: [
          'DELETE /user/gpg_keys/{gpg_key_id}',
          {},
          {
            renamed: ['users', 'deleteGpgKeyForAuthenticatedUser']
          }
        ],
        deleteGpgKeyForAuthenticatedUser: [
          'DELETE /user/gpg_keys/{gpg_key_id}'
        ],
        deletePublicSshKeyForAuthenticated: [
          'DELETE /user/keys/{key_id}',
          {},
          {
            renamed: ['users', 'deletePublicSshKeyForAuthenticatedUser']
          }
        ],
        deletePublicSshKeyForAuthenticatedUser: ['DELETE /user/keys/{key_id}'],
        follow: ['PUT /user/following/{username}'],
        getAuthenticated: ['GET /user'],
        getByUsername: ['GET /users/{username}'],
        getContextForUser: ['GET /users/{username}/hovercard'],
        getGpgKeyForAuthenticated: [
          'GET /user/gpg_keys/{gpg_key_id}',
          {},
          {
            renamed: ['users', 'getGpgKeyForAuthenticatedUser']
          }
        ],
        getGpgKeyForAuthenticatedUser: ['GET /user/gpg_keys/{gpg_key_id}'],
        getPublicSshKeyForAuthenticated: [
          'GET /user/keys/{key_id}',
          {},
          {
            renamed: ['users', 'getPublicSshKeyForAuthenticatedUser']
          }
        ],
        getPublicSshKeyForAuthenticatedUser: ['GET /user/keys/{key_id}'],
        list: ['GET /users'],
        listBlockedByAuthenticated: [
          'GET /user/blocks',
          {},
          {
            renamed: ['users', 'listBlockedByAuthenticatedUser']
          }
        ],
        listBlockedByAuthenticatedUser: ['GET /user/blocks'],
        listEmailsForAuthenticated: [
          'GET /user/emails',
          {},
          {
            renamed: ['users', 'listEmailsForAuthenticatedUser']
          }
        ],
        listEmailsForAuthenticatedUser: ['GET /user/emails'],
        listFollowedByAuthenticated: [
          'GET /user/following',
          {},
          {
            renamed: ['users', 'listFollowedByAuthenticatedUser']
          }
        ],
        listFollowedByAuthenticatedUser: ['GET /user/following'],
        listFollowersForAuthenticatedUser: ['GET /user/followers'],
        listFollowersForUser: ['GET /users/{username}/followers'],
        listFollowingForUser: ['GET /users/{username}/following'],
        listGpgKeysForAuthenticated: [
          'GET /user/gpg_keys',
          {},
          {
            renamed: ['users', 'listGpgKeysForAuthenticatedUser']
          }
        ],
        listGpgKeysForAuthenticatedUser: ['GET /user/gpg_keys'],
        listGpgKeysForUser: ['GET /users/{username}/gpg_keys'],
        listPublicEmailsForAuthenticated: [
          'GET /user/public_emails',
          {},
          {
            renamed: ['users', 'listPublicEmailsForAuthenticatedUser']
          }
        ],
        listPublicEmailsForAuthenticatedUser: ['GET /user/public_emails'],
        listPublicKeysForUser: ['GET /users/{username}/keys'],
        listPublicSshKeysForAuthenticated: [
          'GET /user/keys',
          {},
          {
            renamed: ['users', 'listPublicSshKeysForAuthenticatedUser']
          }
        ],
        listPublicSshKeysForAuthenticatedUser: ['GET /user/keys'],
        setPrimaryEmailVisibilityForAuthenticated: [
          'PATCH /user/email/visibility',
          {},
          {
            renamed: ['users', 'setPrimaryEmailVisibilityForAuthenticatedUser']
          }
        ],
        setPrimaryEmailVisibilityForAuthenticatedUser: [
          'PATCH /user/email/visibility'
        ],
        unblock: ['DELETE /user/blocks/{username}'],
        unfollow: ['DELETE /user/following/{username}'],
        updateAuthenticated: ['PATCH /user']
      }
    }

    const VERSION = '5.13.0'

    function endpointsToMethods(octokit, endpointsMap) {
      const newMethods = {}

      for (const [scope, endpoints] of Object.entries(endpointsMap)) {
        for (const [methodName, endpoint] of Object.entries(endpoints)) {
          const [route, defaults, decorations] = endpoint
          const [method, url] = route.split(/ /)
          const endpointDefaults = Object.assign(
            {
              method,
              url
            },
            defaults
          )

          if (!newMethods[scope]) {
            newMethods[scope] = {}
          }

          const scopeMethods = newMethods[scope]

          if (decorations) {
            scopeMethods[methodName] = decorate(
              octokit,
              scope,
              methodName,
              endpointDefaults,
              decorations
            )
            continue
          }

          scopeMethods[methodName] = octokit.request.defaults(endpointDefaults)
        }
      }

      return newMethods
    }

    function decorate(octokit, scope, methodName, defaults, decorations) {
      const requestWithDefaults = octokit.request.defaults(defaults)
      /* istanbul ignore next */

      function withDecorations(...args) {
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        let options = requestWithDefaults.endpoint.merge(...args) // There are currently no other decorations than `.mapToData`

        if (decorations.mapToData) {
          options = Object.assign({}, options, {
            data: options[decorations.mapToData],
            [decorations.mapToData]: undefined
          })
          return requestWithDefaults(options)
        }

        if (decorations.renamed) {
          const [newScope, newMethodName] = decorations.renamed
          octokit.log.warn(
            `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`
          )
        }

        if (decorations.deprecated) {
          octokit.log.warn(decorations.deprecated)
        }

        if (decorations.renamedParameters) {
          // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
          const options = requestWithDefaults.endpoint.merge(...args)

          for (const [name, alias] of Object.entries(
            decorations.renamedParameters
          )) {
            if (name in options) {
              octokit.log.warn(
                `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`
              )

              if (!(alias in options)) {
                options[alias] = options[name]
              }

              delete options[name]
            }
          }

          return requestWithDefaults(options)
        } // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488

        return requestWithDefaults(...args)
      }

      return Object.assign(withDecorations, requestWithDefaults)
    }

    function restEndpointMethods(octokit) {
      const api = endpointsToMethods(octokit, Endpoints)
      return {
        rest: api
      }
    }
    restEndpointMethods.VERSION = VERSION
    function legacyRestEndpointMethods(octokit) {
      const api = endpointsToMethods(octokit, Endpoints)
      return _objectSpread2(
        _objectSpread2({}, api),
        {},
        {
          rest: api
        }
      )
    }
    legacyRestEndpointMethods.VERSION = VERSION

    exports.legacyRestEndpointMethods = legacyRestEndpointMethods
    exports.restEndpointMethods = restEndpointMethods
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 537: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var deprecation = __nccwpck_require__(8932)
    var once = _interopDefault(__nccwpck_require__(1223))

    const logOnceCode = once((deprecation) => console.warn(deprecation))
    const logOnceHeaders = once((deprecation) => console.warn(deprecation))
    /**
     * Error with extra properties to help with debugging
     */

    class RequestError extends Error {
      constructor(message, statusCode, options) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'HttpError'
        this.status = statusCode
        let headers

        if ('headers' in options && typeof options.headers !== 'undefined') {
          headers = options.headers
        }

        if ('response' in options) {
          this.response = options.response
          headers = options.response.headers
        } // redact request credentials without mutating original request options

        const requestCopy = Object.assign({}, options.request)

        if (options.request.headers.authorization) {
          requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(
              / .*$/,
              ' [REDACTED]'
            )
          })
        }

        requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
          // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]') // OAuth tokens can be passed as URL query parameters, although it is not recommended
          // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = requestCopy // deprecations

        Object.defineProperty(this, 'code', {
          get() {
            logOnceCode(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return statusCode
          }
        })
        Object.defineProperty(this, 'headers', {
          get() {
            logOnceHeaders(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.'
              )
            )
            return headers || {}
          }
        })
      }
    }

    exports.RequestError = RequestError
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 6234: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var endpoint = __nccwpck_require__(9440)
    var universalUserAgent = __nccwpck_require__(5030)
    var isPlainObject = __nccwpck_require__(3287)
    var nodeFetch = _interopDefault(__nccwpck_require__(467))
    var requestError = __nccwpck_require__(537)

    const VERSION = '5.6.3'

    function getBufferResponse(response) {
      return response.arrayBuffer()
    }

    function fetchWrapper(requestOptions) {
      const log =
        requestOptions.request && requestOptions.request.log
          ? requestOptions.request.log
          : console

      if (
        isPlainObject.isPlainObject(requestOptions.body) ||
        Array.isArray(requestOptions.body)
      ) {
        requestOptions.body = JSON.stringify(requestOptions.body)
      }

      let headers = {}
      let status
      let url
      const fetch =
        (requestOptions.request && requestOptions.request.fetch) || nodeFetch
      return fetch(
        requestOptions.url,
        Object.assign(
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: requestOptions.headers,
            redirect: requestOptions.redirect
          }, // `requestOptions.request.agent` type is incompatible
          // see https://github.com/octokit/types.ts/pull/264
          requestOptions.request
        )
      )
        .then(async (response) => {
          url = response.url
          status = response.status

          for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1]
          }

          if ('deprecation' in headers) {
            const matches =
              headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/)
            const deprecationLink = matches && matches.pop()
            log.warn(
              `[@octokit/request] "${requestOptions.method} ${
                requestOptions.url
              }" is deprecated. It is scheduled to be removed on ${
                headers.sunset
              }${deprecationLink ? `. See ${deprecationLink}` : ''}`
            )
          }

          if (status === 204 || status === 205) {
            return
          } // GitHub API returns 200 for HEAD requests

          if (requestOptions.method === 'HEAD') {
            if (status < 400) {
              return
            }

            throw new requestError.RequestError(response.statusText, status, {
              response: {
                url,
                status,
                headers,
                data: undefined
              },
              request: requestOptions
            })
          }

          if (status === 304) {
            throw new requestError.RequestError('Not modified', status, {
              response: {
                url,
                status,
                headers,
                data: await getResponseData(response)
              },
              request: requestOptions
            })
          }

          if (status >= 400) {
            const data = await getResponseData(response)
            const error = new requestError.RequestError(
              toErrorMessage(data),
              status,
              {
                response: {
                  url,
                  status,
                  headers,
                  data
                },
                request: requestOptions
              }
            )
            throw error
          }

          return getResponseData(response)
        })
        .then((data) => {
          return {
            status,
            url,
            headers,
            data
          }
        })
        .catch((error) => {
          if (error instanceof requestError.RequestError) throw error
          throw new requestError.RequestError(error.message, 500, {
            request: requestOptions
          })
        })
    }

    async function getResponseData(response) {
      const contentType = response.headers.get('content-type')

      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBufferResponse(response)
    }

    function toErrorMessage(data) {
      if (typeof data === 'string') return data // istanbul ignore else - just in case

      if ('message' in data) {
        if (Array.isArray(data.errors)) {
          return `${data.message}: ${data.errors
            .map(JSON.stringify)
            .join(', ')}`
        }

        return data.message
      } // istanbul ignore next - just in case

      return `Unknown error: ${JSON.stringify(data)}`
    }

    function withDefaults(oldEndpoint, newDefaults) {
      const endpoint = oldEndpoint.defaults(newDefaults)

      const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters)

        if (!endpointOptions.request || !endpointOptions.request.hook) {
          return fetchWrapper(endpoint.parse(endpointOptions))
        }

        const request = (route, parameters) => {
          return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)))
        }

        Object.assign(request, {
          endpoint,
          defaults: withDefaults.bind(null, endpoint)
        })
        return endpointOptions.request.hook(request, endpointOptions)
      }

      return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
      })
    }

    const request = withDefaults(endpoint.endpoint, {
      headers: {
        'user-agent': `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      }
    })

    exports.request = request
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 5375: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    var __webpack_unused_export__

    __webpack_unused_export__ = { value: true }

    var core = __nccwpck_require__(4952)
    var pluginRequestLog = __nccwpck_require__(8883)
    var pluginPaginateRest = __nccwpck_require__(606)
    var pluginRestEndpointMethods = __nccwpck_require__(4923)

    const VERSION = '19.0.5'

    const Octokit = core.Octokit.plugin(
      pluginRequestLog.requestLog,
      pluginRestEndpointMethods.legacyRestEndpointMethods,
      pluginPaginateRest.paginateRest
    ).defaults({
      userAgent: `octokit-rest.js/${VERSION}`
    })

    exports.v = Octokit
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 7633: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    const REGEX_IS_INSTALLATION_LEGACY = /^v1\./
    const REGEX_IS_INSTALLATION = /^ghs_/
    const REGEX_IS_USER_TO_SERVER = /^ghu_/
    async function auth(token) {
      const isApp = token.split(/\./).length === 3
      const isInstallation =
        REGEX_IS_INSTALLATION_LEGACY.test(token) ||
        REGEX_IS_INSTALLATION.test(token)
      const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token)
      const tokenType = isApp
        ? 'app'
        : isInstallation
        ? 'installation'
        : isUserToServer
        ? 'user-to-server'
        : 'oauth'
      return {
        type: 'token',
        token: token,
        tokenType
      }
    }

    /**
     * Prefix token for usage in the Authorization header
     *
     * @param token OAuth token or JSON Web Token
     */
    function withAuthorizationPrefix(token) {
      if (token.split(/\./).length === 3) {
        return `bearer ${token}`
      }

      return `token ${token}`
    }

    async function hook(token, request, route, parameters) {
      const endpoint = request.endpoint.merge(route, parameters)
      endpoint.headers.authorization = withAuthorizationPrefix(token)
      return request(endpoint)
    }

    const createTokenAuth = function createTokenAuth(token) {
      if (!token) {
        throw new Error(
          '[@octokit/auth-token] No token passed to createTokenAuth'
        )
      }

      if (typeof token !== 'string') {
        throw new Error(
          '[@octokit/auth-token] Token passed to createTokenAuth is not a string'
        )
      }

      token = token.replace(/^(token|bearer) +/i, '')
      return Object.assign(auth.bind(null, token), {
        hook: hook.bind(null, token)
      })
    }

    exports.createTokenAuth = createTokenAuth
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 4952: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var universalUserAgent = __nccwpck_require__(5030)
    var beforeAfterHook = __nccwpck_require__(3682)
    var request = __nccwpck_require__(6206)
    var graphql = __nccwpck_require__(7461)
    var authToken = __nccwpck_require__(7633)

    const VERSION = '4.1.0'

    class Octokit {
      constructor(options = {}) {
        const hook = new beforeAfterHook.Collection()
        const requestDefaults = {
          baseUrl: request.request.endpoint.DEFAULTS.baseUrl,
          headers: {},
          request: Object.assign({}, options.request, {
            // @ts-ignore internal usage only, no need to type
            hook: hook.bind(null, 'request')
          }),
          mediaType: {
            previews: [],
            format: ''
          }
        } // prepend default user agent with `options.userAgent` if set

        requestDefaults.headers['user-agent'] = [
          options.userAgent,
          `octokit-core.js/${VERSION} ${universalUserAgent.getUserAgent()}`
        ]
          .filter(Boolean)
          .join(' ')

        if (options.baseUrl) {
          requestDefaults.baseUrl = options.baseUrl
        }

        if (options.previews) {
          requestDefaults.mediaType.previews = options.previews
        }

        if (options.timeZone) {
          requestDefaults.headers['time-zone'] = options.timeZone
        }

        this.request = request.request.defaults(requestDefaults)
        this.graphql = graphql
          .withCustomRequest(this.request)
          .defaults(requestDefaults)
        this.log = Object.assign(
          {
            debug: () => {},
            info: () => {},
            warn: console.warn.bind(console),
            error: console.error.bind(console)
          },
          options.log
        )
        this.hook = hook // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
        //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
        // (2) If only `options.auth` is set, use the default token authentication strategy.
        // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
        // TODO: type `options.auth` based on `options.authStrategy`.

        if (!options.authStrategy) {
          if (!options.auth) {
            // (1)
            this.auth = async () => ({
              type: 'unauthenticated'
            })
          } else {
            // (2)
            const auth = authToken.createTokenAuth(options.auth) // @ts-ignore  ¯\_(ツ)_/¯

            hook.wrap('request', auth.hook)
            this.auth = auth
          }
        } else {
          const { authStrategy, ...otherOptions } = options
          const auth = authStrategy(
            Object.assign(
              {
                request: this.request,
                log: this.log,
                // we pass the current octokit instance as well as its constructor options
                // to allow for authentication strategies that return a new octokit instance
                // that shares the same internal state as the current one. The original
                // requirement for this was the "event-octokit" authentication strategy
                // of https://github.com/probot/octokit-auth-probot.
                octokit: this,
                octokitOptions: otherOptions
              },
              options.auth
            )
          ) // @ts-ignore  ¯\_(ツ)_/¯

          hook.wrap('request', auth.hook)
          this.auth = auth
        } // apply plugins
        // https://stackoverflow.com/a/16345172

        const classConstructor = this.constructor
        classConstructor.plugins.forEach((plugin) => {
          Object.assign(this, plugin(this, options))
        })
      }

      static defaults(defaults) {
        const OctokitWithDefaults = class extends this {
          constructor(...args) {
            const options = args[0] || {}

            if (typeof defaults === 'function') {
              super(defaults(options))
              return
            }

            super(
              Object.assign(
                {},
                defaults,
                options,
                options.userAgent && defaults.userAgent
                  ? {
                      userAgent: `${options.userAgent} ${defaults.userAgent}`
                    }
                  : null
              )
            )
          }
        }
        return OctokitWithDefaults
      }
      /**
       * Attach a plugin (or many) to your Octokit instance.
       *
       * @example
       * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
       */

      static plugin(...newPlugins) {
        var _a

        const currentPlugins = this.plugins
        const NewOctokit =
          ((_a = class extends this {}),
          (_a.plugins = currentPlugins.concat(
            newPlugins.filter((plugin) => !currentPlugins.includes(plugin))
          )),
          _a)
        return NewOctokit
      }
    }
    Octokit.VERSION = VERSION
    Octokit.plugins = []

    exports.Octokit = Octokit
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 6065: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var isPlainObject = __nccwpck_require__(3287)
    var universalUserAgent = __nccwpck_require__(5030)

    function lowercaseKeys(object) {
      if (!object) {
        return {}
      }

      return Object.keys(object).reduce((newObj, key) => {
        newObj[key.toLowerCase()] = object[key]
        return newObj
      }, {})
    }

    function mergeDeep(defaults, options) {
      const result = Object.assign({}, defaults)
      Object.keys(options).forEach((key) => {
        if (isPlainObject.isPlainObject(options[key])) {
          if (!(key in defaults))
            Object.assign(result, {
              [key]: options[key]
            })
          else result[key] = mergeDeep(defaults[key], options[key])
        } else {
          Object.assign(result, {
            [key]: options[key]
          })
        }
      })
      return result
    }

    function removeUndefinedProperties(obj) {
      for (const key in obj) {
        if (obj[key] === undefined) {
          delete obj[key]
        }
      }

      return obj
    }

    function merge(defaults, route, options) {
      if (typeof route === 'string') {
        let [method, url] = route.split(' ')
        options = Object.assign(
          url
            ? {
                method,
                url
              }
            : {
                url: method
              },
          options
        )
      } else {
        options = Object.assign({}, route)
      } // lowercase header names before merging with defaults to avoid duplicates

      options.headers = lowercaseKeys(options.headers) // remove properties with undefined values before merging

      removeUndefinedProperties(options)
      removeUndefinedProperties(options.headers)
      const mergedOptions = mergeDeep(defaults || {}, options) // mediaType.previews arrays are merged, instead of overwritten

      if (defaults && defaults.mediaType.previews.length) {
        mergedOptions.mediaType.previews = defaults.mediaType.previews
          .filter(
            (preview) => !mergedOptions.mediaType.previews.includes(preview)
          )
          .concat(mergedOptions.mediaType.previews)
      }

      mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(
        (preview) => preview.replace(/-preview/, '')
      )
      return mergedOptions
    }

    function addQueryParameters(url, parameters) {
      const separator = /\?/.test(url) ? '&' : '?'
      const names = Object.keys(parameters)

      if (names.length === 0) {
        return url
      }

      return (
        url +
        separator +
        names
          .map((name) => {
            if (name === 'q') {
              return (
                'q=' + parameters.q.split('+').map(encodeURIComponent).join('+')
              )
            }

            return `${name}=${encodeURIComponent(parameters[name])}`
          })
          .join('&')
      )
    }

    const urlVariableRegex = /\{[^}]+\}/g

    function removeNonChars(variableName) {
      return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
    }

    function extractUrlVariableNames(url) {
      const matches = url.match(urlVariableRegex)

      if (!matches) {
        return []
      }

      return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
    }

    function omit(object, keysToOmit) {
      return Object.keys(object)
        .filter((option) => !keysToOmit.includes(option))
        .reduce((obj, key) => {
          obj[key] = object[key]
          return obj
        }, {})
    }

    // Based on https://github.com/bramstein/url-template, licensed under BSD
    // TODO: create separate package.
    //
    // Copyright (c) 2012-2014, Bram Stein
    // All rights reserved.
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //  1. Redistributions of source code must retain the above copyright
    //     notice, this list of conditions and the following disclaimer.
    //  2. Redistributions in binary form must reproduce the above copyright
    //     notice, this list of conditions and the following disclaimer in the
    //     documentation and/or other materials provided with the distribution.
    //  3. The name of the author may not be used to endorse or promote products
    //     derived from this software without specific prior written permission.
    // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
    // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
    // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
    // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
    // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
    // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
    // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    /* istanbul ignore file */
    function encodeReserved(str) {
      return str
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (part) {
          if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']')
          }

          return part
        })
        .join('')
    }

    function encodeUnreserved(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16).toUpperCase()
      })
    }

    function encodeValue(operator, value, key) {
      value =
        operator === '+' || operator === '#'
          ? encodeReserved(value)
          : encodeUnreserved(value)

      if (key) {
        return encodeUnreserved(key) + '=' + value
      } else {
        return value
      }
    }

    function isDefined(value) {
      return value !== undefined && value !== null
    }

    function isKeyOperator(operator) {
      return operator === ';' || operator === '&' || operator === '?'
    }

    function getValues(context, operator, key, modifier) {
      var value = context[key],
        result = []

      if (isDefined(value) && value !== '') {
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          value = value.toString()

          if (modifier && modifier !== '*') {
            value = value.substring(0, parseInt(modifier, 10))
          }

          result.push(
            encodeValue(operator, value, isKeyOperator(operator) ? key : '')
          )
        } else {
          if (modifier === '*') {
            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                result.push(
                  encodeValue(
                    operator,
                    value,
                    isKeyOperator(operator) ? key : ''
                  )
                )
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  result.push(encodeValue(operator, value[k], k))
                }
              })
            }
          } else {
            const tmp = []

            if (Array.isArray(value)) {
              value.filter(isDefined).forEach(function (value) {
                tmp.push(encodeValue(operator, value))
              })
            } else {
              Object.keys(value).forEach(function (k) {
                if (isDefined(value[k])) {
                  tmp.push(encodeUnreserved(k))
                  tmp.push(encodeValue(operator, value[k].toString()))
                }
              })
            }

            if (isKeyOperator(operator)) {
              result.push(encodeUnreserved(key) + '=' + tmp.join(','))
            } else if (tmp.length !== 0) {
              result.push(tmp.join(','))
            }
          }
        }
      } else {
        if (operator === ';') {
          if (isDefined(value)) {
            result.push(encodeUnreserved(key))
          }
        } else if (value === '' && (operator === '&' || operator === '?')) {
          result.push(encodeUnreserved(key) + '=')
        } else if (value === '') {
          result.push('')
        }
      }

      return result
    }

    function parseUrl(template) {
      return {
        expand: expand.bind(null, template)
      }
    }

    function expand(template, context) {
      var operators = ['+', '#', '.', '/', ';', '?', '&']
      return template.replace(
        /\{([^\{\}]+)\}|([^\{\}]+)/g,
        function (_, expression, literal) {
          if (expression) {
            let operator = ''
            const values = []

            if (operators.indexOf(expression.charAt(0)) !== -1) {
              operator = expression.charAt(0)
              expression = expression.substr(1)
            }

            expression.split(/,/g).forEach(function (variable) {
              var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
              values.push(
                getValues(context, operator, tmp[1], tmp[2] || tmp[3])
              )
            })

            if (operator && operator !== '+') {
              var separator = ','

              if (operator === '?') {
                separator = '&'
              } else if (operator !== '#') {
                separator = operator
              }

              return (
                (values.length !== 0 ? operator : '') + values.join(separator)
              )
            } else {
              return values.join(',')
            }
          } else {
            return encodeReserved(literal)
          }
        }
      )
    }

    function parse(options) {
      // https://fetch.spec.whatwg.org/#methods
      let method = options.method.toUpperCase() // replace :varname with {varname} to make it RFC 6570 compatible

      let url = (options.url || '/').replace(/:([a-z]\w+)/g, '{$1}')
      let headers = Object.assign({}, options.headers)
      let body
      let parameters = omit(options, [
        'method',
        'baseUrl',
        'url',
        'headers',
        'request',
        'mediaType'
      ]) // extract variable names from URL to calculate remaining variables later

      const urlVariableNames = extractUrlVariableNames(url)
      url = parseUrl(url).expand(parameters)

      if (!/^http/.test(url)) {
        url = options.baseUrl + url
      }

      const omittedParameters = Object.keys(options)
        .filter((option) => urlVariableNames.includes(option))
        .concat('baseUrl')
      const remainingParameters = omit(parameters, omittedParameters)
      const isBinaryRequest = /application\/octet-stream/i.test(headers.accept)

      if (!isBinaryRequest) {
        if (options.mediaType.format) {
          // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
          headers.accept = headers.accept
            .split(/,/)
            .map((preview) =>
              preview.replace(
                /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                `application/vnd$1$2.${options.mediaType.format}`
              )
            )
            .join(',')
        }

        if (options.mediaType.previews.length) {
          const previewsFromAcceptHeader =
            headers.accept.match(/[\w-]+(?=-preview)/g) || []
          headers.accept = previewsFromAcceptHeader
            .concat(options.mediaType.previews)
            .map((preview) => {
              const format = options.mediaType.format
                ? `.${options.mediaType.format}`
                : '+json'
              return `application/vnd.github.${preview}-preview${format}`
            })
            .join(',')
        }
      } // for GET/HEAD requests, set URL query parameters from remaining parameters
      // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters

      if (['GET', 'HEAD'].includes(method)) {
        url = addQueryParameters(url, remainingParameters)
      } else {
        if ('data' in remainingParameters) {
          body = remainingParameters.data
        } else {
          if (Object.keys(remainingParameters).length) {
            body = remainingParameters
          }
        }
      } // default content-type for JSON if body is set

      if (!headers['content-type'] && typeof body !== 'undefined') {
        headers['content-type'] = 'application/json; charset=utf-8'
      } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
      // fetch does not allow to set `content-length` header, but we can set body to an empty string

      if (['PATCH', 'PUT'].includes(method) && typeof body === 'undefined') {
        body = ''
      } // Only return body/request keys if present

      return Object.assign(
        {
          method,
          url,
          headers
        },
        typeof body !== 'undefined'
          ? {
              body
            }
          : null,
        options.request
          ? {
              request: options.request
            }
          : null
      )
    }

    function endpointWithDefaults(defaults, route, options) {
      return parse(merge(defaults, route, options))
    }

    function withDefaults(oldDefaults, newDefaults) {
      const DEFAULTS = merge(oldDefaults, newDefaults)
      const endpoint = endpointWithDefaults.bind(null, DEFAULTS)
      return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
      })
    }

    const VERSION = '7.0.3'

    const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}` // DEFAULTS has all properties set that EndpointOptions has, except url.
    // So we use RequestParameters and add method as additional required property.

    const DEFAULTS = {
      method: 'GET',
      baseUrl: 'https://api.github.com',
      headers: {
        accept: 'application/vnd.github.v3+json',
        'user-agent': userAgent
      },
      mediaType: {
        format: '',
        previews: []
      }
    }

    const endpoint = withDefaults(null, DEFAULTS)

    exports.endpoint = endpoint
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 7461: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    var request = __nccwpck_require__(6206)
    var universalUserAgent = __nccwpck_require__(5030)

    const VERSION = '5.0.4'

    function _buildMessageForResponseErrors(data) {
      return (
        `Request failed due to following response errors:\n` +
        data.errors.map((e) => ` - ${e.message}`).join('\n')
      )
    }
    class GraphqlResponseError extends Error {
      constructor(request, headers, response) {
        super(_buildMessageForResponseErrors(response))
        this.request = request
        this.headers = headers
        this.response = response
        this.name = 'GraphqlResponseError'
        // Expose the errors and response data in their shorthand properties.
        this.errors = response.errors
        this.data = response.data
        // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }
      }
    }

    const NON_VARIABLE_OPTIONS = [
      'method',
      'baseUrl',
      'url',
      'headers',
      'request',
      'query',
      'mediaType'
    ]
    const FORBIDDEN_VARIABLE_OPTIONS = ['query', 'method', 'url']
    const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/
    function graphql(request, query, options) {
      if (options) {
        if (typeof query === 'string' && 'query' in options) {
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "query" cannot be used as variable name`
            )
          )
        }
        for (const key in options) {
          if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "${key}" cannot be used as variable name`
            )
          )
        }
      }
      const parsedOptions =
        typeof query === 'string'
          ? Object.assign(
              {
                query
              },
              options
            )
          : query
      const requestOptions = Object.keys(parsedOptions).reduce(
        (result, key) => {
          if (NON_VARIABLE_OPTIONS.includes(key)) {
            result[key] = parsedOptions[key]
            return result
          }
          if (!result.variables) {
            result.variables = {}
          }
          result.variables[key] = parsedOptions[key]
          return result
        },
        {}
      )
      // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
      // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451
      const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl
      if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
        requestOptions.url = baseUrl.replace(
          GHES_V3_SUFFIX_REGEX,
          '/api/graphql'
        )
      }
      return request(requestOptions).then((response) => {
        if (response.data.errors) {
          const headers = {}
          for (const key of Object.keys(response.headers)) {
            headers[key] = response.headers[key]
          }
          throw new GraphqlResponseError(requestOptions, headers, response.data)
        }
        return response.data.data
      })
    }

    function withDefaults(request, newDefaults) {
      const newRequest = request.defaults(newDefaults)
      const newApi = (query, options) => {
        return graphql(newRequest, query, options)
      }
      return Object.assign(newApi, {
        defaults: withDefaults.bind(null, newRequest),
        endpoint: newRequest.endpoint
      })
    }

    const graphql$1 = withDefaults(request.request, {
      headers: {
        'user-agent': `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      },
      method: 'POST',
      url: '/graphql'
    })
    function withCustomRequest(customRequest) {
      return withDefaults(customRequest, {
        method: 'POST',
        url: '/graphql'
      })
    }

    exports.GraphqlResponseError = GraphqlResponseError
    exports.graphql = graphql$1
    exports.withCustomRequest = withCustomRequest
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 606: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    const VERSION = '5.0.1'

    /**
     * Some “list” response that can be paginated have a different response structure
     *
     * They have a `total_count` key in the response (search also has `incomplete_results`,
     * /installation/repositories also has `repository_selection`), as well as a key with
     * the list of the items which name varies from endpoint to endpoint.
     *
     * Octokit normalizes these responses so that paginated results are always returned following
     * the same structure. One challenge is that if the list response has only one page, no Link
     * header is provided, so this header alone is not sufficient to check wether a response is
     * paginated or not.
     *
     * We check if a "total_count" key is present in the response data, but also make sure that
     * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
     * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
     */
    function normalizePaginatedListResponse(response) {
      // endpoints can respond with 204 if repository is empty
      if (!response.data) {
        return {
          ...response,
          data: []
        }
      }
      const responseNeedsNormalization =
        'total_count' in response.data && !('url' in response.data)
      if (!responseNeedsNormalization) return response
      // keep the additional properties intact as there is currently no other way
      // to retrieve the same information.
      const incompleteResults = response.data.incomplete_results
      const repositorySelection = response.data.repository_selection
      const totalCount = response.data.total_count
      delete response.data.incomplete_results
      delete response.data.repository_selection
      delete response.data.total_count
      const namespaceKey = Object.keys(response.data)[0]
      const data = response.data[namespaceKey]
      response.data = data
      if (typeof incompleteResults !== 'undefined') {
        response.data.incomplete_results = incompleteResults
      }
      if (typeof repositorySelection !== 'undefined') {
        response.data.repository_selection = repositorySelection
      }
      response.data.total_count = totalCount
      return response
    }

    function iterator(octokit, route, parameters) {
      const options =
        typeof route === 'function'
          ? route.endpoint(parameters)
          : octokit.request.endpoint(route, parameters)
      const requestMethod =
        typeof route === 'function' ? route : octokit.request
      const method = options.method
      const headers = options.headers
      let url = options.url
      return {
        [Symbol.asyncIterator]: () => ({
          async next() {
            if (!url)
              return {
                done: true
              }
            try {
              const response = await requestMethod({
                method,
                url,
                headers
              })
              const normalizedResponse =
                normalizePaginatedListResponse(response)
              // `response.headers.link` format:
              // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
              // sets `url` to undefined if "next" URL is not present or `link` header is not set
              url = ((normalizedResponse.headers.link || '').match(
                /<([^>]+)>;\s*rel="next"/
              ) || [])[1]
              return {
                value: normalizedResponse
              }
            } catch (error) {
              if (error.status !== 409) throw error
              url = ''
              return {
                value: {
                  status: 200,
                  headers: {},
                  data: []
                }
              }
            }
          }
        })
      }
    }

    function paginate(octokit, route, parameters, mapFn) {
      if (typeof parameters === 'function') {
        mapFn = parameters
        parameters = undefined
      }
      return gather(
        octokit,
        [],
        iterator(octokit, route, parameters)[Symbol.asyncIterator](),
        mapFn
      )
    }
    function gather(octokit, results, iterator, mapFn) {
      return iterator.next().then((result) => {
        if (result.done) {
          return results
        }
        let earlyExit = false
        function done() {
          earlyExit = true
        }
        results = results.concat(
          mapFn ? mapFn(result.value, done) : result.value.data
        )
        if (earlyExit) {
          return results
        }
        return gather(octokit, results, iterator, mapFn)
      })
    }

    const composePaginateRest = Object.assign(paginate, {
      iterator
    })

    const paginatingEndpoints = [
      'GET /app/hook/deliveries',
      'GET /app/installations',
      'GET /enterprises/{enterprise}/actions/permissions/organizations',
      'GET /enterprises/{enterprise}/actions/runner-groups',
      'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations',
      'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners',
      'GET /enterprises/{enterprise}/actions/runners',
      'GET /enterprises/{enterprise}/code-scanning/alerts',
      'GET /enterprises/{enterprise}/secret-scanning/alerts',
      'GET /enterprises/{enterprise}/settings/billing/advanced-security',
      'GET /events',
      'GET /gists',
      'GET /gists/public',
      'GET /gists/starred',
      'GET /gists/{gist_id}/comments',
      'GET /gists/{gist_id}/commits',
      'GET /gists/{gist_id}/forks',
      'GET /installation/repositories',
      'GET /issues',
      'GET /licenses',
      'GET /marketplace_listing/plans',
      'GET /marketplace_listing/plans/{plan_id}/accounts',
      'GET /marketplace_listing/stubbed/plans',
      'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts',
      'GET /networks/{owner}/{repo}/events',
      'GET /notifications',
      'GET /organizations',
      'GET /organizations/{org}/codespaces/secrets',
      'GET /organizations/{org}/codespaces/secrets/{secret_name}/repositories',
      'GET /orgs/{org}/actions/cache/usage-by-repository',
      'GET /orgs/{org}/actions/permissions/repositories',
      'GET /orgs/{org}/actions/runner-groups',
      'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories',
      'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners',
      'GET /orgs/{org}/actions/runners',
      'GET /orgs/{org}/actions/secrets',
      'GET /orgs/{org}/actions/secrets/{secret_name}/repositories',
      'GET /orgs/{org}/blocks',
      'GET /orgs/{org}/code-scanning/alerts',
      'GET /orgs/{org}/codespaces',
      'GET /orgs/{org}/dependabot/secrets',
      'GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories',
      'GET /orgs/{org}/events',
      'GET /orgs/{org}/failed_invitations',
      'GET /orgs/{org}/hooks',
      'GET /orgs/{org}/hooks/{hook_id}/deliveries',
      'GET /orgs/{org}/installations',
      'GET /orgs/{org}/invitations',
      'GET /orgs/{org}/invitations/{invitation_id}/teams',
      'GET /orgs/{org}/issues',
      'GET /orgs/{org}/members',
      'GET /orgs/{org}/migrations',
      'GET /orgs/{org}/migrations/{migration_id}/repositories',
      'GET /orgs/{org}/outside_collaborators',
      'GET /orgs/{org}/packages',
      'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
      'GET /orgs/{org}/projects',
      'GET /orgs/{org}/public_members',
      'GET /orgs/{org}/repos',
      'GET /orgs/{org}/secret-scanning/alerts',
      'GET /orgs/{org}/settings/billing/advanced-security',
      'GET /orgs/{org}/teams',
      'GET /orgs/{org}/teams/{team_slug}/discussions',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
      'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
      'GET /orgs/{org}/teams/{team_slug}/invitations',
      'GET /orgs/{org}/teams/{team_slug}/members',
      'GET /orgs/{org}/teams/{team_slug}/projects',
      'GET /orgs/{org}/teams/{team_slug}/repos',
      'GET /orgs/{org}/teams/{team_slug}/teams',
      'GET /projects/columns/{column_id}/cards',
      'GET /projects/{project_id}/collaborators',
      'GET /projects/{project_id}/columns',
      'GET /repos/{owner}/{repo}/actions/artifacts',
      'GET /repos/{owner}/{repo}/actions/caches',
      'GET /repos/{owner}/{repo}/actions/runners',
      'GET /repos/{owner}/{repo}/actions/runs',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs',
      'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs',
      'GET /repos/{owner}/{repo}/actions/secrets',
      'GET /repos/{owner}/{repo}/actions/workflows',
      'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
      'GET /repos/{owner}/{repo}/assignees',
      'GET /repos/{owner}/{repo}/branches',
      'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations',
      'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs',
      'GET /repos/{owner}/{repo}/code-scanning/alerts',
      'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
      'GET /repos/{owner}/{repo}/code-scanning/analyses',
      'GET /repos/{owner}/{repo}/codespaces',
      'GET /repos/{owner}/{repo}/codespaces/devcontainers',
      'GET /repos/{owner}/{repo}/codespaces/secrets',
      'GET /repos/{owner}/{repo}/collaborators',
      'GET /repos/{owner}/{repo}/comments',
      'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/commits',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments',
      'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls',
      'GET /repos/{owner}/{repo}/commits/{ref}/check-runs',
      'GET /repos/{owner}/{repo}/commits/{ref}/check-suites',
      'GET /repos/{owner}/{repo}/commits/{ref}/status',
      'GET /repos/{owner}/{repo}/commits/{ref}/statuses',
      'GET /repos/{owner}/{repo}/contributors',
      'GET /repos/{owner}/{repo}/dependabot/alerts',
      'GET /repos/{owner}/{repo}/dependabot/secrets',
      'GET /repos/{owner}/{repo}/deployments',
      'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
      'GET /repos/{owner}/{repo}/environments',
      'GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies',
      'GET /repos/{owner}/{repo}/events',
      'GET /repos/{owner}/{repo}/forks',
      'GET /repos/{owner}/{repo}/hooks',
      'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries',
      'GET /repos/{owner}/{repo}/invitations',
      'GET /repos/{owner}/{repo}/issues',
      'GET /repos/{owner}/{repo}/issues/comments',
      'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/issues/events',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/comments',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/events',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/labels',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions',
      'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline',
      'GET /repos/{owner}/{repo}/keys',
      'GET /repos/{owner}/{repo}/labels',
      'GET /repos/{owner}/{repo}/milestones',
      'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels',
      'GET /repos/{owner}/{repo}/notifications',
      'GET /repos/{owner}/{repo}/pages/builds',
      'GET /repos/{owner}/{repo}/projects',
      'GET /repos/{owner}/{repo}/pulls',
      'GET /repos/{owner}/{repo}/pulls/comments',
      'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/commits',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/files',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews',
      'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments',
      'GET /repos/{owner}/{repo}/releases',
      'GET /repos/{owner}/{repo}/releases/{release_id}/assets',
      'GET /repos/{owner}/{repo}/releases/{release_id}/reactions',
      'GET /repos/{owner}/{repo}/secret-scanning/alerts',
      'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations',
      'GET /repos/{owner}/{repo}/stargazers',
      'GET /repos/{owner}/{repo}/subscribers',
      'GET /repos/{owner}/{repo}/tags',
      'GET /repos/{owner}/{repo}/teams',
      'GET /repos/{owner}/{repo}/topics',
      'GET /repositories',
      'GET /repositories/{repository_id}/environments/{environment_name}/secrets',
      'GET /search/code',
      'GET /search/commits',
      'GET /search/issues',
      'GET /search/labels',
      'GET /search/repositories',
      'GET /search/topics',
      'GET /search/users',
      'GET /teams/{team_id}/discussions',
      'GET /teams/{team_id}/discussions/{discussion_number}/comments',
      'GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions',
      'GET /teams/{team_id}/discussions/{discussion_number}/reactions',
      'GET /teams/{team_id}/invitations',
      'GET /teams/{team_id}/members',
      'GET /teams/{team_id}/projects',
      'GET /teams/{team_id}/repos',
      'GET /teams/{team_id}/teams',
      'GET /user/blocks',
      'GET /user/codespaces',
      'GET /user/codespaces/secrets',
      'GET /user/emails',
      'GET /user/followers',
      'GET /user/following',
      'GET /user/gpg_keys',
      'GET /user/installations',
      'GET /user/installations/{installation_id}/repositories',
      'GET /user/issues',
      'GET /user/keys',
      'GET /user/marketplace_purchases',
      'GET /user/marketplace_purchases/stubbed',
      'GET /user/memberships/orgs',
      'GET /user/migrations',
      'GET /user/migrations/{migration_id}/repositories',
      'GET /user/orgs',
      'GET /user/packages',
      'GET /user/packages/{package_type}/{package_name}/versions',
      'GET /user/public_emails',
      'GET /user/repos',
      'GET /user/repository_invitations',
      'GET /user/ssh_signing_keys',
      'GET /user/starred',
      'GET /user/subscriptions',
      'GET /user/teams',
      'GET /users',
      'GET /users/{username}/events',
      'GET /users/{username}/events/orgs/{org}',
      'GET /users/{username}/events/public',
      'GET /users/{username}/followers',
      'GET /users/{username}/following',
      'GET /users/{username}/gists',
      'GET /users/{username}/gpg_keys',
      'GET /users/{username}/keys',
      'GET /users/{username}/orgs',
      'GET /users/{username}/packages',
      'GET /users/{username}/projects',
      'GET /users/{username}/received_events',
      'GET /users/{username}/received_events/public',
      'GET /users/{username}/repos',
      'GET /users/{username}/ssh_signing_keys',
      'GET /users/{username}/starred',
      'GET /users/{username}/subscriptions'
    ]

    function isPaginatingEndpoint(arg) {
      if (typeof arg === 'string') {
        return paginatingEndpoints.includes(arg)
      } else {
        return false
      }
    }

    /**
     * @param octokit Octokit instance
     * @param options Options passed to Octokit constructor
     */
    function paginateRest(octokit) {
      return {
        paginate: Object.assign(paginate.bind(null, octokit), {
          iterator: iterator.bind(null, octokit)
        })
      }
    }
    paginateRest.VERSION = VERSION

    exports.composePaginateRest = composePaginateRest
    exports.isPaginatingEndpoint = isPaginatingEndpoint
    exports.paginateRest = paginateRest
    exports.paginatingEndpoints = paginatingEndpoints
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 4923: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    const Endpoints = {
      actions: {
        addCustomLabelsToSelfHostedRunnerForOrg: [
          'POST /orgs/{org}/actions/runners/{runner_id}/labels'
        ],
        addCustomLabelsToSelfHostedRunnerForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels'
        ],
        addSelectedRepoToOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}'
        ],
        approveWorkflowRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve'
        ],
        cancelWorkflowRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel'
        ],
        createOrUpdateEnvironmentSecret: [
          'PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        createOrUpdateOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}'
        ],
        createOrUpdateRepoSecret: [
          'PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        createRegistrationTokenForOrg: [
          'POST /orgs/{org}/actions/runners/registration-token'
        ],
        createRegistrationTokenForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/registration-token'
        ],
        createRemoveTokenForOrg: [
          'POST /orgs/{org}/actions/runners/remove-token'
        ],
        createRemoveTokenForRepo: [
          'POST /repos/{owner}/{repo}/actions/runners/remove-token'
        ],
        createWorkflowDispatch: [
          'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches'
        ],
        deleteActionsCacheById: [
          'DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}'
        ],
        deleteActionsCacheByKey: [
          'DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}'
        ],
        deleteArtifact: [
          'DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'
        ],
        deleteEnvironmentSecret: [
          'DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        deleteOrgSecret: ['DELETE /orgs/{org}/actions/secrets/{secret_name}'],
        deleteRepoSecret: [
          'DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        deleteSelfHostedRunnerFromOrg: [
          'DELETE /orgs/{org}/actions/runners/{runner_id}'
        ],
        deleteSelfHostedRunnerFromRepo: [
          'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}'
        ],
        deleteWorkflowRun: [
          'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}'
        ],
        deleteWorkflowRunLogs: [
          'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs'
        ],
        disableSelectedRepositoryGithubActionsOrganization: [
          'DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}'
        ],
        disableWorkflow: [
          'PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable'
        ],
        downloadArtifact: [
          'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}'
        ],
        downloadJobLogsForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs'
        ],
        downloadWorkflowRunAttemptLogs: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs'
        ],
        downloadWorkflowRunLogs: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs'
        ],
        enableSelectedRepositoryGithubActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/repositories/{repository_id}'
        ],
        enableWorkflow: [
          'PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable'
        ],
        getActionsCacheList: ['GET /repos/{owner}/{repo}/actions/caches'],
        getActionsCacheUsage: ['GET /repos/{owner}/{repo}/actions/cache/usage'],
        getActionsCacheUsageByRepoForOrg: [
          'GET /orgs/{org}/actions/cache/usage-by-repository'
        ],
        getActionsCacheUsageForEnterprise: [
          'GET /enterprises/{enterprise}/actions/cache/usage'
        ],
        getActionsCacheUsageForOrg: ['GET /orgs/{org}/actions/cache/usage'],
        getAllowedActionsOrganization: [
          'GET /orgs/{org}/actions/permissions/selected-actions'
        ],
        getAllowedActionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions/selected-actions'
        ],
        getArtifact: [
          'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'
        ],
        getEnvironmentPublicKey: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key'
        ],
        getEnvironmentSecret: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
        ],
        getGithubActionsDefaultWorkflowPermissionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/workflow'
        ],
        getGithubActionsDefaultWorkflowPermissionsOrganization: [
          'GET /orgs/{org}/actions/permissions/workflow'
        ],
        getGithubActionsDefaultWorkflowPermissionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions/workflow'
        ],
        getGithubActionsPermissionsOrganization: [
          'GET /orgs/{org}/actions/permissions'
        ],
        getGithubActionsPermissionsRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions'
        ],
        getJobForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/jobs/{job_id}'
        ],
        getOrgPublicKey: ['GET /orgs/{org}/actions/secrets/public-key'],
        getOrgSecret: ['GET /orgs/{org}/actions/secrets/{secret_name}'],
        getPendingDeploymentsForRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments'
        ],
        getRepoPermissions: [
          'GET /repos/{owner}/{repo}/actions/permissions',
          {},
          {
            renamed: ['actions', 'getGithubActionsPermissionsRepository']
          }
        ],
        getRepoPublicKey: [
          'GET /repos/{owner}/{repo}/actions/secrets/public-key'
        ],
        getRepoSecret: [
          'GET /repos/{owner}/{repo}/actions/secrets/{secret_name}'
        ],
        getReviewsForRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals'
        ],
        getSelfHostedRunnerForOrg: [
          'GET /orgs/{org}/actions/runners/{runner_id}'
        ],
        getSelfHostedRunnerForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners/{runner_id}'
        ],
        getWorkflow: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}'
        ],
        getWorkflowAccessToRepository: [
          'GET /repos/{owner}/{repo}/actions/permissions/access'
        ],
        getWorkflowRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}'],
        getWorkflowRunAttempt: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}'
        ],
        getWorkflowRunUsage: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing'
        ],
        getWorkflowUsage: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing'
        ],
        listArtifactsForRepo: ['GET /repos/{owner}/{repo}/actions/artifacts'],
        listEnvironmentSecrets: [
          'GET /repositories/{repository_id}/environments/{environment_name}/secrets'
        ],
        listJobsForWorkflowRun: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs'
        ],
        listJobsForWorkflowRunAttempt: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs'
        ],
        listLabelsForSelfHostedRunnerForOrg: [
          'GET /orgs/{org}/actions/runners/{runner_id}/labels'
        ],
        listLabelsForSelfHostedRunnerForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels'
        ],
        listOrgSecrets: ['GET /orgs/{org}/actions/secrets'],
        listRepoSecrets: ['GET /repos/{owner}/{repo}/actions/secrets'],
        listRepoWorkflows: ['GET /repos/{owner}/{repo}/actions/workflows'],
        listRunnerApplicationsForOrg: [
          'GET /orgs/{org}/actions/runners/downloads'
        ],
        listRunnerApplicationsForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners/downloads'
        ],
        listSelectedReposForOrgSecret: [
          'GET /orgs/{org}/actions/secrets/{secret_name}/repositories'
        ],
        listSelectedRepositoriesEnabledGithubActionsOrganization: [
          'GET /orgs/{org}/actions/permissions/repositories'
        ],
        listSelfHostedRunnersForOrg: ['GET /orgs/{org}/actions/runners'],
        listSelfHostedRunnersForRepo: [
          'GET /repos/{owner}/{repo}/actions/runners'
        ],
        listWorkflowRunArtifacts: [
          'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts'
        ],
        listWorkflowRuns: [
          'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs'
        ],
        listWorkflowRunsForRepo: ['GET /repos/{owner}/{repo}/actions/runs'],
        reRunJobForWorkflowRun: [
          'POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun'
        ],
        reRunWorkflow: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun'
        ],
        reRunWorkflowFailedJobs: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs'
        ],
        removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
          'DELETE /orgs/{org}/actions/runners/{runner_id}/labels'
        ],
        removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
          'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels'
        ],
        removeCustomLabelFromSelfHostedRunnerForOrg: [
          'DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}'
        ],
        removeCustomLabelFromSelfHostedRunnerForRepo: [
          'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}'
        ],
        removeSelectedRepoFromOrgSecret: [
          'DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}'
        ],
        reviewPendingDeploymentsForRun: [
          'POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments'
        ],
        setAllowedActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/selected-actions'
        ],
        setAllowedActionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions/selected-actions'
        ],
        setCustomLabelsForSelfHostedRunnerForOrg: [
          'PUT /orgs/{org}/actions/runners/{runner_id}/labels'
        ],
        setCustomLabelsForSelfHostedRunnerForRepo: [
          'PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels'
        ],
        setGithubActionsDefaultWorkflowPermissionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/workflow'
        ],
        setGithubActionsDefaultWorkflowPermissionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/workflow'
        ],
        setGithubActionsDefaultWorkflowPermissionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions/workflow'
        ],
        setGithubActionsPermissionsOrganization: [
          'PUT /orgs/{org}/actions/permissions'
        ],
        setGithubActionsPermissionsRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions'
        ],
        setSelectedReposForOrgSecret: [
          'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories'
        ],
        setSelectedRepositoriesEnabledGithubActionsOrganization: [
          'PUT /orgs/{org}/actions/permissions/repositories'
        ],
        setWorkflowAccessToRepository: [
          'PUT /repos/{owner}/{repo}/actions/permissions/access'
        ]
      },
      activity: {
        checkRepoIsStarredByAuthenticatedUser: [
          'GET /user/starred/{owner}/{repo}'
        ],
        deleteRepoSubscription: ['DELETE /repos/{owner}/{repo}/subscription'],
        deleteThreadSubscription: [
          'DELETE /notifications/threads/{thread_id}/subscription'
        ],
        getFeeds: ['GET /feeds'],
        getRepoSubscription: ['GET /repos/{owner}/{repo}/subscription'],
        getThread: ['GET /notifications/threads/{thread_id}'],
        getThreadSubscriptionForAuthenticatedUser: [
          'GET /notifications/threads/{thread_id}/subscription'
        ],
        listEventsForAuthenticatedUser: ['GET /users/{username}/events'],
        listNotificationsForAuthenticatedUser: ['GET /notifications'],
        listOrgEventsForAuthenticatedUser: [
          'GET /users/{username}/events/orgs/{org}'
        ],
        listPublicEvents: ['GET /events'],
        listPublicEventsForRepoNetwork: ['GET /networks/{owner}/{repo}/events'],
        listPublicEventsForUser: ['GET /users/{username}/events/public'],
        listPublicOrgEvents: ['GET /orgs/{org}/events'],
        listReceivedEventsForUser: ['GET /users/{username}/received_events'],
        listReceivedPublicEventsForUser: [
          'GET /users/{username}/received_events/public'
        ],
        listRepoEvents: ['GET /repos/{owner}/{repo}/events'],
        listRepoNotificationsForAuthenticatedUser: [
          'GET /repos/{owner}/{repo}/notifications'
        ],
        listReposStarredByAuthenticatedUser: ['GET /user/starred'],
        listReposStarredByUser: ['GET /users/{username}/starred'],
        listReposWatchedByUser: ['GET /users/{username}/subscriptions'],
        listStargazersForRepo: ['GET /repos/{owner}/{repo}/stargazers'],
        listWatchedReposForAuthenticatedUser: ['GET /user/subscriptions'],
        listWatchersForRepo: ['GET /repos/{owner}/{repo}/subscribers'],
        markNotificationsAsRead: ['PUT /notifications'],
        markRepoNotificationsAsRead: [
          'PUT /repos/{owner}/{repo}/notifications'
        ],
        markThreadAsRead: ['PATCH /notifications/threads/{thread_id}'],
        setRepoSubscription: ['PUT /repos/{owner}/{repo}/subscription'],
        setThreadSubscription: [
          'PUT /notifications/threads/{thread_id}/subscription'
        ],
        starRepoForAuthenticatedUser: ['PUT /user/starred/{owner}/{repo}'],
        unstarRepoForAuthenticatedUser: ['DELETE /user/starred/{owner}/{repo}']
      },
      apps: {
        addRepoToInstallation: [
          'PUT /user/installations/{installation_id}/repositories/{repository_id}',
          {},
          {
            renamed: ['apps', 'addRepoToInstallationForAuthenticatedUser']
          }
        ],
        addRepoToInstallationForAuthenticatedUser: [
          'PUT /user/installations/{installation_id}/repositories/{repository_id}'
        ],
        checkToken: ['POST /applications/{client_id}/token'],
        createFromManifest: ['POST /app-manifests/{code}/conversions'],
        createInstallationAccessToken: [
          'POST /app/installations/{installation_id}/access_tokens'
        ],
        deleteAuthorization: ['DELETE /applications/{client_id}/grant'],
        deleteInstallation: ['DELETE /app/installations/{installation_id}'],
        deleteToken: ['DELETE /applications/{client_id}/token'],
        getAuthenticated: ['GET /app'],
        getBySlug: ['GET /apps/{app_slug}'],
        getInstallation: ['GET /app/installations/{installation_id}'],
        getOrgInstallation: ['GET /orgs/{org}/installation'],
        getRepoInstallation: ['GET /repos/{owner}/{repo}/installation'],
        getSubscriptionPlanForAccount: [
          'GET /marketplace_listing/accounts/{account_id}'
        ],
        getSubscriptionPlanForAccountStubbed: [
          'GET /marketplace_listing/stubbed/accounts/{account_id}'
        ],
        getUserInstallation: ['GET /users/{username}/installation'],
        getWebhookConfigForApp: ['GET /app/hook/config'],
        getWebhookDelivery: ['GET /app/hook/deliveries/{delivery_id}'],
        listAccountsForPlan: [
          'GET /marketplace_listing/plans/{plan_id}/accounts'
        ],
        listAccountsForPlanStubbed: [
          'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts'
        ],
        listInstallationReposForAuthenticatedUser: [
          'GET /user/installations/{installation_id}/repositories'
        ],
        listInstallations: ['GET /app/installations'],
        listInstallationsForAuthenticatedUser: ['GET /user/installations'],
        listPlans: ['GET /marketplace_listing/plans'],
        listPlansStubbed: ['GET /marketplace_listing/stubbed/plans'],
        listReposAccessibleToInstallation: ['GET /installation/repositories'],
        listSubscriptionsForAuthenticatedUser: [
          'GET /user/marketplace_purchases'
        ],
        listSubscriptionsForAuthenticatedUserStubbed: [
          'GET /user/marketplace_purchases/stubbed'
        ],
        listWebhookDeliveries: ['GET /app/hook/deliveries'],
        redeliverWebhookDelivery: [
          'POST /app/hook/deliveries/{delivery_id}/attempts'
        ],
        removeRepoFromInstallation: [
          'DELETE /user/installations/{installation_id}/repositories/{repository_id}',
          {},
          {
            renamed: ['apps', 'removeRepoFromInstallationForAuthenticatedUser']
          }
        ],
        removeRepoFromInstallationForAuthenticatedUser: [
          'DELETE /user/installations/{installation_id}/repositories/{repository_id}'
        ],
        resetToken: ['PATCH /applications/{client_id}/token'],
        revokeInstallationAccessToken: ['DELETE /installation/token'],
        scopeToken: ['POST /applications/{client_id}/token/scoped'],
        suspendInstallation: [
          'PUT /app/installations/{installation_id}/suspended'
        ],
        unsuspendInstallation: [
          'DELETE /app/installations/{installation_id}/suspended'
        ],
        updateWebhookConfigForApp: ['PATCH /app/hook/config']
      },
      billing: {
        getGithubActionsBillingOrg: [
          'GET /orgs/{org}/settings/billing/actions'
        ],
        getGithubActionsBillingUser: [
          'GET /users/{username}/settings/billing/actions'
        ],
        getGithubAdvancedSecurityBillingGhe: [
          'GET /enterprises/{enterprise}/settings/billing/advanced-security'
        ],
        getGithubAdvancedSecurityBillingOrg: [
          'GET /orgs/{org}/settings/billing/advanced-security'
        ],
        getGithubPackagesBillingOrg: [
          'GET /orgs/{org}/settings/billing/packages'
        ],
        getGithubPackagesBillingUser: [
          'GET /users/{username}/settings/billing/packages'
        ],
        getSharedStorageBillingOrg: [
          'GET /orgs/{org}/settings/billing/shared-storage'
        ],
        getSharedStorageBillingUser: [
          'GET /users/{username}/settings/billing/shared-storage'
        ]
      },
      checks: {
        create: ['POST /repos/{owner}/{repo}/check-runs'],
        createSuite: ['POST /repos/{owner}/{repo}/check-suites'],
        get: ['GET /repos/{owner}/{repo}/check-runs/{check_run_id}'],
        getSuite: ['GET /repos/{owner}/{repo}/check-suites/{check_suite_id}'],
        listAnnotations: [
          'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations'
        ],
        listForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/check-runs'],
        listForSuite: [
          'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs'
        ],
        listSuitesForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/check-suites'
        ],
        rerequestRun: [
          'POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest'
        ],
        rerequestSuite: [
          'POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest'
        ],
        setSuitesPreferences: [
          'PATCH /repos/{owner}/{repo}/check-suites/preferences'
        ],
        update: ['PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}']
      },
      codeScanning: {
        deleteAnalysis: [
          'DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}'
        ],
        getAlert: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
          {},
          {
            renamedParameters: {
              alert_id: 'alert_number'
            }
          }
        ],
        getAnalysis: [
          'GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}'
        ],
        getCodeqlDatabase: [
          'GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}'
        ],
        getSarif: ['GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}'],
        listAlertInstances: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances'
        ],
        listAlertsForEnterprise: [
          'GET /enterprises/{enterprise}/code-scanning/alerts'
        ],
        listAlertsForOrg: ['GET /orgs/{org}/code-scanning/alerts'],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/code-scanning/alerts'],
        listAlertsInstances: [
          'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
          {},
          {
            renamed: ['codeScanning', 'listAlertInstances']
          }
        ],
        listCodeqlDatabases: [
          'GET /repos/{owner}/{repo}/code-scanning/codeql/databases'
        ],
        listRecentAnalyses: [
          'GET /repos/{owner}/{repo}/code-scanning/analyses'
        ],
        updateAlert: [
          'PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}'
        ],
        uploadSarif: ['POST /repos/{owner}/{repo}/code-scanning/sarifs']
      },
      codesOfConduct: {
        getAllCodesOfConduct: ['GET /codes_of_conduct'],
        getConductCode: ['GET /codes_of_conduct/{key}']
      },
      codespaces: {
        addRepositoryForSecretForAuthenticatedUser: [
          'PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}'
        ],
        addSelectedRepoToOrgSecret: [
          'PUT /organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}'
        ],
        codespaceMachinesForAuthenticatedUser: [
          'GET /user/codespaces/{codespace_name}/machines'
        ],
        createForAuthenticatedUser: ['POST /user/codespaces'],
        createOrUpdateOrgSecret: [
          'PUT /organizations/{org}/codespaces/secrets/{secret_name}'
        ],
        createOrUpdateRepoSecret: [
          'PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'
        ],
        createOrUpdateSecretForAuthenticatedUser: [
          'PUT /user/codespaces/secrets/{secret_name}'
        ],
        createWithPrForAuthenticatedUser: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces'
        ],
        createWithRepoForAuthenticatedUser: [
          'POST /repos/{owner}/{repo}/codespaces'
        ],
        deleteForAuthenticatedUser: [
          'DELETE /user/codespaces/{codespace_name}'
        ],
        deleteFromOrganization: [
          'DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}'
        ],
        deleteOrgSecret: [
          'DELETE /organizations/{org}/codespaces/secrets/{secret_name}'
        ],
        deleteRepoSecret: [
          'DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'
        ],
        deleteSecretForAuthenticatedUser: [
          'DELETE /user/codespaces/secrets/{secret_name}'
        ],
        exportForAuthenticatedUser: [
          'POST /user/codespaces/{codespace_name}/exports'
        ],
        getExportDetailsForAuthenticatedUser: [
          'GET /user/codespaces/{codespace_name}/exports/{export_id}'
        ],
        getForAuthenticatedUser: ['GET /user/codespaces/{codespace_name}'],
        getOrgPublicKey: [
          'GET /organizations/{org}/codespaces/secrets/public-key'
        ],
        getOrgSecret: [
          'GET /organizations/{org}/codespaces/secrets/{secret_name}'
        ],
        getPublicKeyForAuthenticatedUser: [
          'GET /user/codespaces/secrets/public-key'
        ],
        getRepoPublicKey: [
          'GET /repos/{owner}/{repo}/codespaces/secrets/public-key'
        ],
        getRepoSecret: [
          'GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}'
        ],
        getSecretForAuthenticatedUser: [
          'GET /user/codespaces/secrets/{secret_name}'
        ],
        listDevcontainersInRepositoryForAuthenticatedUser: [
          'GET /repos/{owner}/{repo}/codespaces/devcontainers'
        ],
        listForAuthenticatedUser: ['GET /user/codespaces'],
        listInOrganization: [
          'GET /orgs/{org}/codespaces',
          {},
          {
            renamedParameters: {
              org_id: 'org'
            }
          }
        ],
        listInRepositoryForAuthenticatedUser: [
          'GET /repos/{owner}/{repo}/codespaces'
        ],
        listOrgSecrets: ['GET /organizations/{org}/codespaces/secrets'],
        listRepoSecrets: ['GET /repos/{owner}/{repo}/codespaces/secrets'],
        listRepositoriesForSecretForAuthenticatedUser: [
          'GET /user/codespaces/secrets/{secret_name}/repositories'
        ],
        listSecretsForAuthenticatedUser: ['GET /user/codespaces/secrets'],
        listSelectedReposForOrgSecret: [
          'GET /organizations/{org}/codespaces/secrets/{secret_name}/repositories'
        ],
        preFlightWithRepoForAuthenticatedUser: [
          'GET /repos/{owner}/{repo}/codespaces/new'
        ],
        removeRepositoryForSecretForAuthenticatedUser: [
          'DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}'
        ],
        removeSelectedRepoFromOrgSecret: [
          'DELETE /organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}'
        ],
        repoMachinesForAuthenticatedUser: [
          'GET /repos/{owner}/{repo}/codespaces/machines'
        ],
        setRepositoriesForSecretForAuthenticatedUser: [
          'PUT /user/codespaces/secrets/{secret_name}/repositories'
        ],
        setSelectedReposForOrgSecret: [
          'PUT /organizations/{org}/codespaces/secrets/{secret_name}/repositories'
        ],
        startForAuthenticatedUser: [
          'POST /user/codespaces/{codespace_name}/start'
        ],
        stopForAuthenticatedUser: [
          'POST /user/codespaces/{codespace_name}/stop'
        ],
        stopInOrganization: [
          'POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop'
        ],
        updateForAuthenticatedUser: ['PATCH /user/codespaces/{codespace_name}']
      },
      dependabot: {
        addSelectedRepoToOrgSecret: [
          'PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}'
        ],
        createOrUpdateOrgSecret: [
          'PUT /orgs/{org}/dependabot/secrets/{secret_name}'
        ],
        createOrUpdateRepoSecret: [
          'PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'
        ],
        deleteOrgSecret: [
          'DELETE /orgs/{org}/dependabot/secrets/{secret_name}'
        ],
        deleteRepoSecret: [
          'DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'
        ],
        getAlert: [
          'GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}'
        ],
        getOrgPublicKey: ['GET /orgs/{org}/dependabot/secrets/public-key'],
        getOrgSecret: ['GET /orgs/{org}/dependabot/secrets/{secret_name}'],
        getRepoPublicKey: [
          'GET /repos/{owner}/{repo}/dependabot/secrets/public-key'
        ],
        getRepoSecret: [
          'GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}'
        ],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/dependabot/alerts'],
        listOrgSecrets: ['GET /orgs/{org}/dependabot/secrets'],
        listRepoSecrets: ['GET /repos/{owner}/{repo}/dependabot/secrets'],
        listSelectedReposForOrgSecret: [
          'GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories'
        ],
        removeSelectedRepoFromOrgSecret: [
          'DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}'
        ],
        setSelectedReposForOrgSecret: [
          'PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories'
        ],
        updateAlert: [
          'PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}'
        ]
      },
      dependencyGraph: {
        createRepositorySnapshot: [
          'POST /repos/{owner}/{repo}/dependency-graph/snapshots'
        ],
        diffRange: [
          'GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}'
        ]
      },
      emojis: {
        get: ['GET /emojis']
      },
      enterpriseAdmin: {
        addCustomLabelsToSelfHostedRunnerForEnterprise: [
          'POST /enterprises/{enterprise}/actions/runners/{runner_id}/labels'
        ],
        disableSelectedOrganizationGithubActionsEnterprise: [
          'DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}'
        ],
        enableSelectedOrganizationGithubActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}'
        ],
        getAllowedActionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/selected-actions'
        ],
        getGithubActionsPermissionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions'
        ],
        getServerStatistics: [
          'GET /enterprise-installation/{enterprise_or_org}/server-statistics'
        ],
        listLabelsForSelfHostedRunnerForEnterprise: [
          'GET /enterprises/{enterprise}/actions/runners/{runner_id}/labels'
        ],
        listSelectedOrganizationsEnabledGithubActionsEnterprise: [
          'GET /enterprises/{enterprise}/actions/permissions/organizations'
        ],
        removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: [
          'DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels'
        ],
        removeCustomLabelFromSelfHostedRunnerForEnterprise: [
          'DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}'
        ],
        setAllowedActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/selected-actions'
        ],
        setCustomLabelsForSelfHostedRunnerForEnterprise: [
          'PUT /enterprises/{enterprise}/actions/runners/{runner_id}/labels'
        ],
        setGithubActionsPermissionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions'
        ],
        setSelectedOrganizationsEnabledGithubActionsEnterprise: [
          'PUT /enterprises/{enterprise}/actions/permissions/organizations'
        ]
      },
      gists: {
        checkIsStarred: ['GET /gists/{gist_id}/star'],
        create: ['POST /gists'],
        createComment: ['POST /gists/{gist_id}/comments'],
        delete: ['DELETE /gists/{gist_id}'],
        deleteComment: ['DELETE /gists/{gist_id}/comments/{comment_id}'],
        fork: ['POST /gists/{gist_id}/forks'],
        get: ['GET /gists/{gist_id}'],
        getComment: ['GET /gists/{gist_id}/comments/{comment_id}'],
        getRevision: ['GET /gists/{gist_id}/{sha}'],
        list: ['GET /gists'],
        listComments: ['GET /gists/{gist_id}/comments'],
        listCommits: ['GET /gists/{gist_id}/commits'],
        listForUser: ['GET /users/{username}/gists'],
        listForks: ['GET /gists/{gist_id}/forks'],
        listPublic: ['GET /gists/public'],
        listStarred: ['GET /gists/starred'],
        star: ['PUT /gists/{gist_id}/star'],
        unstar: ['DELETE /gists/{gist_id}/star'],
        update: ['PATCH /gists/{gist_id}'],
        updateComment: ['PATCH /gists/{gist_id}/comments/{comment_id}']
      },
      git: {
        createBlob: ['POST /repos/{owner}/{repo}/git/blobs'],
        createCommit: ['POST /repos/{owner}/{repo}/git/commits'],
        createRef: ['POST /repos/{owner}/{repo}/git/refs'],
        createTag: ['POST /repos/{owner}/{repo}/git/tags'],
        createTree: ['POST /repos/{owner}/{repo}/git/trees'],
        deleteRef: ['DELETE /repos/{owner}/{repo}/git/refs/{ref}'],
        getBlob: ['GET /repos/{owner}/{repo}/git/blobs/{file_sha}'],
        getCommit: ['GET /repos/{owner}/{repo}/git/commits/{commit_sha}'],
        getRef: ['GET /repos/{owner}/{repo}/git/ref/{ref}'],
        getTag: ['GET /repos/{owner}/{repo}/git/tags/{tag_sha}'],
        getTree: ['GET /repos/{owner}/{repo}/git/trees/{tree_sha}'],
        listMatchingRefs: ['GET /repos/{owner}/{repo}/git/matching-refs/{ref}'],
        updateRef: ['PATCH /repos/{owner}/{repo}/git/refs/{ref}']
      },
      gitignore: {
        getAllTemplates: ['GET /gitignore/templates'],
        getTemplate: ['GET /gitignore/templates/{name}']
      },
      interactions: {
        getRestrictionsForAuthenticatedUser: ['GET /user/interaction-limits'],
        getRestrictionsForOrg: ['GET /orgs/{org}/interaction-limits'],
        getRestrictionsForRepo: [
          'GET /repos/{owner}/{repo}/interaction-limits'
        ],
        getRestrictionsForYourPublicRepos: [
          'GET /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'getRestrictionsForAuthenticatedUser']
          }
        ],
        removeRestrictionsForAuthenticatedUser: [
          'DELETE /user/interaction-limits'
        ],
        removeRestrictionsForOrg: ['DELETE /orgs/{org}/interaction-limits'],
        removeRestrictionsForRepo: [
          'DELETE /repos/{owner}/{repo}/interaction-limits'
        ],
        removeRestrictionsForYourPublicRepos: [
          'DELETE /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'removeRestrictionsForAuthenticatedUser']
          }
        ],
        setRestrictionsForAuthenticatedUser: ['PUT /user/interaction-limits'],
        setRestrictionsForOrg: ['PUT /orgs/{org}/interaction-limits'],
        setRestrictionsForRepo: [
          'PUT /repos/{owner}/{repo}/interaction-limits'
        ],
        setRestrictionsForYourPublicRepos: [
          'PUT /user/interaction-limits',
          {},
          {
            renamed: ['interactions', 'setRestrictionsForAuthenticatedUser']
          }
        ]
      },
      issues: {
        addAssignees: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/assignees'
        ],
        addLabels: ['POST /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        checkUserCanBeAssigned: [
          'GET /repos/{owner}/{repo}/assignees/{assignee}'
        ],
        create: ['POST /repos/{owner}/{repo}/issues'],
        createComment: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/comments'
        ],
        createLabel: ['POST /repos/{owner}/{repo}/labels'],
        createMilestone: ['POST /repos/{owner}/{repo}/milestones'],
        deleteComment: [
          'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}'
        ],
        deleteLabel: ['DELETE /repos/{owner}/{repo}/labels/{name}'],
        deleteMilestone: [
          'DELETE /repos/{owner}/{repo}/milestones/{milestone_number}'
        ],
        get: ['GET /repos/{owner}/{repo}/issues/{issue_number}'],
        getComment: ['GET /repos/{owner}/{repo}/issues/comments/{comment_id}'],
        getEvent: ['GET /repos/{owner}/{repo}/issues/events/{event_id}'],
        getLabel: ['GET /repos/{owner}/{repo}/labels/{name}'],
        getMilestone: [
          'GET /repos/{owner}/{repo}/milestones/{milestone_number}'
        ],
        list: ['GET /issues'],
        listAssignees: ['GET /repos/{owner}/{repo}/assignees'],
        listComments: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/comments'
        ],
        listCommentsForRepo: ['GET /repos/{owner}/{repo}/issues/comments'],
        listEvents: ['GET /repos/{owner}/{repo}/issues/{issue_number}/events'],
        listEventsForRepo: ['GET /repos/{owner}/{repo}/issues/events'],
        listEventsForTimeline: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline'
        ],
        listForAuthenticatedUser: ['GET /user/issues'],
        listForOrg: ['GET /orgs/{org}/issues'],
        listForRepo: ['GET /repos/{owner}/{repo}/issues'],
        listLabelsForMilestone: [
          'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels'
        ],
        listLabelsForRepo: ['GET /repos/{owner}/{repo}/labels'],
        listLabelsOnIssue: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/labels'
        ],
        listMilestones: ['GET /repos/{owner}/{repo}/milestones'],
        lock: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/lock'],
        removeAllLabels: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels'
        ],
        removeAssignees: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees'
        ],
        removeLabel: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}'
        ],
        setLabels: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/labels'],
        unlock: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock'],
        update: ['PATCH /repos/{owner}/{repo}/issues/{issue_number}'],
        updateComment: [
          'PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}'
        ],
        updateLabel: ['PATCH /repos/{owner}/{repo}/labels/{name}'],
        updateMilestone: [
          'PATCH /repos/{owner}/{repo}/milestones/{milestone_number}'
        ]
      },
      licenses: {
        get: ['GET /licenses/{license}'],
        getAllCommonlyUsed: ['GET /licenses'],
        getForRepo: ['GET /repos/{owner}/{repo}/license']
      },
      markdown: {
        render: ['POST /markdown'],
        renderRaw: [
          'POST /markdown/raw',
          {
            headers: {
              'content-type': 'text/plain; charset=utf-8'
            }
          }
        ]
      },
      meta: {
        get: ['GET /meta'],
        getOctocat: ['GET /octocat'],
        getZen: ['GET /zen'],
        root: ['GET /']
      },
      migrations: {
        cancelImport: ['DELETE /repos/{owner}/{repo}/import'],
        deleteArchiveForAuthenticatedUser: [
          'DELETE /user/migrations/{migration_id}/archive'
        ],
        deleteArchiveForOrg: [
          'DELETE /orgs/{org}/migrations/{migration_id}/archive'
        ],
        downloadArchiveForOrg: [
          'GET /orgs/{org}/migrations/{migration_id}/archive'
        ],
        getArchiveForAuthenticatedUser: [
          'GET /user/migrations/{migration_id}/archive'
        ],
        getCommitAuthors: ['GET /repos/{owner}/{repo}/import/authors'],
        getImportStatus: ['GET /repos/{owner}/{repo}/import'],
        getLargeFiles: ['GET /repos/{owner}/{repo}/import/large_files'],
        getStatusForAuthenticatedUser: ['GET /user/migrations/{migration_id}'],
        getStatusForOrg: ['GET /orgs/{org}/migrations/{migration_id}'],
        listForAuthenticatedUser: ['GET /user/migrations'],
        listForOrg: ['GET /orgs/{org}/migrations'],
        listReposForAuthenticatedUser: [
          'GET /user/migrations/{migration_id}/repositories'
        ],
        listReposForOrg: [
          'GET /orgs/{org}/migrations/{migration_id}/repositories'
        ],
        listReposForUser: [
          'GET /user/migrations/{migration_id}/repositories',
          {},
          {
            renamed: ['migrations', 'listReposForAuthenticatedUser']
          }
        ],
        mapCommitAuthor: [
          'PATCH /repos/{owner}/{repo}/import/authors/{author_id}'
        ],
        setLfsPreference: ['PATCH /repos/{owner}/{repo}/import/lfs'],
        startForAuthenticatedUser: ['POST /user/migrations'],
        startForOrg: ['POST /orgs/{org}/migrations'],
        startImport: ['PUT /repos/{owner}/{repo}/import'],
        unlockRepoForAuthenticatedUser: [
          'DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock'
        ],
        unlockRepoForOrg: [
          'DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock'
        ],
        updateImport: ['PATCH /repos/{owner}/{repo}/import']
      },
      orgs: {
        addSecurityManagerTeam: [
          'PUT /orgs/{org}/security-managers/teams/{team_slug}'
        ],
        blockUser: ['PUT /orgs/{org}/blocks/{username}'],
        cancelInvitation: ['DELETE /orgs/{org}/invitations/{invitation_id}'],
        checkBlockedUser: ['GET /orgs/{org}/blocks/{username}'],
        checkMembershipForUser: ['GET /orgs/{org}/members/{username}'],
        checkPublicMembershipForUser: [
          'GET /orgs/{org}/public_members/{username}'
        ],
        convertMemberToOutsideCollaborator: [
          'PUT /orgs/{org}/outside_collaborators/{username}'
        ],
        createCustomRole: ['POST /orgs/{org}/custom_roles'],
        createInvitation: ['POST /orgs/{org}/invitations'],
        createWebhook: ['POST /orgs/{org}/hooks'],
        deleteCustomRole: ['DELETE /orgs/{org}/custom_roles/{role_id}'],
        deleteWebhook: ['DELETE /orgs/{org}/hooks/{hook_id}'],
        enableOrDisableSecurityProductOnAllOrgRepos: [
          'POST /orgs/{org}/{security_product}/{enablement}'
        ],
        get: ['GET /orgs/{org}'],
        getMembershipForAuthenticatedUser: ['GET /user/memberships/orgs/{org}'],
        getMembershipForUser: ['GET /orgs/{org}/memberships/{username}'],
        getWebhook: ['GET /orgs/{org}/hooks/{hook_id}'],
        getWebhookConfigForOrg: ['GET /orgs/{org}/hooks/{hook_id}/config'],
        getWebhookDelivery: [
          'GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}'
        ],
        list: ['GET /organizations'],
        listAppInstallations: ['GET /orgs/{org}/installations'],
        listBlockedUsers: ['GET /orgs/{org}/blocks'],
        listCustomRoles: ['GET /organizations/{organization_id}/custom_roles'],
        listFailedInvitations: ['GET /orgs/{org}/failed_invitations'],
        listFineGrainedPermissions: [
          'GET /orgs/{org}/fine_grained_permissions'
        ],
        listForAuthenticatedUser: ['GET /user/orgs'],
        listForUser: ['GET /users/{username}/orgs'],
        listInvitationTeams: [
          'GET /orgs/{org}/invitations/{invitation_id}/teams'
        ],
        listMembers: ['GET /orgs/{org}/members'],
        listMembershipsForAuthenticatedUser: ['GET /user/memberships/orgs'],
        listOutsideCollaborators: ['GET /orgs/{org}/outside_collaborators'],
        listPendingInvitations: ['GET /orgs/{org}/invitations'],
        listPublicMembers: ['GET /orgs/{org}/public_members'],
        listSecurityManagerTeams: ['GET /orgs/{org}/security-managers'],
        listWebhookDeliveries: ['GET /orgs/{org}/hooks/{hook_id}/deliveries'],
        listWebhooks: ['GET /orgs/{org}/hooks'],
        pingWebhook: ['POST /orgs/{org}/hooks/{hook_id}/pings'],
        redeliverWebhookDelivery: [
          'POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts'
        ],
        removeMember: ['DELETE /orgs/{org}/members/{username}'],
        removeMembershipForUser: ['DELETE /orgs/{org}/memberships/{username}'],
        removeOutsideCollaborator: [
          'DELETE /orgs/{org}/outside_collaborators/{username}'
        ],
        removePublicMembershipForAuthenticatedUser: [
          'DELETE /orgs/{org}/public_members/{username}'
        ],
        removeSecurityManagerTeam: [
          'DELETE /orgs/{org}/security-managers/teams/{team_slug}'
        ],
        setMembershipForUser: ['PUT /orgs/{org}/memberships/{username}'],
        setPublicMembershipForAuthenticatedUser: [
          'PUT /orgs/{org}/public_members/{username}'
        ],
        unblockUser: ['DELETE /orgs/{org}/blocks/{username}'],
        update: ['PATCH /orgs/{org}'],
        updateCustomRole: ['PATCH /orgs/{org}/custom_roles/{role_id}'],
        updateMembershipForAuthenticatedUser: [
          'PATCH /user/memberships/orgs/{org}'
        ],
        updateWebhook: ['PATCH /orgs/{org}/hooks/{hook_id}'],
        updateWebhookConfigForOrg: ['PATCH /orgs/{org}/hooks/{hook_id}/config']
      },
      packages: {
        deletePackageForAuthenticatedUser: [
          'DELETE /user/packages/{package_type}/{package_name}'
        ],
        deletePackageForOrg: [
          'DELETE /orgs/{org}/packages/{package_type}/{package_name}'
        ],
        deletePackageForUser: [
          'DELETE /users/{username}/packages/{package_type}/{package_name}'
        ],
        deletePackageVersionForAuthenticatedUser: [
          'DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        deletePackageVersionForOrg: [
          'DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        deletePackageVersionForUser: [
          'DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getAllPackageVersionsForAPackageOwnedByAnOrg: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
          {},
          {
            renamed: ['packages', 'getAllPackageVersionsForPackageOwnedByOrg']
          }
        ],
        getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions',
          {},
          {
            renamed: [
              'packages',
              'getAllPackageVersionsForPackageOwnedByAuthenticatedUser'
            ]
          }
        ],
        getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions'
        ],
        getAllPackageVersionsForPackageOwnedByOrg: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions'
        ],
        getAllPackageVersionsForPackageOwnedByUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}/versions'
        ],
        getPackageForAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}'
        ],
        getPackageForOrganization: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}'
        ],
        getPackageForUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}'
        ],
        getPackageVersionForAuthenticatedUser: [
          'GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getPackageVersionForOrganization: [
          'GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        getPackageVersionForUser: [
          'GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}'
        ],
        listPackagesForAuthenticatedUser: ['GET /user/packages'],
        listPackagesForOrganization: ['GET /orgs/{org}/packages'],
        listPackagesForUser: ['GET /users/{username}/packages'],
        restorePackageForAuthenticatedUser: [
          'POST /user/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageForOrg: [
          'POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageForUser: [
          'POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}'
        ],
        restorePackageVersionForAuthenticatedUser: [
          'POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ],
        restorePackageVersionForOrg: [
          'POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ],
        restorePackageVersionForUser: [
          'POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
        ]
      },
      projects: {
        addCollaborator: [
          'PUT /projects/{project_id}/collaborators/{username}'
        ],
        createCard: ['POST /projects/columns/{column_id}/cards'],
        createColumn: ['POST /projects/{project_id}/columns'],
        createForAuthenticatedUser: ['POST /user/projects'],
        createForOrg: ['POST /orgs/{org}/projects'],
        createForRepo: ['POST /repos/{owner}/{repo}/projects'],
        delete: ['DELETE /projects/{project_id}'],
        deleteCard: ['DELETE /projects/columns/cards/{card_id}'],
        deleteColumn: ['DELETE /projects/columns/{column_id}'],
        get: ['GET /projects/{project_id}'],
        getCard: ['GET /projects/columns/cards/{card_id}'],
        getColumn: ['GET /projects/columns/{column_id}'],
        getPermissionForUser: [
          'GET /projects/{project_id}/collaborators/{username}/permission'
        ],
        listCards: ['GET /projects/columns/{column_id}/cards'],
        listCollaborators: ['GET /projects/{project_id}/collaborators'],
        listColumns: ['GET /projects/{project_id}/columns'],
        listForOrg: ['GET /orgs/{org}/projects'],
        listForRepo: ['GET /repos/{owner}/{repo}/projects'],
        listForUser: ['GET /users/{username}/projects'],
        moveCard: ['POST /projects/columns/cards/{card_id}/moves'],
        moveColumn: ['POST /projects/columns/{column_id}/moves'],
        removeCollaborator: [
          'DELETE /projects/{project_id}/collaborators/{username}'
        ],
        update: ['PATCH /projects/{project_id}'],
        updateCard: ['PATCH /projects/columns/cards/{card_id}'],
        updateColumn: ['PATCH /projects/columns/{column_id}']
      },
      pulls: {
        checkIfMerged: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
        create: ['POST /repos/{owner}/{repo}/pulls'],
        createReplyForReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies'
        ],
        createReview: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews'
        ],
        createReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments'
        ],
        deletePendingReview: [
          'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        deleteReviewComment: [
          'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ],
        dismissReview: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals'
        ],
        get: ['GET /repos/{owner}/{repo}/pulls/{pull_number}'],
        getReview: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        getReviewComment: [
          'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ],
        list: ['GET /repos/{owner}/{repo}/pulls'],
        listCommentsForReview: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments'
        ],
        listCommits: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/commits'],
        listFiles: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/files'],
        listRequestedReviewers: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        listReviewComments: [
          'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments'
        ],
        listReviewCommentsForRepo: ['GET /repos/{owner}/{repo}/pulls/comments'],
        listReviews: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews'],
        merge: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
        removeRequestedReviewers: [
          'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        requestReviewers: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
        ],
        submitReview: [
          'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events'
        ],
        update: ['PATCH /repos/{owner}/{repo}/pulls/{pull_number}'],
        updateBranch: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch'
        ],
        updateReview: [
          'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
        ],
        updateReviewComment: [
          'PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}'
        ]
      },
      rateLimit: {
        get: ['GET /rate_limit']
      },
      reactions: {
        createForCommitComment: [
          'POST /repos/{owner}/{repo}/comments/{comment_id}/reactions'
        ],
        createForIssue: [
          'POST /repos/{owner}/{repo}/issues/{issue_number}/reactions'
        ],
        createForIssueComment: [
          'POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions'
        ],
        createForPullRequestReviewComment: [
          'POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions'
        ],
        createForRelease: [
          'POST /repos/{owner}/{repo}/releases/{release_id}/reactions'
        ],
        createForTeamDiscussionCommentInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions'
        ],
        createForTeamDiscussionInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions'
        ],
        deleteForCommitComment: [
          'DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForIssue: [
          'DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}'
        ],
        deleteForIssueComment: [
          'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForPullRequestComment: [
          'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}'
        ],
        deleteForRelease: [
          'DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}'
        ],
        deleteForTeamDiscussion: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}'
        ],
        deleteForTeamDiscussionComment: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}'
        ],
        listForCommitComment: [
          'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions'
        ],
        listForIssue: [
          'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions'
        ],
        listForIssueComment: [
          'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions'
        ],
        listForPullRequestReviewComment: [
          'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions'
        ],
        listForRelease: [
          'GET /repos/{owner}/{repo}/releases/{release_id}/reactions'
        ],
        listForTeamDiscussionCommentInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions'
        ],
        listForTeamDiscussionInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions'
        ]
      },
      repos: {
        acceptInvitation: [
          'PATCH /user/repository_invitations/{invitation_id}',
          {},
          {
            renamed: ['repos', 'acceptInvitationForAuthenticatedUser']
          }
        ],
        acceptInvitationForAuthenticatedUser: [
          'PATCH /user/repository_invitations/{invitation_id}'
        ],
        addAppAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        addCollaborator: ['PUT /repos/{owner}/{repo}/collaborators/{username}'],
        addStatusCheckContexts: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        addTeamAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        addUserAccessRestrictions: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        checkCollaborator: [
          'GET /repos/{owner}/{repo}/collaborators/{username}'
        ],
        checkVulnerabilityAlerts: [
          'GET /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        codeownersErrors: ['GET /repos/{owner}/{repo}/codeowners/errors'],
        compareCommits: ['GET /repos/{owner}/{repo}/compare/{base}...{head}'],
        compareCommitsWithBasehead: [
          'GET /repos/{owner}/{repo}/compare/{basehead}'
        ],
        createAutolink: ['POST /repos/{owner}/{repo}/autolinks'],
        createCommitComment: [
          'POST /repos/{owner}/{repo}/commits/{commit_sha}/comments'
        ],
        createCommitSignatureProtection: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        createCommitStatus: ['POST /repos/{owner}/{repo}/statuses/{sha}'],
        createDeployKey: ['POST /repos/{owner}/{repo}/keys'],
        createDeployment: ['POST /repos/{owner}/{repo}/deployments'],
        createDeploymentBranchPolicy: [
          'POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies'
        ],
        createDeploymentStatus: [
          'POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'
        ],
        createDispatchEvent: ['POST /repos/{owner}/{repo}/dispatches'],
        createForAuthenticatedUser: ['POST /user/repos'],
        createFork: ['POST /repos/{owner}/{repo}/forks'],
        createInOrg: ['POST /orgs/{org}/repos'],
        createOrUpdateEnvironment: [
          'PUT /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        createOrUpdateFileContents: [
          'PUT /repos/{owner}/{repo}/contents/{path}'
        ],
        createPagesDeployment: ['POST /repos/{owner}/{repo}/pages/deployment'],
        createPagesSite: ['POST /repos/{owner}/{repo}/pages'],
        createRelease: ['POST /repos/{owner}/{repo}/releases'],
        createTagProtection: ['POST /repos/{owner}/{repo}/tags/protection'],
        createUsingTemplate: [
          'POST /repos/{template_owner}/{template_repo}/generate'
        ],
        createWebhook: ['POST /repos/{owner}/{repo}/hooks'],
        declineInvitation: [
          'DELETE /user/repository_invitations/{invitation_id}',
          {},
          {
            renamed: ['repos', 'declineInvitationForAuthenticatedUser']
          }
        ],
        declineInvitationForAuthenticatedUser: [
          'DELETE /user/repository_invitations/{invitation_id}'
        ],
        delete: ['DELETE /repos/{owner}/{repo}'],
        deleteAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions'
        ],
        deleteAdminBranchProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        deleteAnEnvironment: [
          'DELETE /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        deleteAutolink: [
          'DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}'
        ],
        deleteBranchProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        deleteCommitComment: [
          'DELETE /repos/{owner}/{repo}/comments/{comment_id}'
        ],
        deleteCommitSignatureProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        deleteDeployKey: ['DELETE /repos/{owner}/{repo}/keys/{key_id}'],
        deleteDeployment: [
          'DELETE /repos/{owner}/{repo}/deployments/{deployment_id}'
        ],
        deleteDeploymentBranchPolicy: [
          'DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}'
        ],
        deleteFile: ['DELETE /repos/{owner}/{repo}/contents/{path}'],
        deleteInvitation: [
          'DELETE /repos/{owner}/{repo}/invitations/{invitation_id}'
        ],
        deletePagesSite: ['DELETE /repos/{owner}/{repo}/pages'],
        deletePullRequestReviewProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        deleteRelease: ['DELETE /repos/{owner}/{repo}/releases/{release_id}'],
        deleteReleaseAsset: [
          'DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        deleteTagProtection: [
          'DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}'
        ],
        deleteWebhook: ['DELETE /repos/{owner}/{repo}/hooks/{hook_id}'],
        disableAutomatedSecurityFixes: [
          'DELETE /repos/{owner}/{repo}/automated-security-fixes'
        ],
        disableLfsForRepo: ['DELETE /repos/{owner}/{repo}/lfs'],
        disableVulnerabilityAlerts: [
          'DELETE /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        downloadArchive: [
          'GET /repos/{owner}/{repo}/zipball/{ref}',
          {},
          {
            renamed: ['repos', 'downloadZipballArchive']
          }
        ],
        downloadTarballArchive: ['GET /repos/{owner}/{repo}/tarball/{ref}'],
        downloadZipballArchive: ['GET /repos/{owner}/{repo}/zipball/{ref}'],
        enableAutomatedSecurityFixes: [
          'PUT /repos/{owner}/{repo}/automated-security-fixes'
        ],
        enableLfsForRepo: ['PUT /repos/{owner}/{repo}/lfs'],
        enableVulnerabilityAlerts: [
          'PUT /repos/{owner}/{repo}/vulnerability-alerts'
        ],
        generateReleaseNotes: [
          'POST /repos/{owner}/{repo}/releases/generate-notes'
        ],
        get: ['GET /repos/{owner}/{repo}'],
        getAccessRestrictions: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions'
        ],
        getAdminBranchProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        getAllEnvironments: ['GET /repos/{owner}/{repo}/environments'],
        getAllStatusCheckContexts: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts'
        ],
        getAllTopics: ['GET /repos/{owner}/{repo}/topics'],
        getAppsWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps'
        ],
        getAutolink: ['GET /repos/{owner}/{repo}/autolinks/{autolink_id}'],
        getBranch: ['GET /repos/{owner}/{repo}/branches/{branch}'],
        getBranchProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        getClones: ['GET /repos/{owner}/{repo}/traffic/clones'],
        getCodeFrequencyStats: [
          'GET /repos/{owner}/{repo}/stats/code_frequency'
        ],
        getCollaboratorPermissionLevel: [
          'GET /repos/{owner}/{repo}/collaborators/{username}/permission'
        ],
        getCombinedStatusForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/status'
        ],
        getCommit: ['GET /repos/{owner}/{repo}/commits/{ref}'],
        getCommitActivityStats: [
          'GET /repos/{owner}/{repo}/stats/commit_activity'
        ],
        getCommitComment: ['GET /repos/{owner}/{repo}/comments/{comment_id}'],
        getCommitSignatureProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures'
        ],
        getCommunityProfileMetrics: [
          'GET /repos/{owner}/{repo}/community/profile'
        ],
        getContent: ['GET /repos/{owner}/{repo}/contents/{path}'],
        getContributorsStats: ['GET /repos/{owner}/{repo}/stats/contributors'],
        getDeployKey: ['GET /repos/{owner}/{repo}/keys/{key_id}'],
        getDeployment: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}'
        ],
        getDeploymentBranchPolicy: [
          'GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}'
        ],
        getDeploymentStatus: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}'
        ],
        getEnvironment: [
          'GET /repos/{owner}/{repo}/environments/{environment_name}'
        ],
        getLatestPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/latest'],
        getLatestRelease: ['GET /repos/{owner}/{repo}/releases/latest'],
        getPages: ['GET /repos/{owner}/{repo}/pages'],
        getPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/{build_id}'],
        getPagesHealthCheck: ['GET /repos/{owner}/{repo}/pages/health'],
        getParticipationStats: [
          'GET /repos/{owner}/{repo}/stats/participation'
        ],
        getPullRequestReviewProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        getPunchCardStats: ['GET /repos/{owner}/{repo}/stats/punch_card'],
        getReadme: ['GET /repos/{owner}/{repo}/readme'],
        getReadmeInDirectory: ['GET /repos/{owner}/{repo}/readme/{dir}'],
        getRelease: ['GET /repos/{owner}/{repo}/releases/{release_id}'],
        getReleaseAsset: [
          'GET /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        getReleaseByTag: ['GET /repos/{owner}/{repo}/releases/tags/{tag}'],
        getStatusChecksProtection: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        getTeamsWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams'
        ],
        getTopPaths: ['GET /repos/{owner}/{repo}/traffic/popular/paths'],
        getTopReferrers: [
          'GET /repos/{owner}/{repo}/traffic/popular/referrers'
        ],
        getUsersWithAccessToProtectedBranch: [
          'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users'
        ],
        getViews: ['GET /repos/{owner}/{repo}/traffic/views'],
        getWebhook: ['GET /repos/{owner}/{repo}/hooks/{hook_id}'],
        getWebhookConfigForRepo: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/config'
        ],
        getWebhookDelivery: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}'
        ],
        listAutolinks: ['GET /repos/{owner}/{repo}/autolinks'],
        listBranches: ['GET /repos/{owner}/{repo}/branches'],
        listBranchesForHeadCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head'
        ],
        listCollaborators: ['GET /repos/{owner}/{repo}/collaborators'],
        listCommentsForCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments'
        ],
        listCommitCommentsForRepo: ['GET /repos/{owner}/{repo}/comments'],
        listCommitStatusesForRef: [
          'GET /repos/{owner}/{repo}/commits/{ref}/statuses'
        ],
        listCommits: ['GET /repos/{owner}/{repo}/commits'],
        listContributors: ['GET /repos/{owner}/{repo}/contributors'],
        listDeployKeys: ['GET /repos/{owner}/{repo}/keys'],
        listDeploymentBranchPolicies: [
          'GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies'
        ],
        listDeploymentStatuses: [
          'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'
        ],
        listDeployments: ['GET /repos/{owner}/{repo}/deployments'],
        listForAuthenticatedUser: ['GET /user/repos'],
        listForOrg: ['GET /orgs/{org}/repos'],
        listForUser: ['GET /users/{username}/repos'],
        listForks: ['GET /repos/{owner}/{repo}/forks'],
        listInvitations: ['GET /repos/{owner}/{repo}/invitations'],
        listInvitationsForAuthenticatedUser: [
          'GET /user/repository_invitations'
        ],
        listLanguages: ['GET /repos/{owner}/{repo}/languages'],
        listPagesBuilds: ['GET /repos/{owner}/{repo}/pages/builds'],
        listPublic: ['GET /repositories'],
        listPullRequestsAssociatedWithCommit: [
          'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls'
        ],
        listReleaseAssets: [
          'GET /repos/{owner}/{repo}/releases/{release_id}/assets'
        ],
        listReleases: ['GET /repos/{owner}/{repo}/releases'],
        listTagProtection: ['GET /repos/{owner}/{repo}/tags/protection'],
        listTags: ['GET /repos/{owner}/{repo}/tags'],
        listTeams: ['GET /repos/{owner}/{repo}/teams'],
        listWebhookDeliveries: [
          'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries'
        ],
        listWebhooks: ['GET /repos/{owner}/{repo}/hooks'],
        merge: ['POST /repos/{owner}/{repo}/merges'],
        mergeUpstream: ['POST /repos/{owner}/{repo}/merge-upstream'],
        pingWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/pings'],
        redeliverWebhookDelivery: [
          'POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts'
        ],
        removeAppAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        removeCollaborator: [
          'DELETE /repos/{owner}/{repo}/collaborators/{username}'
        ],
        removeStatusCheckContexts: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        removeStatusCheckProtection: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        removeTeamAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        removeUserAccessRestrictions: [
          'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        renameBranch: ['POST /repos/{owner}/{repo}/branches/{branch}/rename'],
        replaceAllTopics: ['PUT /repos/{owner}/{repo}/topics'],
        requestPagesBuild: ['POST /repos/{owner}/{repo}/pages/builds'],
        setAdminBranchProtection: [
          'POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
        ],
        setAppAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
          {},
          {
            mapToData: 'apps'
          }
        ],
        setStatusCheckContexts: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
          {},
          {
            mapToData: 'contexts'
          }
        ],
        setTeamAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
          {},
          {
            mapToData: 'teams'
          }
        ],
        setUserAccessRestrictions: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
          {},
          {
            mapToData: 'users'
          }
        ],
        testPushWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/tests'],
        transfer: ['POST /repos/{owner}/{repo}/transfer'],
        update: ['PATCH /repos/{owner}/{repo}'],
        updateBranchProtection: [
          'PUT /repos/{owner}/{repo}/branches/{branch}/protection'
        ],
        updateCommitComment: [
          'PATCH /repos/{owner}/{repo}/comments/{comment_id}'
        ],
        updateDeploymentBranchPolicy: [
          'PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}'
        ],
        updateInformationAboutPagesSite: ['PUT /repos/{owner}/{repo}/pages'],
        updateInvitation: [
          'PATCH /repos/{owner}/{repo}/invitations/{invitation_id}'
        ],
        updatePullRequestReviewProtection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
        ],
        updateRelease: ['PATCH /repos/{owner}/{repo}/releases/{release_id}'],
        updateReleaseAsset: [
          'PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}'
        ],
        updateStatusCheckPotection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
          {},
          {
            renamed: ['repos', 'updateStatusCheckProtection']
          }
        ],
        updateStatusCheckProtection: [
          'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
        ],
        updateWebhook: ['PATCH /repos/{owner}/{repo}/hooks/{hook_id}'],
        updateWebhookConfigForRepo: [
          'PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config'
        ],
        uploadReleaseAsset: [
          'POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}',
          {
            baseUrl: 'https://uploads.github.com'
          }
        ]
      },
      search: {
        code: ['GET /search/code'],
        commits: ['GET /search/commits'],
        issuesAndPullRequests: ['GET /search/issues'],
        labels: ['GET /search/labels'],
        repos: ['GET /search/repositories'],
        topics: ['GET /search/topics'],
        users: ['GET /search/users']
      },
      secretScanning: {
        getAlert: [
          'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'
        ],
        listAlertsForEnterprise: [
          'GET /enterprises/{enterprise}/secret-scanning/alerts'
        ],
        listAlertsForOrg: ['GET /orgs/{org}/secret-scanning/alerts'],
        listAlertsForRepo: ['GET /repos/{owner}/{repo}/secret-scanning/alerts'],
        listLocationsForAlert: [
          'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations'
        ],
        updateAlert: [
          'PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'
        ]
      },
      teams: {
        addOrUpdateMembershipForUserInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        addOrUpdateProjectPermissionsInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        addOrUpdateRepoPermissionsInOrg: [
          'PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        checkPermissionsForProjectInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        checkPermissionsForRepoInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        create: ['POST /orgs/{org}/teams'],
        createDiscussionCommentInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments'
        ],
        createDiscussionInOrg: [
          'POST /orgs/{org}/teams/{team_slug}/discussions'
        ],
        deleteDiscussionCommentInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        deleteDiscussionInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        deleteInOrg: ['DELETE /orgs/{org}/teams/{team_slug}'],
        getByName: ['GET /orgs/{org}/teams/{team_slug}'],
        getDiscussionCommentInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        getDiscussionInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        getMembershipForUserInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        list: ['GET /orgs/{org}/teams'],
        listChildInOrg: ['GET /orgs/{org}/teams/{team_slug}/teams'],
        listDiscussionCommentsInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments'
        ],
        listDiscussionsInOrg: ['GET /orgs/{org}/teams/{team_slug}/discussions'],
        listForAuthenticatedUser: ['GET /user/teams'],
        listMembersInOrg: ['GET /orgs/{org}/teams/{team_slug}/members'],
        listPendingInvitationsInOrg: [
          'GET /orgs/{org}/teams/{team_slug}/invitations'
        ],
        listProjectsInOrg: ['GET /orgs/{org}/teams/{team_slug}/projects'],
        listReposInOrg: ['GET /orgs/{org}/teams/{team_slug}/repos'],
        removeMembershipForUserInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}'
        ],
        removeProjectInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}'
        ],
        removeRepoInOrg: [
          'DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
        ],
        updateDiscussionCommentInOrg: [
          'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
        ],
        updateDiscussionInOrg: [
          'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
        ],
        updateInOrg: ['PATCH /orgs/{org}/teams/{team_slug}']
      },
      users: {
        addEmailForAuthenticated: [
          'POST /user/emails',
          {},
          {
            renamed: ['users', 'addEmailForAuthenticatedUser']
          }
        ],
        addEmailForAuthenticatedUser: ['POST /user/emails'],
        block: ['PUT /user/blocks/{username}'],
        checkBlocked: ['GET /user/blocks/{username}'],
        checkFollowingForUser: [
          'GET /users/{username}/following/{target_user}'
        ],
        checkPersonIsFollowedByAuthenticated: [
          'GET /user/following/{username}'
        ],
        createGpgKeyForAuthenticated: [
          'POST /user/gpg_keys',
          {},
          {
            renamed: ['users', 'createGpgKeyForAuthenticatedUser']
          }
        ],
        createGpgKeyForAuthenticatedUser: ['POST /user/gpg_keys'],
        createPublicSshKeyForAuthenticated: [
          'POST /user/keys',
          {},
          {
            renamed: ['users', 'createPublicSshKeyForAuthenticatedUser']
          }
        ],
        createPublicSshKeyForAuthenticatedUser: ['POST /user/keys'],
        createSshSigningKeyForAuthenticatedUser: [
          'POST /user/ssh_signing_keys'
        ],
        deleteEmailForAuthenticated: [
          'DELETE /user/emails',
          {},
          {
            renamed: ['users', 'deleteEmailForAuthenticatedUser']
          }
        ],
        deleteEmailForAuthenticatedUser: ['DELETE /user/emails'],
        deleteGpgKeyForAuthenticated: [
          'DELETE /user/gpg_keys/{gpg_key_id}',
          {},
          {
            renamed: ['users', 'deleteGpgKeyForAuthenticatedUser']
          }
        ],
        deleteGpgKeyForAuthenticatedUser: [
          'DELETE /user/gpg_keys/{gpg_key_id}'
        ],
        deletePublicSshKeyForAuthenticated: [
          'DELETE /user/keys/{key_id}',
          {},
          {
            renamed: ['users', 'deletePublicSshKeyForAuthenticatedUser']
          }
        ],
        deletePublicSshKeyForAuthenticatedUser: ['DELETE /user/keys/{key_id}'],
        deleteSshSigningKeyForAuthenticatedUser: [
          'DELETE /user/ssh_signing_keys/{ssh_signing_key_id}'
        ],
        follow: ['PUT /user/following/{username}'],
        getAuthenticated: ['GET /user'],
        getByUsername: ['GET /users/{username}'],
        getContextForUser: ['GET /users/{username}/hovercard'],
        getGpgKeyForAuthenticated: [
          'GET /user/gpg_keys/{gpg_key_id}',
          {},
          {
            renamed: ['users', 'getGpgKeyForAuthenticatedUser']
          }
        ],
        getGpgKeyForAuthenticatedUser: ['GET /user/gpg_keys/{gpg_key_id}'],
        getPublicSshKeyForAuthenticated: [
          'GET /user/keys/{key_id}',
          {},
          {
            renamed: ['users', 'getPublicSshKeyForAuthenticatedUser']
          }
        ],
        getPublicSshKeyForAuthenticatedUser: ['GET /user/keys/{key_id}'],
        getSshSigningKeyForAuthenticatedUser: [
          'GET /user/ssh_signing_keys/{ssh_signing_key_id}'
        ],
        list: ['GET /users'],
        listBlockedByAuthenticated: [
          'GET /user/blocks',
          {},
          {
            renamed: ['users', 'listBlockedByAuthenticatedUser']
          }
        ],
        listBlockedByAuthenticatedUser: ['GET /user/blocks'],
        listEmailsForAuthenticated: [
          'GET /user/emails',
          {},
          {
            renamed: ['users', 'listEmailsForAuthenticatedUser']
          }
        ],
        listEmailsForAuthenticatedUser: ['GET /user/emails'],
        listFollowedByAuthenticated: [
          'GET /user/following',
          {},
          {
            renamed: ['users', 'listFollowedByAuthenticatedUser']
          }
        ],
        listFollowedByAuthenticatedUser: ['GET /user/following'],
        listFollowersForAuthenticatedUser: ['GET /user/followers'],
        listFollowersForUser: ['GET /users/{username}/followers'],
        listFollowingForUser: ['GET /users/{username}/following'],
        listGpgKeysForAuthenticated: [
          'GET /user/gpg_keys',
          {},
          {
            renamed: ['users', 'listGpgKeysForAuthenticatedUser']
          }
        ],
        listGpgKeysForAuthenticatedUser: ['GET /user/gpg_keys'],
        listGpgKeysForUser: ['GET /users/{username}/gpg_keys'],
        listPublicEmailsForAuthenticated: [
          'GET /user/public_emails',
          {},
          {
            renamed: ['users', 'listPublicEmailsForAuthenticatedUser']
          }
        ],
        listPublicEmailsForAuthenticatedUser: ['GET /user/public_emails'],
        listPublicKeysForUser: ['GET /users/{username}/keys'],
        listPublicSshKeysForAuthenticated: [
          'GET /user/keys',
          {},
          {
            renamed: ['users', 'listPublicSshKeysForAuthenticatedUser']
          }
        ],
        listPublicSshKeysForAuthenticatedUser: ['GET /user/keys'],
        listSshSigningKeysForAuthenticatedUser: ['GET /user/ssh_signing_keys'],
        listSshSigningKeysForUser: ['GET /users/{username}/ssh_signing_keys'],
        setPrimaryEmailVisibilityForAuthenticated: [
          'PATCH /user/email/visibility',
          {},
          {
            renamed: ['users', 'setPrimaryEmailVisibilityForAuthenticatedUser']
          }
        ],
        setPrimaryEmailVisibilityForAuthenticatedUser: [
          'PATCH /user/email/visibility'
        ],
        unblock: ['DELETE /user/blocks/{username}'],
        unfollow: ['DELETE /user/following/{username}'],
        updateAuthenticated: ['PATCH /user']
      }
    }

    const VERSION = '6.7.0'

    function endpointsToMethods(octokit, endpointsMap) {
      const newMethods = {}
      for (const [scope, endpoints] of Object.entries(endpointsMap)) {
        for (const [methodName, endpoint] of Object.entries(endpoints)) {
          const [route, defaults, decorations] = endpoint
          const [method, url] = route.split(/ /)
          const endpointDefaults = Object.assign(
            {
              method,
              url
            },
            defaults
          )
          if (!newMethods[scope]) {
            newMethods[scope] = {}
          }
          const scopeMethods = newMethods[scope]
          if (decorations) {
            scopeMethods[methodName] = decorate(
              octokit,
              scope,
              methodName,
              endpointDefaults,
              decorations
            )
            continue
          }
          scopeMethods[methodName] = octokit.request.defaults(endpointDefaults)
        }
      }
      return newMethods
    }
    function decorate(octokit, scope, methodName, defaults, decorations) {
      const requestWithDefaults = octokit.request.defaults(defaults)
      /* istanbul ignore next */
      function withDecorations(...args) {
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        let options = requestWithDefaults.endpoint.merge(...args)
        // There are currently no other decorations than `.mapToData`
        if (decorations.mapToData) {
          options = Object.assign({}, options, {
            data: options[decorations.mapToData],
            [decorations.mapToData]: undefined
          })
          return requestWithDefaults(options)
        }
        if (decorations.renamed) {
          const [newScope, newMethodName] = decorations.renamed
          octokit.log.warn(
            `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`
          )
        }
        if (decorations.deprecated) {
          octokit.log.warn(decorations.deprecated)
        }
        if (decorations.renamedParameters) {
          // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
          const options = requestWithDefaults.endpoint.merge(...args)
          for (const [name, alias] of Object.entries(
            decorations.renamedParameters
          )) {
            if (name in options) {
              octokit.log.warn(
                `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`
              )
              if (!(alias in options)) {
                options[alias] = options[name]
              }
              delete options[name]
            }
          }
          return requestWithDefaults(options)
        }
        // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
        return requestWithDefaults(...args)
      }
      return Object.assign(withDecorations, requestWithDefaults)
    }

    function restEndpointMethods(octokit) {
      const api = endpointsToMethods(octokit, Endpoints)
      return {
        rest: api
      }
    }
    restEndpointMethods.VERSION = VERSION
    function legacyRestEndpointMethods(octokit) {
      const api = endpointsToMethods(octokit, Endpoints)
      return {
        ...api,
        rest: api
      }
    }
    legacyRestEndpointMethods.VERSION = VERSION

    exports.legacyRestEndpointMethods = legacyRestEndpointMethods
    exports.restEndpointMethods = restEndpointMethods
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 6239: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var deprecation = __nccwpck_require__(8932)
    var once = _interopDefault(__nccwpck_require__(1223))

    const logOnceCode = once((deprecation) => console.warn(deprecation))
    const logOnceHeaders = once((deprecation) => console.warn(deprecation))
    /**
     * Error with extra properties to help with debugging
     */

    class RequestError extends Error {
      constructor(message, statusCode, options) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'HttpError'
        this.status = statusCode
        let headers

        if ('headers' in options && typeof options.headers !== 'undefined') {
          headers = options.headers
        }

        if ('response' in options) {
          this.response = options.response
          headers = options.response.headers
        } // redact request credentials without mutating original request options

        const requestCopy = Object.assign({}, options.request)

        if (options.request.headers.authorization) {
          requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(
              / .*$/,
              ' [REDACTED]'
            )
          })
        }

        requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
          // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
          .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]') // OAuth tokens can be passed as URL query parameters, although it is not recommended
          // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
          .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
        this.request = requestCopy // deprecations

        Object.defineProperty(this, 'code', {
          get() {
            logOnceCode(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
              )
            )
            return statusCode
          }
        })
        Object.defineProperty(this, 'headers', {
          get() {
            logOnceHeaders(
              new deprecation.Deprecation(
                '[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.'
              )
            )
            return headers || {}
          }
        })
      }
    }

    exports.RequestError = RequestError
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 6206: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var endpoint = __nccwpck_require__(6065)
    var universalUserAgent = __nccwpck_require__(5030)
    var isPlainObject = __nccwpck_require__(3287)
    var nodeFetch = _interopDefault(__nccwpck_require__(467))
    var requestError = __nccwpck_require__(6239)

    const VERSION = '6.2.2'

    function getBufferResponse(response) {
      return response.arrayBuffer()
    }

    function fetchWrapper(requestOptions) {
      const log =
        requestOptions.request && requestOptions.request.log
          ? requestOptions.request.log
          : console

      if (
        isPlainObject.isPlainObject(requestOptions.body) ||
        Array.isArray(requestOptions.body)
      ) {
        requestOptions.body = JSON.stringify(requestOptions.body)
      }

      let headers = {}
      let status
      let url
      const fetch =
        (requestOptions.request && requestOptions.request.fetch) ||
        globalThis.fetch ||
        /* istanbul ignore next */
        nodeFetch
      return fetch(
        requestOptions.url,
        Object.assign(
          {
            method: requestOptions.method,
            body: requestOptions.body,
            headers: requestOptions.headers,
            redirect: requestOptions.redirect
          }, // `requestOptions.request.agent` type is incompatible
          // see https://github.com/octokit/types.ts/pull/264
          requestOptions.request
        )
      )
        .then(async (response) => {
          url = response.url
          status = response.status

          for (const keyAndValue of response.headers) {
            headers[keyAndValue[0]] = keyAndValue[1]
          }

          if ('deprecation' in headers) {
            const matches =
              headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/)
            const deprecationLink = matches && matches.pop()
            log.warn(
              `[@octokit/request] "${requestOptions.method} ${
                requestOptions.url
              }" is deprecated. It is scheduled to be removed on ${
                headers.sunset
              }${deprecationLink ? `. See ${deprecationLink}` : ''}`
            )
          }

          if (status === 204 || status === 205) {
            return
          } // GitHub API returns 200 for HEAD requests

          if (requestOptions.method === 'HEAD') {
            if (status < 400) {
              return
            }

            throw new requestError.RequestError(response.statusText, status, {
              response: {
                url,
                status,
                headers,
                data: undefined
              },
              request: requestOptions
            })
          }

          if (status === 304) {
            throw new requestError.RequestError('Not modified', status, {
              response: {
                url,
                status,
                headers,
                data: await getResponseData(response)
              },
              request: requestOptions
            })
          }

          if (status >= 400) {
            const data = await getResponseData(response)
            const error = new requestError.RequestError(
              toErrorMessage(data),
              status,
              {
                response: {
                  url,
                  status,
                  headers,
                  data
                },
                request: requestOptions
              }
            )
            throw error
          }

          return getResponseData(response)
        })
        .then((data) => {
          return {
            status,
            url,
            headers,
            data
          }
        })
        .catch((error) => {
          if (error instanceof requestError.RequestError) throw error
          else if (error.name === 'AbortError') throw error
          throw new requestError.RequestError(error.message, 500, {
            request: requestOptions
          })
        })
    }

    async function getResponseData(response) {
      const contentType = response.headers.get('content-type')

      if (/application\/json/.test(contentType)) {
        return response.json()
      }

      if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
        return response.text()
      }

      return getBufferResponse(response)
    }

    function toErrorMessage(data) {
      if (typeof data === 'string') return data // istanbul ignore else - just in case

      if ('message' in data) {
        if (Array.isArray(data.errors)) {
          return `${data.message}: ${data.errors
            .map(JSON.stringify)
            .join(', ')}`
        }

        return data.message
      } // istanbul ignore next - just in case

      return `Unknown error: ${JSON.stringify(data)}`
    }

    function withDefaults(oldEndpoint, newDefaults) {
      const endpoint = oldEndpoint.defaults(newDefaults)

      const newApi = function (route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters)

        if (!endpointOptions.request || !endpointOptions.request.hook) {
          return fetchWrapper(endpoint.parse(endpointOptions))
        }

        const request = (route, parameters) => {
          return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)))
        }

        Object.assign(request, {
          endpoint,
          defaults: withDefaults.bind(null, endpoint)
        })
        return endpointOptions.request.hook(request, endpointOptions)
      }

      return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
      })
    }

    const request = withDefaults(endpoint.endpoint, {
      headers: {
        'user-agent': `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
      }
    })

    exports.request = request
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 3682: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var register = __nccwpck_require__(4670)
    var addHook = __nccwpck_require__(5549)
    var removeHook = __nccwpck_require__(6819)

    // bind with array of arguments: https://stackoverflow.com/a/21792913
    var bind = Function.bind
    var bindable = bind.bind(bind)

    function bindApi(hook, state, name) {
      var removeHookRef = bindable(removeHook, null).apply(
        null,
        name ? [state, name] : [state]
      )
      hook.api = { remove: removeHookRef }
      hook.remove = removeHookRef
      ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
        var args = name ? [state, kind, name] : [state, kind]
        hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
      })
    }

    function HookSingular() {
      var singularHookName = 'h'
      var singularHookState = {
        registry: {}
      }
      var singularHook = register.bind(
        null,
        singularHookState,
        singularHookName
      )
      bindApi(singularHook, singularHookState, singularHookName)
      return singularHook
    }

    function HookCollection() {
      var state = {
        registry: {}
      }

      var hook = register.bind(null, state)
      bindApi(hook, state)

      return hook
    }

    var collectionHookDeprecationMessageDisplayed = false
    function Hook() {
      if (!collectionHookDeprecationMessageDisplayed) {
        console.warn(
          '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
        )
        collectionHookDeprecationMessageDisplayed = true
      }
      return HookCollection()
    }

    Hook.Singular = HookSingular.bind()
    Hook.Collection = HookCollection.bind()

    module.exports = Hook
    // expose constructors as a named property for TypeScript
    module.exports.Hook = Hook
    module.exports.Singular = Hook.Singular
    module.exports.Collection = Hook.Collection

    /***/
  },

  /***/ 5549: /***/ (module) => {
    module.exports = addHook

    function addHook(state, kind, name, hook) {
      var orig = hook
      if (!state.registry[name]) {
        state.registry[name] = []
      }

      if (kind === 'before') {
        hook = function (method, options) {
          return Promise.resolve()
            .then(orig.bind(null, options))
            .then(method.bind(null, options))
        }
      }

      if (kind === 'after') {
        hook = function (method, options) {
          var result
          return Promise.resolve()
            .then(method.bind(null, options))
            .then(function (result_) {
              result = result_
              return orig(result, options)
            })
            .then(function () {
              return result
            })
        }
      }

      if (kind === 'error') {
        hook = function (method, options) {
          return Promise.resolve()
            .then(method.bind(null, options))
            .catch(function (error) {
              return orig(error, options)
            })
        }
      }

      state.registry[name].push({
        hook: hook,
        orig: orig
      })
    }

    /***/
  },

  /***/ 4670: /***/ (module) => {
    module.exports = register

    function register(state, name, method, options) {
      if (typeof method !== 'function') {
        throw new Error('method for before hook must be a function')
      }

      if (!options) {
        options = {}
      }

      if (Array.isArray(name)) {
        return name.reverse().reduce(function (callback, name) {
          return register.bind(null, state, name, callback, options)
        }, method)()
      }

      return Promise.resolve().then(function () {
        if (!state.registry[name]) {
          return method(options)
        }

        return state.registry[name].reduce(function (method, registered) {
          return registered.hook.bind(null, method, options)
        }, method)()
      })
    }

    /***/
  },

  /***/ 6819: /***/ (module) => {
    module.exports = removeHook

    function removeHook(state, name, method) {
      if (!state.registry[name]) {
        return
      }

      var index = state.registry[name]
        .map(function (registered) {
          return registered.orig
        })
        .indexOf(method)

      if (index === -1) {
        return
      }

      state.registry[name].splice(index, 1)
    }

    /***/
  },

  /***/ 2358: /***/ (module) => {
    module.exports = function btoa(str) {
      return new Buffer(str).toString('base64')
    }

    /***/
  },

  /***/ 9239: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*jshint node:true */

    var Buffer = __nccwpck_require__(4300).Buffer // browserify
    var SlowBuffer = __nccwpck_require__(4300).SlowBuffer

    module.exports = bufferEq

    function bufferEq(a, b) {
      // shortcutting on type is necessary for correctness
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        return false
      }

      // buffer sizes should be well-known information, so despite this
      // shortcutting, it doesn't leak any information about the *contents* of the
      // buffers.
      if (a.length !== b.length) {
        return false
      }

      var c = 0
      for (var i = 0; i < a.length; i++) {
        /*jshint bitwise:false */
        c |= a[i] ^ b[i] // XOR
      }
      return c === 0
    }

    bufferEq.install = function () {
      Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(
        that
      ) {
        return bufferEq(this, that)
      }
    }

    var origBufEqual = Buffer.prototype.equal
    var origSlowBufEqual = SlowBuffer.prototype.equal
    bufferEq.restore = function () {
      Buffer.prototype.equal = origBufEqual
      SlowBuffer.prototype.equal = origSlowBufEqual
    }

    /***/
  },

  /***/ 8932: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    class Deprecation extends Error {
      constructor(message) {
        super(message) // Maintains proper stack trace (only available on V8)

        /* istanbul ignore next */

        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor)
        }

        this.name = 'Deprecation'
      }
    }

    exports.Deprecation = Deprecation

    /***/
  },

  /***/ 1728: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var Buffer = __nccwpck_require__(1867).Buffer

    var getParamBytesForAlg = __nccwpck_require__(528)

    var MAX_OCTET = 0x80,
      CLASS_UNIVERSAL = 0,
      PRIMITIVE_BIT = 0x20,
      TAG_SEQ = 0x10,
      TAG_INT = 0x02,
      ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | (CLASS_UNIVERSAL << 6),
      ENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6)

    function base64Url(base64) {
      return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    }

    function signatureAsBuffer(signature) {
      if (Buffer.isBuffer(signature)) {
        return signature
      } else if ('string' === typeof signature) {
        return Buffer.from(signature, 'base64')
      }

      throw new TypeError('ECDSA signature must be a Base64 string or a Buffer')
    }

    function derToJose(signature, alg) {
      signature = signatureAsBuffer(signature)
      var paramBytes = getParamBytesForAlg(alg)

      // the DER encoded param should at most be the param size, plus a padding
      // zero, since due to being a signed integer
      var maxEncodedParamLength = paramBytes + 1

      var inputLength = signature.length

      var offset = 0
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"')
      }

      var seqLength = signature[offset++]
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++]
      }

      if (inputLength - offset < seqLength) {
        throw new Error(
          '"seq" specified length of "' +
            seqLength +
            '", only "' +
            (inputLength - offset) +
            '" remaining'
        )
      }

      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"')
      }

      var rLength = signature[offset++]

      if (inputLength - offset - 2 < rLength) {
        throw new Error(
          '"r" specified length of "' +
            rLength +
            '", only "' +
            (inputLength - offset - 2) +
            '" available'
        )
      }

      if (maxEncodedParamLength < rLength) {
        throw new Error(
          '"r" specified length of "' +
            rLength +
            '", max of "' +
            maxEncodedParamLength +
            '" is acceptable'
        )
      }

      var rOffset = offset
      offset += rLength

      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"')
      }

      var sLength = signature[offset++]

      if (inputLength - offset !== sLength) {
        throw new Error(
          '"s" specified length of "' +
            sLength +
            '", expected "' +
            (inputLength - offset) +
            '"'
        )
      }

      if (maxEncodedParamLength < sLength) {
        throw new Error(
          '"s" specified length of "' +
            sLength +
            '", max of "' +
            maxEncodedParamLength +
            '" is acceptable'
        )
      }

      var sOffset = offset
      offset += sLength

      if (offset !== inputLength) {
        throw new Error(
          'Expected to consume entire buffer, but "' +
            (inputLength - offset) +
            '" bytes remain'
        )
      }

      var rPadding = paramBytes - rLength,
        sPadding = paramBytes - sLength

      var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength)

      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0
      }
      signature.copy(
        dst,
        offset,
        rOffset + Math.max(-rPadding, 0),
        rOffset + rLength
      )

      offset = paramBytes

      for (var o = offset; offset < o + sPadding; ++offset) {
        dst[offset] = 0
      }
      signature.copy(
        dst,
        offset,
        sOffset + Math.max(-sPadding, 0),
        sOffset + sLength
      )

      dst = dst.toString('base64')
      dst = base64Url(dst)

      return dst
    }

    function countPadding(buf, start, stop) {
      var padding = 0
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding
      }

      var needsSign = buf[start + padding] >= MAX_OCTET
      if (needsSign) {
        --padding
      }

      return padding
    }

    function joseToDer(signature, alg) {
      signature = signatureAsBuffer(signature)
      var paramBytes = getParamBytesForAlg(alg)

      var signatureBytes = signature.length
      if (signatureBytes !== paramBytes * 2) {
        throw new TypeError(
          '"' +
            alg +
            '" signatures must be "' +
            paramBytes * 2 +
            '" bytes, saw "' +
            signatureBytes +
            '"'
        )
      }

      var rPadding = countPadding(signature, 0, paramBytes)
      var sPadding = countPadding(signature, paramBytes, signature.length)
      var rLength = paramBytes - rPadding
      var sLength = paramBytes - sPadding

      var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength

      var shortLength = rsBytes < MAX_OCTET

      var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes)

      var offset = 0
      dst[offset++] = ENCODED_TAG_SEQ
      if (shortLength) {
        // Bit 8 has value "0"
        // bits 7-1 give the length.
        dst[offset++] = rsBytes
      } else {
        // Bit 8 of first octet has value "1"
        // bits 7-1 give the number of additional length octets.
        dst[offset++] = MAX_OCTET | 1
        // length, base 256
        dst[offset++] = rsBytes & 0xff
      }
      dst[offset++] = ENCODED_TAG_INT
      dst[offset++] = rLength
      if (rPadding < 0) {
        dst[offset++] = 0
        offset += signature.copy(dst, offset, 0, paramBytes)
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes)
      }
      dst[offset++] = ENCODED_TAG_INT
      dst[offset++] = sLength
      if (sPadding < 0) {
        dst[offset++] = 0
        signature.copy(dst, offset, paramBytes)
      } else {
        signature.copy(dst, offset, paramBytes + sPadding)
      }

      return dst
    }

    module.exports = {
      derToJose: derToJose,
      joseToDer: joseToDer
    }

    /***/
  },

  /***/ 528: /***/ (module) => {
    function getParamSize(keySize) {
      var result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1)
      return result
    }

    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    }

    function getParamBytesForAlg(alg) {
      var paramBytes = paramBytesForAlg[alg]
      if (paramBytes) {
        return paramBytes
      }

      throw new Error('Unknown algorithm "' + alg + '"')
    }

    module.exports = getParamBytesForAlg

    /***/
  },

  /***/ 3287: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */

    function isObject(o) {
      return Object.prototype.toString.call(o) === '[object Object]'
    }

    function isPlainObject(o) {
      var ctor, prot

      if (isObject(o) === false) return false

      // If has modified constructor
      ctor = o.constructor
      if (ctor === undefined) return true

      // If has modified prototype
      prot = ctor.prototype
      if (isObject(prot) === false) return false

      // If constructor does not have an Object-specific method
      if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false
      }

      // Most likely a plain Object
      return true
    }

    exports.isPlainObject = isPlainObject

    /***/
  },

  /***/ 3359: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var jws = __nccwpck_require__(4636)

    module.exports = function (jwt, options) {
      options = options || {}
      var decoded = jws.decode(jwt, options)
      if (!decoded) {
        return null
      }
      var payload = decoded.payload

      //try parse the payload
      if (typeof payload === 'string') {
        try {
          var obj = JSON.parse(payload)
          if (obj !== null && typeof obj === 'object') {
            payload = obj
          }
        } catch (e) {}
      }

      //return header if `complete` option is enabled.  header includes claims
      //such as `kid` and `alg` used to select the key within a JWKS needed to
      //verify the signature
      if (options.complete === true) {
        return {
          header: decoded.header,
          payload: payload,
          signature: decoded.signature
        }
      }
      return payload
    }

    /***/
  },

  /***/ 7486: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    module.exports = {
      decode: __nccwpck_require__(3359),
      verify: __nccwpck_require__(2327),
      sign: __nccwpck_require__(2022),
      JsonWebTokenError: __nccwpck_require__(405),
      NotBeforeError: __nccwpck_require__(4383),
      TokenExpiredError: __nccwpck_require__(6637)
    }

    /***/
  },

  /***/ 405: /***/ (module) => {
    var JsonWebTokenError = function (message, error) {
      Error.call(this, message)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor)
      }
      this.name = 'JsonWebTokenError'
      this.message = message
      if (error) this.inner = error
    }

    JsonWebTokenError.prototype = Object.create(Error.prototype)
    JsonWebTokenError.prototype.constructor = JsonWebTokenError

    module.exports = JsonWebTokenError

    /***/
  },

  /***/ 4383: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var JsonWebTokenError = __nccwpck_require__(405)

    var NotBeforeError = function (message, date) {
      JsonWebTokenError.call(this, message)
      this.name = 'NotBeforeError'
      this.date = date
    }

    NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype)

    NotBeforeError.prototype.constructor = NotBeforeError

    module.exports = NotBeforeError

    /***/
  },

  /***/ 6637: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var JsonWebTokenError = __nccwpck_require__(405)

    var TokenExpiredError = function (message, expiredAt) {
      JsonWebTokenError.call(this, message)
      this.name = 'TokenExpiredError'
      this.expiredAt = expiredAt
    }

    TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype)

    TokenExpiredError.prototype.constructor = TokenExpiredError

    module.exports = TokenExpiredError

    /***/
  },

  /***/ 9085: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var semver = __nccwpck_require__(7174)

    module.exports = semver.satisfies(process.version, '^6.12.0 || >=8.0.0')

    /***/
  },

  /***/ 6098: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var ms = __nccwpck_require__(900)

    module.exports = function (time, iat) {
      var timestamp = iat || Math.floor(Date.now() / 1000)

      if (typeof time === 'string') {
        var milliseconds = ms(time)
        if (typeof milliseconds === 'undefined') {
          return
        }
        return Math.floor(timestamp + milliseconds / 1000)
      } else if (typeof time === 'number') {
        return timestamp + time
      } else {
        return
      }
    }

    /***/
  },

  /***/ 7174: /***/ (module, exports) => {
    exports = module.exports = SemVer

    var debug
    /* istanbul ignore next */
    if (
      typeof process === 'object' &&
      process.env &&
      process.env.NODE_DEBUG &&
      /\bsemver\b/i.test(process.env.NODE_DEBUG)
    ) {
      debug = function () {
        var args = Array.prototype.slice.call(arguments, 0)
        args.unshift('SEMVER')
        console.log.apply(console, args)
      }
    } else {
      debug = function () {}
    }

    // Note: this is the semver.org version of the spec that it implements
    // Not necessarily the package version of this code.
    exports.SEMVER_SPEC_VERSION = '2.0.0'

    var MAX_LENGTH = 256
    var MAX_SAFE_INTEGER =
      Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991

    // Max safe segment length for coercion.
    var MAX_SAFE_COMPONENT_LENGTH = 16

    // The actual regexps go on exports.re
    var re = (exports.re = [])
    var src = (exports.src = [])
    var R = 0

    // The following Regular Expressions can be used for tokenizing,
    // validating, and parsing SemVer version strings.

    // ## Numeric Identifier
    // A single `0`, or a non-zero digit followed by zero or more digits.

    var NUMERICIDENTIFIER = R++
    src[NUMERICIDENTIFIER] = '0|[1-9]\\d*'
    var NUMERICIDENTIFIERLOOSE = R++
    src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'

    // ## Non-numeric Identifier
    // Zero or more digits, followed by a letter or hyphen, and then zero or
    // more letters, digits, or hyphens.

    var NONNUMERICIDENTIFIER = R++
    src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'

    // ## Main Version
    // Three dot-separated numeric identifiers.

    var MAINVERSION = R++
    src[MAINVERSION] =
      '(' +
      src[NUMERICIDENTIFIER] +
      ')\\.' +
      '(' +
      src[NUMERICIDENTIFIER] +
      ')\\.' +
      '(' +
      src[NUMERICIDENTIFIER] +
      ')'

    var MAINVERSIONLOOSE = R++
    src[MAINVERSIONLOOSE] =
      '(' +
      src[NUMERICIDENTIFIERLOOSE] +
      ')\\.' +
      '(' +
      src[NUMERICIDENTIFIERLOOSE] +
      ')\\.' +
      '(' +
      src[NUMERICIDENTIFIERLOOSE] +
      ')'

    // ## Pre-release Version Identifier
    // A numeric identifier, or a non-numeric identifier.

    var PRERELEASEIDENTIFIER = R++
    src[PRERELEASEIDENTIFIER] =
      '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')'

    var PRERELEASEIDENTIFIERLOOSE = R++
    src[PRERELEASEIDENTIFIERLOOSE] =
      '(?:' +
      src[NUMERICIDENTIFIERLOOSE] +
      '|' +
      src[NONNUMERICIDENTIFIER] +
      ')'

    // ## Pre-release Version
    // Hyphen, followed by one or more dot-separated pre-release version
    // identifiers.

    var PRERELEASE = R++
    src[PRERELEASE] =
      '(?:-(' +
      src[PRERELEASEIDENTIFIER] +
      '(?:\\.' +
      src[PRERELEASEIDENTIFIER] +
      ')*))'

    var PRERELEASELOOSE = R++
    src[PRERELEASELOOSE] =
      '(?:-?(' +
      src[PRERELEASEIDENTIFIERLOOSE] +
      '(?:\\.' +
      src[PRERELEASEIDENTIFIERLOOSE] +
      ')*))'

    // ## Build Metadata Identifier
    // Any combination of digits, letters, or hyphens.

    var BUILDIDENTIFIER = R++
    src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'

    // ## Build Metadata
    // Plus sign, followed by one or more period-separated build metadata
    // identifiers.

    var BUILD = R++
    src[BUILD] =
      '(?:\\+(' +
      src[BUILDIDENTIFIER] +
      '(?:\\.' +
      src[BUILDIDENTIFIER] +
      ')*))'

    // ## Full Version String
    // A main version, followed optionally by a pre-release version and
    // build metadata.

    // Note that the only major, minor, patch, and pre-release sections of
    // the version string are capturing groups.  The build metadata is not a
    // capturing group, because it should not ever be used in version
    // comparison.

    var FULL = R++
    var FULLPLAIN =
      'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?'

    src[FULL] = '^' + FULLPLAIN + '$'

    // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
    // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
    // common in the npm registry.
    var LOOSEPLAIN =
      '[v=\\s]*' +
      src[MAINVERSIONLOOSE] +
      src[PRERELEASELOOSE] +
      '?' +
      src[BUILD] +
      '?'

    var LOOSE = R++
    src[LOOSE] = '^' + LOOSEPLAIN + '$'

    var GTLT = R++
    src[GTLT] = '((?:<|>)?=?)'

    // Something like "2.*" or "1.2.x".
    // Note that "x.x" is a valid xRange identifer, meaning "any version"
    // Only the first item is strictly required.
    var XRANGEIDENTIFIERLOOSE = R++
    src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'
    var XRANGEIDENTIFIER = R++
    src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*'

    var XRANGEPLAIN = R++
    src[XRANGEPLAIN] =
      '[v=\\s]*(' +
      src[XRANGEIDENTIFIER] +
      ')' +
      '(?:\\.(' +
      src[XRANGEIDENTIFIER] +
      ')' +
      '(?:\\.(' +
      src[XRANGEIDENTIFIER] +
      ')' +
      '(?:' +
      src[PRERELEASE] +
      ')?' +
      src[BUILD] +
      '?' +
      ')?)?'

    var XRANGEPLAINLOOSE = R++
    src[XRANGEPLAINLOOSE] =
      '[v=\\s]*(' +
      src[XRANGEIDENTIFIERLOOSE] +
      ')' +
      '(?:\\.(' +
      src[XRANGEIDENTIFIERLOOSE] +
      ')' +
      '(?:\\.(' +
      src[XRANGEIDENTIFIERLOOSE] +
      ')' +
      '(?:' +
      src[PRERELEASELOOSE] +
      ')?' +
      src[BUILD] +
      '?' +
      ')?)?'

    var XRANGE = R++
    src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$'
    var XRANGELOOSE = R++
    src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'

    // Coercion.
    // Extract anything that could conceivably be a part of a valid semver
    var COERCE = R++
    src[COERCE] =
      '(?:^|[^\\d])' +
      '(\\d{1,' +
      MAX_SAFE_COMPONENT_LENGTH +
      '})' +
      '(?:\\.(\\d{1,' +
      MAX_SAFE_COMPONENT_LENGTH +
      '}))?' +
      '(?:\\.(\\d{1,' +
      MAX_SAFE_COMPONENT_LENGTH +
      '}))?' +
      '(?:$|[^\\d])'

    // Tilde ranges.
    // Meaning is "reasonably at or greater than"
    var LONETILDE = R++
    src[LONETILDE] = '(?:~>?)'

    var TILDETRIM = R++
    src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+'
    re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g')
    var tildeTrimReplace = '$1~'

    var TILDE = R++
    src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$'
    var TILDELOOSE = R++
    src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'

    // Caret ranges.
    // Meaning is "at least and backwards compatible with"
    var LONECARET = R++
    src[LONECARET] = '(?:\\^)'

    var CARETTRIM = R++
    src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+'
    re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g')
    var caretTrimReplace = '$1^'

    var CARET = R++
    src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$'
    var CARETLOOSE = R++
    src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'

    // A simple gt/lt/eq thing, or just "" to indicate "any version"
    var COMPARATORLOOSE = R++
    src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$'
    var COMPARATOR = R++
    src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'

    // An expression to strip any whitespace between the gtlt and the thing
    // it modifies, so that `> 1.2.3` ==> `>1.2.3`
    var COMPARATORTRIM = R++
    src[COMPARATORTRIM] =
      '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'

    // this one has to use the /g flag
    re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g')
    var comparatorTrimReplace = '$1$2$3'

    // Something like `1.2.3 - 1.2.4`
    // Note that these all use the loose form, because they'll be
    // checked against either the strict or loose comparator form
    // later.
    var HYPHENRANGE = R++
    src[HYPHENRANGE] =
      '^\\s*(' +
      src[XRANGEPLAIN] +
      ')' +
      '\\s+-\\s+' +
      '(' +
      src[XRANGEPLAIN] +
      ')' +
      '\\s*$'

    var HYPHENRANGELOOSE = R++
    src[HYPHENRANGELOOSE] =
      '^\\s*(' +
      src[XRANGEPLAINLOOSE] +
      ')' +
      '\\s+-\\s+' +
      '(' +
      src[XRANGEPLAINLOOSE] +
      ')' +
      '\\s*$'

    // Star ranges basically just allow anything at all.
    var STAR = R++
    src[STAR] = '(<|>)?=?\\s*\\*'

    // Compile to actual regexp objects.
    // All are flag-free, unless they were created above with a flag.
    for (var i = 0; i < R; i++) {
      debug(i, src[i])
      if (!re[i]) {
        re[i] = new RegExp(src[i])
      }
    }

    exports.parse = parse
    function parse(version, options) {
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        }
      }

      if (version instanceof SemVer) {
        return version
      }

      if (typeof version !== 'string') {
        return null
      }

      if (version.length > MAX_LENGTH) {
        return null
      }

      var r = options.loose ? re[LOOSE] : re[FULL]
      if (!r.test(version)) {
        return null
      }

      try {
        return new SemVer(version, options)
      } catch (er) {
        return null
      }
    }

    exports.valid = valid
    function valid(version, options) {
      var v = parse(version, options)
      return v ? v.version : null
    }

    exports.clean = clean
    function clean(version, options) {
      var s = parse(version.trim().replace(/^[=v]+/, ''), options)
      return s ? s.version : null
    }

    exports.SemVer = SemVer

    function SemVer(version, options) {
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        }
      }
      if (version instanceof SemVer) {
        if (version.loose === options.loose) {
          return version
        } else {
          version = version.version
        }
      } else if (typeof version !== 'string') {
        throw new TypeError('Invalid Version: ' + version)
      }

      if (version.length > MAX_LENGTH) {
        throw new TypeError(
          'version is longer than ' + MAX_LENGTH + ' characters'
        )
      }

      if (!(this instanceof SemVer)) {
        return new SemVer(version, options)
      }

      debug('SemVer', version, options)
      this.options = options
      this.loose = !!options.loose

      var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL])

      if (!m) {
        throw new TypeError('Invalid Version: ' + version)
      }

      this.raw = version

      // these are actually numbers
      this.major = +m[1]
      this.minor = +m[2]
      this.patch = +m[3]

      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError('Invalid major version')
      }

      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError('Invalid minor version')
      }

      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError('Invalid patch version')
      }

      // numberify any prerelease numeric ids
      if (!m[4]) {
        this.prerelease = []
      } else {
        this.prerelease = m[4].split('.').map(function (id) {
          if (/^[0-9]+$/.test(id)) {
            var num = +id
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num
            }
          }
          return id
        })
      }

      this.build = m[5] ? m[5].split('.') : []
      this.format()
    }

    SemVer.prototype.format = function () {
      this.version = this.major + '.' + this.minor + '.' + this.patch
      if (this.prerelease.length) {
        this.version += '-' + this.prerelease.join('.')
      }
      return this.version
    }

    SemVer.prototype.toString = function () {
      return this.version
    }

    SemVer.prototype.compare = function (other) {
      debug('SemVer.compare', this.version, this.options, other)
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options)
      }

      return this.compareMain(other) || this.comparePre(other)
    }

    SemVer.prototype.compareMain = function (other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options)
      }

      return (
        compareIdentifiers(this.major, other.major) ||
        compareIdentifiers(this.minor, other.minor) ||
        compareIdentifiers(this.patch, other.patch)
      )
    }

    SemVer.prototype.comparePre = function (other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options)
      }

      // NOT having a prerelease is > having one
      if (this.prerelease.length && !other.prerelease.length) {
        return -1
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0
      }

      var i = 0
      do {
        var a = this.prerelease[i]
        var b = other.prerelease[i]
        debug('prerelease compare', i, a, b)
        if (a === undefined && b === undefined) {
          return 0
        } else if (b === undefined) {
          return 1
        } else if (a === undefined) {
          return -1
        } else if (a === b) {
          continue
        } else {
          return compareIdentifiers(a, b)
        }
      } while (++i)
    }

    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    SemVer.prototype.inc = function (release, identifier) {
      switch (release) {
        case 'premajor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor = 0
          this.major++
          this.inc('pre', identifier)
          break
        case 'preminor':
          this.prerelease.length = 0
          this.patch = 0
          this.minor++
          this.inc('pre', identifier)
          break
        case 'prepatch':
          // If this is already a prerelease, it will bump to the next version
          // drop any prereleases that might already exist, since they are not
          // relevant at this point.
          this.prerelease.length = 0
          this.inc('patch', identifier)
          this.inc('pre', identifier)
          break
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case 'prerelease':
          if (this.prerelease.length === 0) {
            this.inc('patch', identifier)
          }
          this.inc('pre', identifier)
          break

        case 'major':
          // If this is a pre-major version, bump up to the same major version.
          // Otherwise increment major.
          // 1.0.0-5 bumps to 1.0.0
          // 1.1.0 bumps to 2.0.0
          if (
            this.minor !== 0 ||
            this.patch !== 0 ||
            this.prerelease.length === 0
          ) {
            this.major++
          }
          this.minor = 0
          this.patch = 0
          this.prerelease = []
          break
        case 'minor':
          // If this is a pre-minor version, bump up to the same minor version.
          // Otherwise increment minor.
          // 1.2.0-5 bumps to 1.2.0
          // 1.2.1 bumps to 1.3.0
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++
          }
          this.patch = 0
          this.prerelease = []
          break
        case 'patch':
          // If this is not a pre-release version, it will increment the patch.
          // If it is a pre-release it will bump up to the same patch version.
          // 1.2.0-5 patches to 1.2.0
          // 1.2.0 patches to 1.2.1
          if (this.prerelease.length === 0) {
            this.patch++
          }
          this.prerelease = []
          break
        // This probably shouldn't be used publicly.
        // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
        case 'pre':
          if (this.prerelease.length === 0) {
            this.prerelease = [0]
          } else {
            var i = this.prerelease.length
            while (--i >= 0) {
              if (typeof this.prerelease[i] === 'number') {
                this.prerelease[i]++
                i = -2
              }
            }
            if (i === -1) {
              // didn't increment anything
              this.prerelease.push(0)
            }
          }
          if (identifier) {
            // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
            // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
            if (this.prerelease[0] === identifier) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = [identifier, 0]
              }
            } else {
              this.prerelease = [identifier, 0]
            }
          }
          break

        default:
          throw new Error('invalid increment argument: ' + release)
      }
      this.format()
      this.raw = this.version
      return this
    }

    exports.inc = inc
    function inc(version, release, loose, identifier) {
      if (typeof loose === 'string') {
        identifier = loose
        loose = undefined
      }

      try {
        return new SemVer(version, loose).inc(release, identifier).version
      } catch (er) {
        return null
      }
    }

    exports.diff = diff
    function diff(version1, version2) {
      if (eq(version1, version2)) {
        return null
      } else {
        var v1 = parse(version1)
        var v2 = parse(version2)
        var prefix = ''
        if (v1.prerelease.length || v2.prerelease.length) {
          prefix = 'pre'
          var defaultResult = 'prerelease'
        }
        for (var key in v1) {
          if (key === 'major' || key === 'minor' || key === 'patch') {
            if (v1[key] !== v2[key]) {
              return prefix + key
            }
          }
        }
        return defaultResult // may be undefined
      }
    }

    exports.compareIdentifiers = compareIdentifiers

    var numeric = /^[0-9]+$/
    function compareIdentifiers(a, b) {
      var anum = numeric.test(a)
      var bnum = numeric.test(b)

      if (anum && bnum) {
        a = +a
        b = +b
      }

      return a === b
        ? 0
        : anum && !bnum
        ? -1
        : bnum && !anum
        ? 1
        : a < b
        ? -1
        : 1
    }

    exports.rcompareIdentifiers = rcompareIdentifiers
    function rcompareIdentifiers(a, b) {
      return compareIdentifiers(b, a)
    }

    exports.major = major
    function major(a, loose) {
      return new SemVer(a, loose).major
    }

    exports.minor = minor
    function minor(a, loose) {
      return new SemVer(a, loose).minor
    }

    exports.patch = patch
    function patch(a, loose) {
      return new SemVer(a, loose).patch
    }

    exports.compare = compare
    function compare(a, b, loose) {
      return new SemVer(a, loose).compare(new SemVer(b, loose))
    }

    exports.compareLoose = compareLoose
    function compareLoose(a, b) {
      return compare(a, b, true)
    }

    exports.rcompare = rcompare
    function rcompare(a, b, loose) {
      return compare(b, a, loose)
    }

    exports.sort = sort
    function sort(list, loose) {
      return list.sort(function (a, b) {
        return exports.compare(a, b, loose)
      })
    }

    exports.rsort = rsort
    function rsort(list, loose) {
      return list.sort(function (a, b) {
        return exports.rcompare(a, b, loose)
      })
    }

    exports.gt = gt
    function gt(a, b, loose) {
      return compare(a, b, loose) > 0
    }

    exports.lt = lt
    function lt(a, b, loose) {
      return compare(a, b, loose) < 0
    }

    exports.eq = eq
    function eq(a, b, loose) {
      return compare(a, b, loose) === 0
    }

    exports.neq = neq
    function neq(a, b, loose) {
      return compare(a, b, loose) !== 0
    }

    exports.gte = gte
    function gte(a, b, loose) {
      return compare(a, b, loose) >= 0
    }

    exports.lte = lte
    function lte(a, b, loose) {
      return compare(a, b, loose) <= 0
    }

    exports.cmp = cmp
    function cmp(a, op, b, loose) {
      switch (op) {
        case '===':
          if (typeof a === 'object') a = a.version
          if (typeof b === 'object') b = b.version
          return a === b

        case '!==':
          if (typeof a === 'object') a = a.version
          if (typeof b === 'object') b = b.version
          return a !== b

        case '':
        case '=':
        case '==':
          return eq(a, b, loose)

        case '!=':
          return neq(a, b, loose)

        case '>':
          return gt(a, b, loose)

        case '>=':
          return gte(a, b, loose)

        case '<':
          return lt(a, b, loose)

        case '<=':
          return lte(a, b, loose)

        default:
          throw new TypeError('Invalid operator: ' + op)
      }
    }

    exports.Comparator = Comparator
    function Comparator(comp, options) {
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        }
      }

      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp
        } else {
          comp = comp.value
        }
      }

      if (!(this instanceof Comparator)) {
        return new Comparator(comp, options)
      }

      debug('comparator', comp, options)
      this.options = options
      this.loose = !!options.loose
      this.parse(comp)

      if (this.semver === ANY) {
        this.value = ''
      } else {
        this.value = this.operator + this.semver.version
      }

      debug('comp', this)
    }

    var ANY = {}
    Comparator.prototype.parse = function (comp) {
      var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
      var m = comp.match(r)

      if (!m) {
        throw new TypeError('Invalid comparator: ' + comp)
      }

      this.operator = m[1]
      if (this.operator === '=') {
        this.operator = ''
      }

      // if it literally is just '>' or '' then allow anything.
      if (!m[2]) {
        this.semver = ANY
      } else {
        this.semver = new SemVer(m[2], this.options.loose)
      }
    }

    Comparator.prototype.toString = function () {
      return this.value
    }

    Comparator.prototype.test = function (version) {
      debug('Comparator.test', version, this.options.loose)

      if (this.semver === ANY) {
        return true
      }

      if (typeof version === 'string') {
        version = new SemVer(version, this.options)
      }

      return cmp(version, this.operator, this.semver, this.options)
    }

    Comparator.prototype.intersects = function (comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError('a Comparator is required')
      }

      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        }
      }

      var rangeTmp

      if (this.operator === '') {
        rangeTmp = new Range(comp.value, options)
        return satisfies(this.value, rangeTmp, options)
      } else if (comp.operator === '') {
        rangeTmp = new Range(this.value, options)
        return satisfies(comp.semver, rangeTmp, options)
      }

      var sameDirectionIncreasing =
        (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '>=' || comp.operator === '>')
      var sameDirectionDecreasing =
        (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '<=' || comp.operator === '<')
      var sameSemVer = this.semver.version === comp.semver.version
      var differentDirectionsInclusive =
        (this.operator === '>=' || this.operator === '<=') &&
        (comp.operator === '>=' || comp.operator === '<=')
      var oppositeDirectionsLessThan =
        cmp(this.semver, '<', comp.semver, options) &&
        (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
      var oppositeDirectionsGreaterThan =
        cmp(this.semver, '>', comp.semver, options) &&
        (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

      return (
        sameDirectionIncreasing ||
        sameDirectionDecreasing ||
        (sameSemVer && differentDirectionsInclusive) ||
        oppositeDirectionsLessThan ||
        oppositeDirectionsGreaterThan
      )
    }

    exports.Range = Range
    function Range(range, options) {
      if (!options || typeof options !== 'object') {
        options = {
          loose: !!options,
          includePrerelease: false
        }
      }

      if (range instanceof Range) {
        if (
          range.loose === !!options.loose &&
          range.includePrerelease === !!options.includePrerelease
        ) {
          return range
        } else {
          return new Range(range.raw, options)
        }
      }

      if (range instanceof Comparator) {
        return new Range(range.value, options)
      }

      if (!(this instanceof Range)) {
        return new Range(range, options)
      }

      this.options = options
      this.loose = !!options.loose
      this.includePrerelease = !!options.includePrerelease

      // First, split based on boolean or ||
      this.raw = range
      this.set = range
        .split(/\s*\|\|\s*/)
        .map(function (range) {
          return this.parseRange(range.trim())
        }, this)
        .filter(function (c) {
          // throw out any that are not relevant for whatever reason
          return c.length
        })

      if (!this.set.length) {
        throw new TypeError('Invalid SemVer Range: ' + range)
      }

      this.format()
    }

    Range.prototype.format = function () {
      this.range = this.set
        .map(function (comps) {
          return comps.join(' ').trim()
        })
        .join('||')
        .trim()
      return this.range
    }

    Range.prototype.toString = function () {
      return this.range
    }

    Range.prototype.parseRange = function (range) {
      var loose = this.options.loose
      range = range.trim()
      // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
      var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE]
      range = range.replace(hr, hyphenReplace)
      debug('hyphen replace', range)
      // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
      range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace)
      debug('comparator trim', range, re[COMPARATORTRIM])

      // `~ 1.2.3` => `~1.2.3`
      range = range.replace(re[TILDETRIM], tildeTrimReplace)

      // `^ 1.2.3` => `^1.2.3`
      range = range.replace(re[CARETTRIM], caretTrimReplace)

      // normalize spaces
      range = range.split(/\s+/).join(' ')

      // At this point, the range is completely trimmed and
      // ready to be split into comparators.

      var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
      var set = range
        .split(' ')
        .map(function (comp) {
          return parseComparator(comp, this.options)
        }, this)
        .join(' ')
        .split(/\s+/)
      if (this.options.loose) {
        // in loose mode, throw out any that are not valid comparators
        set = set.filter(function (comp) {
          return !!comp.match(compRe)
        })
      }
      set = set.map(function (comp) {
        return new Comparator(comp, this.options)
      }, this)

      return set
    }

    Range.prototype.intersects = function (range, options) {
      if (!(range instanceof Range)) {
        throw new TypeError('a Range is required')
      }

      return this.set.some(function (thisComparators) {
        return thisComparators.every(function (thisComparator) {
          return range.set.some(function (rangeComparators) {
            return rangeComparators.every(function (rangeComparator) {
              return thisComparator.intersects(rangeComparator, options)
            })
          })
        })
      })
    }

    // Mostly just for testing and legacy API reasons
    exports.toComparators = toComparators
    function toComparators(range, options) {
      return new Range(range, options).set.map(function (comp) {
        return comp
          .map(function (c) {
            return c.value
          })
          .join(' ')
          .trim()
          .split(' ')
      })
    }

    // comprised of xranges, tildes, stars, and gtlt's at this point.
    // already replaced the hyphen ranges
    // turn into a set of JUST comparators.
    function parseComparator(comp, options) {
      debug('comp', comp, options)
      comp = replaceCarets(comp, options)
      debug('caret', comp)
      comp = replaceTildes(comp, options)
      debug('tildes', comp)
      comp = replaceXRanges(comp, options)
      debug('xrange', comp)
      comp = replaceStars(comp, options)
      debug('stars', comp)
      return comp
    }

    function isX(id) {
      return !id || id.toLowerCase() === 'x' || id === '*'
    }

    // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
    function replaceTildes(comp, options) {
      return comp
        .trim()
        .split(/\s+/)
        .map(function (comp) {
          return replaceTilde(comp, options)
        })
        .join(' ')
    }

    function replaceTilde(comp, options) {
      var r = options.loose ? re[TILDELOOSE] : re[TILDE]
      return comp.replace(r, function (_, M, m, p, pr) {
        debug('tilde', comp, _, M, m, p, pr)
        var ret

        if (isX(M)) {
          ret = ''
        } else if (isX(m)) {
          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
        } else if (isX(p)) {
          // ~1.2 == >=1.2.0 <1.3.0
          ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
        } else if (pr) {
          debug('replaceTilde pr', pr)
          ret =
            '>=' +
            M +
            '.' +
            m +
            '.' +
            p +
            '-' +
            pr +
            ' <' +
            M +
            '.' +
            (+m + 1) +
            '.0'
        } else {
          // ~1.2.3 == >=1.2.3 <1.3.0
          ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0'
        }

        debug('tilde return', ret)
        return ret
      })
    }

    // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
    // ^1.2.3 --> >=1.2.3 <2.0.0
    // ^1.2.0 --> >=1.2.0 <2.0.0
    function replaceCarets(comp, options) {
      return comp
        .trim()
        .split(/\s+/)
        .map(function (comp) {
          return replaceCaret(comp, options)
        })
        .join(' ')
    }

    function replaceCaret(comp, options) {
      debug('caret', comp, options)
      var r = options.loose ? re[CARETLOOSE] : re[CARET]
      return comp.replace(r, function (_, M, m, p, pr) {
        debug('caret', comp, _, M, m, p, pr)
        var ret

        if (isX(M)) {
          ret = ''
        } else if (isX(m)) {
          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
        } else if (isX(p)) {
          if (M === '0') {
            ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
          } else {
            ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'
          }
        } else if (pr) {
          debug('replaceCaret pr', pr)
          if (M === '0') {
            if (m === '0') {
              ret =
                '>=' +
                M +
                '.' +
                m +
                '.' +
                p +
                '-' +
                pr +
                ' <' +
                M +
                '.' +
                m +
                '.' +
                (+p + 1)
            } else {
              ret =
                '>=' +
                M +
                '.' +
                m +
                '.' +
                p +
                '-' +
                pr +
                ' <' +
                M +
                '.' +
                (+m + 1) +
                '.0'
            }
          } else {
            ret =
              '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + (+M + 1) + '.0.0'
          }
        } else {
          debug('no pr')
          if (M === '0') {
            if (m === '0') {
              ret =
                '>=' +
                M +
                '.' +
                m +
                '.' +
                p +
                ' <' +
                M +
                '.' +
                m +
                '.' +
                (+p + 1)
            } else {
              ret =
                '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0'
            }
          } else {
            ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0'
          }
        }

        debug('caret return', ret)
        return ret
      })
    }

    function replaceXRanges(comp, options) {
      debug('replaceXRanges', comp, options)
      return comp
        .split(/\s+/)
        .map(function (comp) {
          return replaceXRange(comp, options)
        })
        .join(' ')
    }

    function replaceXRange(comp, options) {
      comp = comp.trim()
      var r = options.loose ? re[XRANGELOOSE] : re[XRANGE]
      return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
        debug('xRange', comp, ret, gtlt, M, m, p, pr)
        var xM = isX(M)
        var xm = xM || isX(m)
        var xp = xm || isX(p)
        var anyX = xp

        if (gtlt === '=' && anyX) {
          gtlt = ''
        }

        if (xM) {
          if (gtlt === '>' || gtlt === '<') {
            // nothing is allowed
            ret = '<0.0.0'
          } else {
            // nothing is forbidden
            ret = '*'
          }
        } else if (gtlt && anyX) {
          // we know patch is an x, because we have any x at all.
          // replace X with 0
          if (xm) {
            m = 0
          }
          p = 0

          if (gtlt === '>') {
            // >1 => >=2.0.0
            // >1.2 => >=1.3.0
            // >1.2.3 => >= 1.2.4
            gtlt = '>='
            if (xm) {
              M = +M + 1
              m = 0
              p = 0
            } else {
              m = +m + 1
              p = 0
            }
          } else if (gtlt === '<=') {
            // <=0.7.x is actually <0.8.0, since any 0.7.x should
            // pass.  Similarly, <=7.x is actually <8.0.0, etc.
            gtlt = '<'
            if (xm) {
              M = +M + 1
            } else {
              m = +m + 1
            }
          }

          ret = gtlt + M + '.' + m + '.' + p
        } else if (xm) {
          ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
        } else if (xp) {
          ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
        }

        debug('xRange return', ret)

        return ret
      })
    }

    // Because * is AND-ed with everything else in the comparator,
    // and '' means "any version", just remove the *s entirely.
    function replaceStars(comp, options) {
      debug('replaceStars', comp, options)
      // Looseness is ignored here.  star is always as loose as it gets!
      return comp.trim().replace(re[STAR], '')
    }

    // This function is passed to string.replace(re[HYPHENRANGE])
    // M, m, patch, prerelease, build
    // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
    // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
    // 1.2 - 3.4 => >=1.2.0 <3.5.0
    function hyphenReplace(
      $0,
      from,
      fM,
      fm,
      fp,
      fpr,
      fb,
      to,
      tM,
      tm,
      tp,
      tpr,
      tb
    ) {
      if (isX(fM)) {
        from = ''
      } else if (isX(fm)) {
        from = '>=' + fM + '.0.0'
      } else if (isX(fp)) {
        from = '>=' + fM + '.' + fm + '.0'
      } else {
        from = '>=' + from
      }

      if (isX(tM)) {
        to = ''
      } else if (isX(tm)) {
        to = '<' + (+tM + 1) + '.0.0'
      } else if (isX(tp)) {
        to = '<' + tM + '.' + (+tm + 1) + '.0'
      } else if (tpr) {
        to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr
      } else {
        to = '<=' + to
      }

      return (from + ' ' + to).trim()
    }

    // if ANY of the sets match ALL of its comparators, then pass
    Range.prototype.test = function (version) {
      if (!version) {
        return false
      }

      if (typeof version === 'string') {
        version = new SemVer(version, this.options)
      }

      for (var i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true
        }
      }
      return false
    }

    function testSet(set, version, options) {
      for (var i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false
        }
      }

      if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for (i = 0; i < set.length; i++) {
          debug(set[i].semver)
          if (set[i].semver === ANY) {
            continue
          }

          if (set[i].semver.prerelease.length > 0) {
            var allowed = set[i].semver
            if (
              allowed.major === version.major &&
              allowed.minor === version.minor &&
              allowed.patch === version.patch
            ) {
              return true
            }
          }
        }

        // Version has a -pre, but it's not one of the ones we like.
        return false
      }

      return true
    }

    exports.satisfies = satisfies
    function satisfies(version, range, options) {
      try {
        range = new Range(range, options)
      } catch (er) {
        return false
      }
      return range.test(version)
    }

    exports.maxSatisfying = maxSatisfying
    function maxSatisfying(versions, range, options) {
      var max = null
      var maxSV = null
      try {
        var rangeObj = new Range(range, options)
      } catch (er) {
        return null
      }
      versions.forEach(function (v) {
        if (rangeObj.test(v)) {
          // satisfies(v, range, options)
          if (!max || maxSV.compare(v) === -1) {
            // compare(max, v, true)
            max = v
            maxSV = new SemVer(max, options)
          }
        }
      })
      return max
    }

    exports.minSatisfying = minSatisfying
    function minSatisfying(versions, range, options) {
      var min = null
      var minSV = null
      try {
        var rangeObj = new Range(range, options)
      } catch (er) {
        return null
      }
      versions.forEach(function (v) {
        if (rangeObj.test(v)) {
          // satisfies(v, range, options)
          if (!min || minSV.compare(v) === 1) {
            // compare(min, v, true)
            min = v
            minSV = new SemVer(min, options)
          }
        }
      })
      return min
    }

    exports.minVersion = minVersion
    function minVersion(range, loose) {
      range = new Range(range, loose)

      var minver = new SemVer('0.0.0')
      if (range.test(minver)) {
        return minver
      }

      minver = new SemVer('0.0.0-0')
      if (range.test(minver)) {
        return minver
      }

      minver = null
      for (var i = 0; i < range.set.length; ++i) {
        var comparators = range.set[i]

        comparators.forEach(function (comparator) {
          // Clone to avoid manipulating the comparator's semver object.
          var compver = new SemVer(comparator.semver.version)
          switch (comparator.operator) {
            case '>':
              if (compver.prerelease.length === 0) {
                compver.patch++
              } else {
                compver.prerelease.push(0)
              }
              compver.raw = compver.format()
            /* fallthrough */
            case '':
            case '>=':
              if (!minver || gt(minver, compver)) {
                minver = compver
              }
              break
            case '<':
            case '<=':
              /* Ignore maximum versions */
              break
            /* istanbul ignore next */
            default:
              throw new Error('Unexpected operation: ' + comparator.operator)
          }
        })
      }

      if (minver && range.test(minver)) {
        return minver
      }

      return null
    }

    exports.validRange = validRange
    function validRange(range, options) {
      try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*'
      } catch (er) {
        return null
      }
    }

    // Determine if version is less than all the versions possible in the range
    exports.ltr = ltr
    function ltr(version, range, options) {
      return outside(version, range, '<', options)
    }

    // Determine if version is greater than all the versions possible in the range.
    exports.gtr = gtr
    function gtr(version, range, options) {
      return outside(version, range, '>', options)
    }

    exports.outside = outside
    function outside(version, range, hilo, options) {
      version = new SemVer(version, options)
      range = new Range(range, options)

      var gtfn, ltefn, ltfn, comp, ecomp
      switch (hilo) {
        case '>':
          gtfn = gt
          ltefn = lte
          ltfn = lt
          comp = '>'
          ecomp = '>='
          break
        case '<':
          gtfn = lt
          ltefn = gte
          ltfn = gt
          comp = '<'
          ecomp = '<='
          break
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"')
      }

      // If it satisifes the range it is not outside
      if (satisfies(version, range, options)) {
        return false
      }

      // From now on, variable terms are as if we're in "gtr" mode.
      // but note that everything is flipped for the "ltr" function.

      for (var i = 0; i < range.set.length; ++i) {
        var comparators = range.set[i]

        var high = null
        var low = null

        comparators.forEach(function (comparator) {
          if (comparator.semver === ANY) {
            comparator = new Comparator('>=0.0.0')
          }
          high = high || comparator
          low = low || comparator
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator
          }
        })

        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
          return false
        }

        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if (
          (!low.operator || low.operator === comp) &&
          ltefn(version, low.semver)
        ) {
          return false
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false
        }
      }
      return true
    }

    exports.prerelease = prerelease
    function prerelease(version, options) {
      var parsed = parse(version, options)
      return parsed && parsed.prerelease.length ? parsed.prerelease : null
    }

    exports.intersects = intersects
    function intersects(r1, r2, options) {
      r1 = new Range(r1, options)
      r2 = new Range(r2, options)
      return r1.intersects(r2)
    }

    exports.coerce = coerce
    function coerce(version) {
      if (version instanceof SemVer) {
        return version
      }

      if (typeof version !== 'string') {
        return null
      }

      var match = version.match(re[COERCE])

      if (match == null) {
        return null
      }

      return parse(match[1] + '.' + (match[2] || '0') + '.' + (match[3] || '0'))
    }

    /***/
  },

  /***/ 2022: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var timespan = __nccwpck_require__(6098)
    var PS_SUPPORTED = __nccwpck_require__(9085)
    var jws = __nccwpck_require__(4636)
    var includes = __nccwpck_require__(7931)
    var isBoolean = __nccwpck_require__(6501)
    var isInteger = __nccwpck_require__(1441)
    var isNumber = __nccwpck_require__(298)
    var isPlainObject = __nccwpck_require__(5723)
    var isString = __nccwpck_require__(5180)
    var once = __nccwpck_require__(4499)

    var SUPPORTED_ALGS = [
      'RS256',
      'RS384',
      'RS512',
      'ES256',
      'ES384',
      'ES512',
      'HS256',
      'HS384',
      'HS512',
      'none'
    ]
    if (PS_SUPPORTED) {
      SUPPORTED_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512')
    }

    var sign_options_schema = {
      expiresIn: {
        isValid: function (value) {
          return isInteger(value) || (isString(value) && value)
        },
        message:
          '"expiresIn" should be a number of seconds or string representing a timespan'
      },
      notBefore: {
        isValid: function (value) {
          return isInteger(value) || (isString(value) && value)
        },
        message:
          '"notBefore" should be a number of seconds or string representing a timespan'
      },
      audience: {
        isValid: function (value) {
          return isString(value) || Array.isArray(value)
        },
        message: '"audience" must be a string or array'
      },
      algorithm: {
        isValid: includes.bind(null, SUPPORTED_ALGS),
        message: '"algorithm" must be a valid string enum value'
      },
      header: { isValid: isPlainObject, message: '"header" must be an object' },
      encoding: { isValid: isString, message: '"encoding" must be a string' },
      issuer: { isValid: isString, message: '"issuer" must be a string' },
      subject: { isValid: isString, message: '"subject" must be a string' },
      jwtid: { isValid: isString, message: '"jwtid" must be a string' },
      noTimestamp: {
        isValid: isBoolean,
        message: '"noTimestamp" must be a boolean'
      },
      keyid: { isValid: isString, message: '"keyid" must be a string' },
      mutatePayload: {
        isValid: isBoolean,
        message: '"mutatePayload" must be a boolean'
      }
    }

    var registered_claims_schema = {
      iat: {
        isValid: isNumber,
        message: '"iat" should be a number of seconds'
      },
      exp: {
        isValid: isNumber,
        message: '"exp" should be a number of seconds'
      },
      nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
    }

    function validate(schema, allowUnknown, object, parameterName) {
      if (!isPlainObject(object)) {
        throw new Error(
          'Expected "' + parameterName + '" to be a plain object.'
        )
      }
      Object.keys(object).forEach(function (key) {
        var validator = schema[key]
        if (!validator) {
          if (!allowUnknown) {
            throw new Error(
              '"' + key + '" is not allowed in "' + parameterName + '"'
            )
          }
          return
        }
        if (!validator.isValid(object[key])) {
          throw new Error(validator.message)
        }
      })
    }

    function validateOptions(options) {
      return validate(sign_options_schema, false, options, 'options')
    }

    function validatePayload(payload) {
      return validate(registered_claims_schema, true, payload, 'payload')
    }

    var options_to_payload = {
      audience: 'aud',
      issuer: 'iss',
      subject: 'sub',
      jwtid: 'jti'
    }

    var options_for_objects = [
      'expiresIn',
      'notBefore',
      'noTimestamp',
      'audience',
      'issuer',
      'subject',
      'jwtid'
    ]

    module.exports = function (payload, secretOrPrivateKey, options, callback) {
      if (typeof options === 'function') {
        callback = options
        options = {}
      } else {
        options = options || {}
      }

      var isObjectPayload =
        typeof payload === 'object' && !Buffer.isBuffer(payload)

      var header = Object.assign(
        {
          alg: options.algorithm || 'HS256',
          typ: isObjectPayload ? 'JWT' : undefined,
          kid: options.keyid
        },
        options.header
      )

      function failure(err) {
        if (callback) {
          return callback(err)
        }
        throw err
      }

      if (!secretOrPrivateKey && options.algorithm !== 'none') {
        return failure(new Error('secretOrPrivateKey must have a value'))
      }

      if (typeof payload === 'undefined') {
        return failure(new Error('payload is required'))
      } else if (isObjectPayload) {
        try {
          validatePayload(payload)
        } catch (error) {
          return failure(error)
        }
        if (!options.mutatePayload) {
          payload = Object.assign({}, payload)
        }
      } else {
        var invalid_options = options_for_objects.filter(function (opt) {
          return typeof options[opt] !== 'undefined'
        })

        if (invalid_options.length > 0) {
          return failure(
            new Error(
              'invalid ' +
                invalid_options.join(',') +
                ' option for ' +
                typeof payload +
                ' payload'
            )
          )
        }
      }

      if (
        typeof payload.exp !== 'undefined' &&
        typeof options.expiresIn !== 'undefined'
      ) {
        return failure(
          new Error(
            'Bad "options.expiresIn" option the payload already has an "exp" property.'
          )
        )
      }

      if (
        typeof payload.nbf !== 'undefined' &&
        typeof options.notBefore !== 'undefined'
      ) {
        return failure(
          new Error(
            'Bad "options.notBefore" option the payload already has an "nbf" property.'
          )
        )
      }

      try {
        validateOptions(options)
      } catch (error) {
        return failure(error)
      }

      var timestamp = payload.iat || Math.floor(Date.now() / 1000)

      if (options.noTimestamp) {
        delete payload.iat
      } else if (isObjectPayload) {
        payload.iat = timestamp
      }

      if (typeof options.notBefore !== 'undefined') {
        try {
          payload.nbf = timespan(options.notBefore, timestamp)
        } catch (err) {
          return failure(err)
        }
        if (typeof payload.nbf === 'undefined') {
          return failure(
            new Error(
              '"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
            )
          )
        }
      }

      if (
        typeof options.expiresIn !== 'undefined' &&
        typeof payload === 'object'
      ) {
        try {
          payload.exp = timespan(options.expiresIn, timestamp)
        } catch (err) {
          return failure(err)
        }
        if (typeof payload.exp === 'undefined') {
          return failure(
            new Error(
              '"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
            )
          )
        }
      }

      Object.keys(options_to_payload).forEach(function (key) {
        var claim = options_to_payload[key]
        if (typeof options[key] !== 'undefined') {
          if (typeof payload[claim] !== 'undefined') {
            return failure(
              new Error(
                'Bad "options.' +
                  key +
                  '" option. The payload already has an "' +
                  claim +
                  '" property.'
              )
            )
          }
          payload[claim] = options[key]
        }
      })

      var encoding = options.encoding || 'utf8'

      if (typeof callback === 'function') {
        callback = callback && once(callback)

        jws
          .createSign({
            header: header,
            privateKey: secretOrPrivateKey,
            payload: payload,
            encoding: encoding
          })
          .once('error', callback)
          .once('done', function (signature) {
            callback(null, signature)
          })
      } else {
        return jws.sign({
          header: header,
          payload: payload,
          secret: secretOrPrivateKey,
          encoding: encoding
        })
      }
    }

    /***/
  },

  /***/ 2327: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var JsonWebTokenError = __nccwpck_require__(405)
    var NotBeforeError = __nccwpck_require__(4383)
    var TokenExpiredError = __nccwpck_require__(6637)
    var decode = __nccwpck_require__(3359)
    var timespan = __nccwpck_require__(6098)
    var PS_SUPPORTED = __nccwpck_require__(9085)
    var jws = __nccwpck_require__(4636)

    var PUB_KEY_ALGS = ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512']
    var RSA_KEY_ALGS = ['RS256', 'RS384', 'RS512']
    var HS_ALGS = ['HS256', 'HS384', 'HS512']

    if (PS_SUPPORTED) {
      PUB_KEY_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512')
      RSA_KEY_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512')
    }

    module.exports = function (
      jwtString,
      secretOrPublicKey,
      options,
      callback
    ) {
      if (typeof options === 'function' && !callback) {
        callback = options
        options = {}
      }

      if (!options) {
        options = {}
      }

      //clone this object since we are going to mutate it.
      options = Object.assign({}, options)

      var done

      if (callback) {
        done = callback
      } else {
        done = function (err, data) {
          if (err) throw err
          return data
        }
      }

      if (
        options.clockTimestamp &&
        typeof options.clockTimestamp !== 'number'
      ) {
        return done(new JsonWebTokenError('clockTimestamp must be a number'))
      }

      if (
        options.nonce !== undefined &&
        (typeof options.nonce !== 'string' || options.nonce.trim() === '')
      ) {
        return done(new JsonWebTokenError('nonce must be a non-empty string'))
      }

      var clockTimestamp =
        options.clockTimestamp || Math.floor(Date.now() / 1000)

      if (!jwtString) {
        return done(new JsonWebTokenError('jwt must be provided'))
      }

      if (typeof jwtString !== 'string') {
        return done(new JsonWebTokenError('jwt must be a string'))
      }

      var parts = jwtString.split('.')

      if (parts.length !== 3) {
        return done(new JsonWebTokenError('jwt malformed'))
      }

      var decodedToken

      try {
        decodedToken = decode(jwtString, { complete: true })
      } catch (err) {
        return done(err)
      }

      if (!decodedToken) {
        return done(new JsonWebTokenError('invalid token'))
      }

      var header = decodedToken.header
      var getSecret

      if (typeof secretOrPublicKey === 'function') {
        if (!callback) {
          return done(
            new JsonWebTokenError(
              'verify must be called asynchronous if secret or public key is provided as a callback'
            )
          )
        }

        getSecret = secretOrPublicKey
      } else {
        getSecret = function (header, secretCallback) {
          return secretCallback(null, secretOrPublicKey)
        }
      }

      return getSecret(header, function (err, secretOrPublicKey) {
        if (err) {
          return done(
            new JsonWebTokenError(
              'error in secret or public key callback: ' + err.message
            )
          )
        }

        var hasSignature = parts[2].trim() !== ''

        if (!hasSignature && secretOrPublicKey) {
          return done(new JsonWebTokenError('jwt signature is required'))
        }

        if (hasSignature && !secretOrPublicKey) {
          return done(
            new JsonWebTokenError('secret or public key must be provided')
          )
        }

        if (!hasSignature && !options.algorithms) {
          options.algorithms = ['none']
        }

        if (!options.algorithms) {
          options.algorithms =
            ~secretOrPublicKey.toString().indexOf('BEGIN CERTIFICATE') ||
            ~secretOrPublicKey.toString().indexOf('BEGIN PUBLIC KEY')
              ? PUB_KEY_ALGS
              : ~secretOrPublicKey.toString().indexOf('BEGIN RSA PUBLIC KEY')
              ? RSA_KEY_ALGS
              : HS_ALGS
        }

        if (!~options.algorithms.indexOf(decodedToken.header.alg)) {
          return done(new JsonWebTokenError('invalid algorithm'))
        }

        var valid

        try {
          valid = jws.verify(
            jwtString,
            decodedToken.header.alg,
            secretOrPublicKey
          )
        } catch (e) {
          return done(e)
        }

        if (!valid) {
          return done(new JsonWebTokenError('invalid signature'))
        }

        var payload = decodedToken.payload

        if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
          if (typeof payload.nbf !== 'number') {
            return done(new JsonWebTokenError('invalid nbf value'))
          }
          if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
            return done(
              new NotBeforeError('jwt not active', new Date(payload.nbf * 1000))
            )
          }
        }

        if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
          if (typeof payload.exp !== 'number') {
            return done(new JsonWebTokenError('invalid exp value'))
          }
          if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
            return done(
              new TokenExpiredError('jwt expired', new Date(payload.exp * 1000))
            )
          }
        }

        if (options.audience) {
          var audiences = Array.isArray(options.audience)
            ? options.audience
            : [options.audience]
          var target = Array.isArray(payload.aud) ? payload.aud : [payload.aud]

          var match = target.some(function (targetAudience) {
            return audiences.some(function (audience) {
              return audience instanceof RegExp
                ? audience.test(targetAudience)
                : audience === targetAudience
            })
          })

          if (!match) {
            return done(
              new JsonWebTokenError(
                'jwt audience invalid. expected: ' + audiences.join(' or ')
              )
            )
          }
        }

        if (options.issuer) {
          var invalid_issuer =
            (typeof options.issuer === 'string' &&
              payload.iss !== options.issuer) ||
            (Array.isArray(options.issuer) &&
              options.issuer.indexOf(payload.iss) === -1)

          if (invalid_issuer) {
            return done(
              new JsonWebTokenError(
                'jwt issuer invalid. expected: ' + options.issuer
              )
            )
          }
        }

        if (options.subject) {
          if (payload.sub !== options.subject) {
            return done(
              new JsonWebTokenError(
                'jwt subject invalid. expected: ' + options.subject
              )
            )
          }
        }

        if (options.jwtid) {
          if (payload.jti !== options.jwtid) {
            return done(
              new JsonWebTokenError(
                'jwt jwtid invalid. expected: ' + options.jwtid
              )
            )
          }
        }

        if (options.nonce) {
          if (payload.nonce !== options.nonce) {
            return done(
              new JsonWebTokenError(
                'jwt nonce invalid. expected: ' + options.nonce
              )
            )
          }
        }

        if (options.maxAge) {
          if (typeof payload.iat !== 'number') {
            return done(
              new JsonWebTokenError('iat required when maxAge is specified')
            )
          }

          var maxAgeTimestamp = timespan(options.maxAge, payload.iat)
          if (typeof maxAgeTimestamp === 'undefined') {
            return done(
              new JsonWebTokenError(
                '"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'
              )
            )
          }
          if (
            clockTimestamp >=
            maxAgeTimestamp + (options.clockTolerance || 0)
          ) {
            return done(
              new TokenExpiredError(
                'maxAge exceeded',
                new Date(maxAgeTimestamp * 1000)
              )
            )
          }
        }

        if (options.complete === true) {
          var signature = decodedToken.signature

          return done(null, {
            header: header,
            payload: payload,
            signature: signature
          })
        }

        return done(null, payload)
      })
    }

    /***/
  },

  /***/ 6010: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var bufferEqual = __nccwpck_require__(9239)
    var Buffer = __nccwpck_require__(1867).Buffer
    var crypto = __nccwpck_require__(6113)
    var formatEcdsa = __nccwpck_require__(1728)
    var util = __nccwpck_require__(3837)

    var MSG_INVALID_ALGORITHM =
      '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".'
    var MSG_INVALID_SECRET = 'secret must be a string or buffer'
    var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer'
    var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object'

    var supportsKeyObjects = typeof crypto.createPublicKey === 'function'
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += ' or a KeyObject'
      MSG_INVALID_SECRET += 'or a KeyObject'
    }

    function checkIsPublicKey(key) {
      if (Buffer.isBuffer(key)) {
        return
      }

      if (typeof key === 'string') {
        return
      }

      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY)
      }

      if (typeof key !== 'object') {
        throw typeError(MSG_INVALID_VERIFIER_KEY)
      }

      if (typeof key.type !== 'string') {
        throw typeError(MSG_INVALID_VERIFIER_KEY)
      }

      if (typeof key.asymmetricKeyType !== 'string') {
        throw typeError(MSG_INVALID_VERIFIER_KEY)
      }

      if (typeof key.export !== 'function') {
        throw typeError(MSG_INVALID_VERIFIER_KEY)
      }
    }

    function checkIsPrivateKey(key) {
      if (Buffer.isBuffer(key)) {
        return
      }

      if (typeof key === 'string') {
        return
      }

      if (typeof key === 'object') {
        return
      }

      throw typeError(MSG_INVALID_SIGNER_KEY)
    }

    function checkIsSecretKey(key) {
      if (Buffer.isBuffer(key)) {
        return
      }

      if (typeof key === 'string') {
        return key
      }

      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET)
      }

      if (typeof key !== 'object') {
        throw typeError(MSG_INVALID_SECRET)
      }

      if (key.type !== 'secret') {
        throw typeError(MSG_INVALID_SECRET)
      }

      if (typeof key.export !== 'function') {
        throw typeError(MSG_INVALID_SECRET)
      }
    }

    function fromBase64(base64) {
      return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    }

    function toBase64(base64url) {
      base64url = base64url.toString()

      var padding = 4 - (base64url.length % 4)
      if (padding !== 4) {
        for (var i = 0; i < padding; ++i) {
          base64url += '='
        }
      }

      return base64url.replace(/\-/g, '+').replace(/_/g, '/')
    }

    function typeError(template) {
      var args = [].slice.call(arguments, 1)
      var errMsg = util.format.bind(util, template).apply(null, args)
      return new TypeError(errMsg)
    }

    function bufferOrString(obj) {
      return Buffer.isBuffer(obj) || typeof obj === 'string'
    }

    function normalizeInput(thing) {
      if (!bufferOrString(thing)) thing = JSON.stringify(thing)
      return thing
    }

    function createHmacSigner(bits) {
      return function sign(thing, secret) {
        checkIsSecretKey(secret)
        thing = normalizeInput(thing)
        var hmac = crypto.createHmac('sha' + bits, secret)
        var sig = (hmac.update(thing), hmac.digest('base64'))
        return fromBase64(sig)
      }
    }

    function createHmacVerifier(bits) {
      return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret)
        return bufferEqual(Buffer.from(signature), Buffer.from(computedSig))
      }
    }

    function createKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey)
        thing = normalizeInput(thing)
        // Even though we are specifying "RSA" here, this works with ECDSA
        // keys as well.
        var signer = crypto.createSign('RSA-SHA' + bits)
        var sig = (signer.update(thing), signer.sign(privateKey, 'base64'))
        return fromBase64(sig)
      }
    }

    function createKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey)
        thing = normalizeInput(thing)
        signature = toBase64(signature)
        var verifier = crypto.createVerify('RSA-SHA' + bits)
        verifier.update(thing)
        return verifier.verify(publicKey, signature, 'base64')
      }
    }

    function createPSSKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey)
        thing = normalizeInput(thing)
        var signer = crypto.createSign('RSA-SHA' + bits)
        var sig =
          (signer.update(thing),
          signer.sign(
            {
              key: privateKey,
              padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
              saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
            },
            'base64'
          ))
        return fromBase64(sig)
      }
    }

    function createPSSKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey)
        thing = normalizeInput(thing)
        signature = toBase64(signature)
        var verifier = crypto.createVerify('RSA-SHA' + bits)
        verifier.update(thing)
        return verifier.verify(
          {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
          },
          signature,
          'base64'
        )
      }
    }

    function createECDSASigner(bits) {
      var inner = createKeySigner(bits)
      return function sign() {
        var signature = inner.apply(null, arguments)
        signature = formatEcdsa.derToJose(signature, 'ES' + bits)
        return signature
      }
    }

    function createECDSAVerifer(bits) {
      var inner = createKeyVerifier(bits)
      return function verify(thing, signature, publicKey) {
        signature = formatEcdsa
          .joseToDer(signature, 'ES' + bits)
          .toString('base64')
        var result = inner(thing, signature, publicKey)
        return result
      }
    }

    function createNoneSigner() {
      return function sign() {
        return ''
      }
    }

    function createNoneVerifier() {
      return function verify(thing, signature) {
        return signature === ''
      }
    }

    module.exports = function jwa(algorithm) {
      var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
      }
      var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
      }
      var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i)
      if (!match) throw typeError(MSG_INVALID_ALGORITHM, algorithm)
      var algo = (match[1] || match[3]).toLowerCase()
      var bits = match[2]

      return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
      }
    }

    /***/
  },

  /***/ 4636: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    /*global exports*/
    var SignStream = __nccwpck_require__(3334)
    var VerifyStream = __nccwpck_require__(5522)

    var ALGORITHMS = [
      'HS256',
      'HS384',
      'HS512',
      'RS256',
      'RS384',
      'RS512',
      'PS256',
      'PS384',
      'PS512',
      'ES256',
      'ES384',
      'ES512'
    ]

    exports.ALGORITHMS = ALGORITHMS
    exports.sign = SignStream.sign
    exports.verify = VerifyStream.verify
    exports.decode = VerifyStream.decode
    exports.isValid = VerifyStream.isValid
    exports.createSign = function createSign(opts) {
      return new SignStream(opts)
    }
    exports.createVerify = function createVerify(opts) {
      return new VerifyStream(opts)
    }

    /***/
  },

  /***/ 1868: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*global module, process*/
    var Buffer = __nccwpck_require__(1867).Buffer
    var Stream = __nccwpck_require__(2781)
    var util = __nccwpck_require__(3837)

    function DataStream(data) {
      this.buffer = null
      this.writable = true
      this.readable = true

      // No input
      if (!data) {
        this.buffer = Buffer.alloc(0)
        return this
      }

      // Stream
      if (typeof data.pipe === 'function') {
        this.buffer = Buffer.alloc(0)
        data.pipe(this)
        return this
      }

      // Buffer or String
      // or Object (assumedly a passworded key)
      if (data.length || typeof data === 'object') {
        this.buffer = data
        this.writable = false
        process.nextTick(
          function () {
            this.emit('end', data)
            this.readable = false
            this.emit('close')
          }.bind(this)
        )
        return this
      }

      throw new TypeError('Unexpected data type (' + typeof data + ')')
    }
    util.inherits(DataStream, Stream)

    DataStream.prototype.write = function write(data) {
      this.buffer = Buffer.concat([this.buffer, Buffer.from(data)])
      this.emit('data', data)
    }

    DataStream.prototype.end = function end(data) {
      if (data) this.write(data)
      this.emit('end', data)
      this.emit('close')
      this.writable = false
      this.readable = false
    }

    module.exports = DataStream

    /***/
  },

  /***/ 3334: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*global module*/
    var Buffer = __nccwpck_require__(1867).Buffer
    var DataStream = __nccwpck_require__(1868)
    var jwa = __nccwpck_require__(6010)
    var Stream = __nccwpck_require__(2781)
    var toString = __nccwpck_require__(5292)
    var util = __nccwpck_require__(3837)

    function base64url(string, encoding) {
      return Buffer.from(string, encoding)
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
    }

    function jwsSecuredInput(header, payload, encoding) {
      encoding = encoding || 'utf8'
      var encodedHeader = base64url(toString(header), 'binary')
      var encodedPayload = base64url(toString(payload), encoding)
      return util.format('%s.%s', encodedHeader, encodedPayload)
    }

    function jwsSign(opts) {
      var header = opts.header
      var payload = opts.payload
      var secretOrKey = opts.secret || opts.privateKey
      var encoding = opts.encoding
      var algo = jwa(header.alg)
      var securedInput = jwsSecuredInput(header, payload, encoding)
      var signature = algo.sign(securedInput, secretOrKey)
      return util.format('%s.%s', securedInput, signature)
    }

    function SignStream(opts) {
      var secret = opts.secret || opts.privateKey || opts.key
      var secretStream = new DataStream(secret)
      this.readable = true
      this.header = opts.header
      this.encoding = opts.encoding
      this.secret = this.privateKey = this.key = secretStream
      this.payload = new DataStream(opts.payload)
      this.secret.once(
        'close',
        function () {
          if (!this.payload.writable && this.readable) this.sign()
        }.bind(this)
      )

      this.payload.once(
        'close',
        function () {
          if (!this.secret.writable && this.readable) this.sign()
        }.bind(this)
      )
    }
    util.inherits(SignStream, Stream)

    SignStream.prototype.sign = function sign() {
      try {
        var signature = jwsSign({
          header: this.header,
          payload: this.payload.buffer,
          secret: this.secret.buffer,
          encoding: this.encoding
        })
        this.emit('done', signature)
        this.emit('data', signature)
        this.emit('end')
        this.readable = false
        return signature
      } catch (e) {
        this.readable = false
        this.emit('error', e)
        this.emit('close')
      }
    }

    SignStream.sign = jwsSign

    module.exports = SignStream

    /***/
  },

  /***/ 5292: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*global module*/
    var Buffer = __nccwpck_require__(4300).Buffer

    module.exports = function toString(obj) {
      if (typeof obj === 'string') return obj
      if (typeof obj === 'number' || Buffer.isBuffer(obj)) return obj.toString()
      return JSON.stringify(obj)
    }

    /***/
  },

  /***/ 5522: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    /*global module*/
    var Buffer = __nccwpck_require__(1867).Buffer
    var DataStream = __nccwpck_require__(1868)
    var jwa = __nccwpck_require__(6010)
    var Stream = __nccwpck_require__(2781)
    var toString = __nccwpck_require__(5292)
    var util = __nccwpck_require__(3837)
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/

    function isObject(thing) {
      return Object.prototype.toString.call(thing) === '[object Object]'
    }

    function safeJsonParse(thing) {
      if (isObject(thing)) return thing
      try {
        return JSON.parse(thing)
      } catch (e) {
        return undefined
      }
    }

    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split('.', 1)[0]
      return safeJsonParse(
        Buffer.from(encodedHeader, 'base64').toString('binary')
      )
    }

    function securedInputFromJWS(jwsSig) {
      return jwsSig.split('.', 2).join('.')
    }

    function signatureFromJWS(jwsSig) {
      return jwsSig.split('.')[2]
    }

    function payloadFromJWS(jwsSig, encoding) {
      encoding = encoding || 'utf8'
      var payload = jwsSig.split('.')[1]
      return Buffer.from(payload, 'base64').toString(encoding)
    }

    function isValidJws(string) {
      return JWS_REGEX.test(string) && !!headerFromJWS(string)
    }

    function jwsVerify(jwsSig, algorithm, secretOrKey) {
      if (!algorithm) {
        var err = new Error('Missing algorithm parameter for jws.verify')
        err.code = 'MISSING_ALGORITHM'
        throw err
      }
      jwsSig = toString(jwsSig)
      var signature = signatureFromJWS(jwsSig)
      var securedInput = securedInputFromJWS(jwsSig)
      var algo = jwa(algorithm)
      return algo.verify(securedInput, signature, secretOrKey)
    }

    function jwsDecode(jwsSig, opts) {
      opts = opts || {}
      jwsSig = toString(jwsSig)

      if (!isValidJws(jwsSig)) return null

      var header = headerFromJWS(jwsSig)

      if (!header) return null

      var payload = payloadFromJWS(jwsSig)
      if (header.typ === 'JWT' || opts.json)
        payload = JSON.parse(payload, opts.encoding)

      return {
        header: header,
        payload: payload,
        signature: signatureFromJWS(jwsSig)
      }
    }

    function VerifyStream(opts) {
      opts = opts || {}
      var secretOrKey = opts.secret || opts.publicKey || opts.key
      var secretStream = new DataStream(secretOrKey)
      this.readable = true
      this.algorithm = opts.algorithm
      this.encoding = opts.encoding
      this.secret = this.publicKey = this.key = secretStream
      this.signature = new DataStream(opts.signature)
      this.secret.once(
        'close',
        function () {
          if (!this.signature.writable && this.readable) this.verify()
        }.bind(this)
      )

      this.signature.once(
        'close',
        function () {
          if (!this.secret.writable && this.readable) this.verify()
        }.bind(this)
      )
    }
    util.inherits(VerifyStream, Stream)
    VerifyStream.prototype.verify = function verify() {
      try {
        var valid = jwsVerify(
          this.signature.buffer,
          this.algorithm,
          this.key.buffer
        )
        var obj = jwsDecode(this.signature.buffer, this.encoding)
        this.emit('done', valid, obj)
        this.emit('data', valid)
        this.emit('end')
        this.readable = false
        return valid
      } catch (e) {
        this.readable = false
        this.emit('error', e)
        this.emit('close')
      }
    }

    VerifyStream.decode = jwsDecode
    VerifyStream.isValid = isValidJws
    VerifyStream.verify = jwsVerify

    module.exports = VerifyStream

    /***/
  },

  /***/ 7931: /***/ (module) => {
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e308,
      NAN = 0 / 0

    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]'

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i

    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt

    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
        length = array ? array.length : 0,
        result = Array(length)

      while (++index < length) {
        result[index] = iteratee(array[index], index, array)
      }
      return result
    }

    /**
     * The base implementation of `_.findIndex` and `_.findLastIndex` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} predicate The function invoked per iteration.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1)

      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index
        }
      }
      return -1
    }

    /**
     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex)
      }
      var index = fromIndex - 1,
        length = array.length

      while (++index < length) {
        if (array[index] === value) {
          return index
        }
      }
      return -1
    }

    /**
     * The base implementation of `_.isNaN` without support for number objects.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     */
    function baseIsNaN(value) {
      return value !== value
    }

    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
      var index = -1,
        result = Array(n)

      while (++index < n) {
        result[index] = iteratee(index)
      }
      return result
    }

    /**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */
    function baseValues(object, props) {
      return arrayMap(props, function (key) {
        return object[key]
      })
    }

    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg))
      }
    }

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString

    /** Built-in value references. */
    var propertyIsEnumerable = objectProto.propertyIsEnumerable

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeKeys = overArg(Object.keys, Object),
      nativeMax = Math.max

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      // Safari 9 makes `arguments.length` enumerable in strict mode.
      var result =
        isArray(value) || isArguments(value)
          ? baseTimes(value.length, String)
          : []

      var length = result.length,
        skipIndexes = !!length

      for (var key in value) {
        if (
          (inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (key == 'length' || isIndex(key, length)))
        ) {
          result.push(key)
        }
      }
      return result
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object)
      }
      var result = []
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key)
        }
      }
      return result
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length
      return (
        !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        value > -1 &&
        value % 1 == 0 &&
        value < length
      )
    }

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto

      return value === proto
    }

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection)
      fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0

      var length = collection.length
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0)
      }
      return isString(collection)
        ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1
        : !!length && baseIndexOf(collection, value, fromIndex) > -1
    }

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
      return (
        isArrayLikeObject(value) &&
        hasOwnProperty.call(value, 'callee') &&
        (!propertyIsEnumerable.call(value, 'callee') ||
          objectToString.call(value) == argsTag)
      )
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value)
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value)
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8-9 which returns 'object' for typed array and other constructors.
      var tag = isObject(value) ? objectToString.call(value) : ''
      return tag == funcTag || tag == genTag
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return (
        typeof value == 'number' &&
        value > -1 &&
        value % 1 == 0 &&
        value <= MAX_SAFE_INTEGER
      )
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value
      return !!value && (type == 'object' || type == 'function')
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object'
    }

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return (
        typeof value == 'string' ||
        (!isArray(value) &&
          isObjectLike(value) &&
          objectToString.call(value) == stringTag)
      )
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return (
        typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag)
      )
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0
      }
      value = toNumber(value)
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1
        return sign * MAX_INTEGER
      }
      return value === value ? value : 0
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
        remainder = result % 1

      return result === result ? (remainder ? result - remainder : result) : 0
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value
      }
      if (isSymbol(value)) {
        return NAN
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value
        value = isObject(other) ? other + '' : other
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value
      }
      value = value.replace(reTrim, '')
      var isBinary = reIsBinary.test(value)
      return isBinary || reIsOctal.test(value)
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : reIsBadHex.test(value)
        ? NAN
        : +value
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object)
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object ? baseValues(object, keys(object)) : []
    }

    module.exports = includes

    /***/
  },

  /***/ 6501: /***/ (module) => {
    /**
     * lodash 3.0.3 (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Available under MIT license <https://lodash.com/license>
     */

    /** `Object#toString` result references. */
    var boolTag = '[object Boolean]'

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return (
        value === true ||
        value === false ||
        (isObjectLike(value) && objectToString.call(value) == boolTag)
      )
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object'
    }

    module.exports = isBoolean

    /***/
  },

  /***/ 1441: /***/ (module) => {
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e308,
      NAN = 0 / 0

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]'

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value)
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value
      return !!value && (type == 'object' || type == 'function')
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object'
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return (
        typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag)
      )
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0
      }
      value = toNumber(value)
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1
        return sign * MAX_INTEGER
      }
      return value === value ? value : 0
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
        remainder = result % 1

      return result === result ? (remainder ? result - remainder : result) : 0
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value
      }
      if (isSymbol(value)) {
        return NAN
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value
        value = isObject(other) ? other + '' : other
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value
      }
      value = value.replace(reTrim, '')
      var isBinary = reIsBinary.test(value)
      return isBinary || reIsOctal.test(value)
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : reIsBadHex.test(value)
        ? NAN
        : +value
    }

    module.exports = isInteger

    /***/
  },

  /***/ 298: /***/ (module) => {
    /**
     * lodash 3.0.3 (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Available under MIT license <https://lodash.com/license>
     */

    /** `Object#toString` result references. */
    var numberTag = '[object Number]'

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object'
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
     * as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return (
        typeof value == 'number' ||
        (isObjectLike(value) && objectToString.call(value) == numberTag)
      )
    }

    module.exports = isNumber

    /***/
  },

  /***/ 5723: /***/ (module) => {
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** `Object#toString` result references. */
    var objectTag = '[object Object]'

    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */
    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false
      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '')
        } catch (e) {}
      }
      return result
    }

    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
      return function (arg) {
        return func(transform(arg))
      }
    }

    /** Used for built-in method references. */
    var funcProto = Function.prototype,
      objectProto = Object.prototype

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object)

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString

    /** Built-in value references. */
    var getPrototype = overArg(Object.getPrototypeOf, Object)

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object'
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (
        !isObjectLike(value) ||
        objectToString.call(value) != objectTag ||
        isHostObject(value)
      ) {
        return false
      }
      var proto = getPrototype(value)
      if (proto === null) {
        return true
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor
      return (
        typeof Ctor == 'function' &&
        Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString
      )
    }

    module.exports = isPlainObject

    /***/
  },

  /***/ 5180: /***/ (module) => {
    /**
     * lodash 4.0.1 (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Available under MIT license <https://lodash.com/license>
     */

    /** `Object#toString` result references. */
    var stringTag = '[object String]'

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object'
    }

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return (
        typeof value == 'string' ||
        (!isArray(value) &&
          isObjectLike(value) &&
          objectToString.call(value) == stringTag)
      )
    }

    module.exports = isString

    /***/
  },

  /***/ 4499: /***/ (module) => {
    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function'

    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e308,
      NAN = 0 / 0

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]'

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt

    /** Used for built-in method references. */
    var objectProto = Object.prototype

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT)
      }
      n = toInteger(n)
      return function () {
        if (--n > 0) {
          result = func.apply(this, arguments)
        }
        if (n <= 1) {
          func = undefined
        }
        return result
      }
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func)
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value
      return !!value && (type == 'object' || type == 'function')
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object'
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return (
        typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag)
      )
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0
      }
      value = toNumber(value)
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1
        return sign * MAX_INTEGER
      }
      return value === value ? value : 0
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
        remainder = result % 1

      return result === result ? (remainder ? result - remainder : result) : 0
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value
      }
      if (isSymbol(value)) {
        return NAN
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value
        value = isObject(other) ? other + '' : other
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value
      }
      value = value.replace(reTrim, '')
      var isBinary = reIsBinary.test(value)
      return isBinary || reIsOctal.test(value)
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : reIsBadHex.test(value)
        ? NAN
        : +value
    }

    module.exports = once

    /***/
  },

  /***/ 7129: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    // A linked list to keep track of recently-used-ness
    const Yallist = __nccwpck_require__(665)

    const MAX = Symbol('max')
    const LENGTH = Symbol('length')
    const LENGTH_CALCULATOR = Symbol('lengthCalculator')
    const ALLOW_STALE = Symbol('allowStale')
    const MAX_AGE = Symbol('maxAge')
    const DISPOSE = Symbol('dispose')
    const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
    const LRU_LIST = Symbol('lruList')
    const CACHE = Symbol('cache')
    const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

    const naiveLength = () => 1

    // lruList is a yallist where the head is the youngest
    // item, and the tail is the oldest.  the list contains the Hit
    // objects as the entries.
    // Each Hit object has a reference to its Yallist.Node.  This
    // never changes.
    //
    // cache is a Map (or PseudoMap) that matches the keys to
    // the Yallist.Node object.
    class LRUCache {
      constructor(options) {
        if (typeof options === 'number') options = { max: options }

        if (!options) options = {}

        if (options.max && (typeof options.max !== 'number' || options.max < 0))
          throw new TypeError('max must be a non-negative number')
        // Kind of weird to have a default max of Infinity, but oh well.
        const max = (this[MAX] = options.max || Infinity)

        const lc = options.length || naiveLength
        this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc
        this[ALLOW_STALE] = options.stale || false
        if (options.maxAge && typeof options.maxAge !== 'number')
          throw new TypeError('maxAge must be a number')
        this[MAX_AGE] = options.maxAge || 0
        this[DISPOSE] = options.dispose
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
        this.reset()
      }

      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== 'number' || mL < 0)
          throw new TypeError('max must be a non-negative number')

        this[MAX] = mL || Infinity
        trim(this)
      }
      get max() {
        return this[MAX]
      }

      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale
      }
      get allowStale() {
        return this[ALLOW_STALE]
      }

      set maxAge(mA) {
        if (typeof mA !== 'number')
          throw new TypeError('maxAge must be a non-negative number')

        this[MAX_AGE] = mA
        trim(this)
      }
      get maxAge() {
        return this[MAX_AGE]
      }

      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== 'function') lC = naiveLength

        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC
          this[LENGTH] = 0
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
            this[LENGTH] += hit.length
          })
        }
        trim(this)
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR]
      }

      get length() {
        return this[LENGTH]
      }
      get itemCount() {
        return this[LRU_LIST].length
      }

      rforEach(fn, thisp) {
        thisp = thisp || this
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev
          forEachStep(this, fn, walker, thisp)
          walker = prev
        }
      }

      forEach(fn, thisp) {
        thisp = thisp || this
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next
          forEachStep(this, fn, walker, thisp)
          walker = next
        }
      }

      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key)
      }

      values() {
        return this[LRU_LIST].toArray().map((k) => k.value)
      }

      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value))
        }

        this[CACHE] = new Map() // hash of items by key
        this[LRU_LIST] = new Yallist() // list of items in order of use recency
        this[LENGTH] = 0 // length of items in the list
      }

      dump() {
        return this[LRU_LIST].map((hit) =>
          isStale(this, hit)
            ? false
            : {
                k: hit.key,
                v: hit.value,
                e: hit.now + (hit.maxAge || 0)
              }
        )
          .toArray()
          .filter((h) => h)
      }

      dumpLru() {
        return this[LRU_LIST]
      }

      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE]

        if (maxAge && typeof maxAge !== 'number')
          throw new TypeError('maxAge must be a number')

        const now = maxAge ? Date.now() : 0
        const len = this[LENGTH_CALCULATOR](value, key)

        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key))
            return false
          }

          const node = this[CACHE].get(key)
          const item = node.value

          // dispose of the old one before overwriting
          // split out into 2 ifs for better coverage tracking
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value)
          }

          item.now = now
          item.maxAge = maxAge
          item.value = value
          this[LENGTH] += len - item.length
          item.length = len
          this.get(key)
          trim(this)
          return true
        }

        const hit = new Entry(key, value, len, now, maxAge)

        // oversized objects fall out of cache automatically.
        if (hit.length > this[MAX]) {
          if (this[DISPOSE]) this[DISPOSE](key, value)

          return false
        }

        this[LENGTH] += hit.length
        this[LRU_LIST].unshift(hit)
        this[CACHE].set(key, this[LRU_LIST].head)
        trim(this)
        return true
      }

      has(key) {
        if (!this[CACHE].has(key)) return false
        const hit = this[CACHE].get(key).value
        return !isStale(this, hit)
      }

      get(key) {
        return get(this, key, true)
      }

      peek(key) {
        return get(this, key, false)
      }

      pop() {
        const node = this[LRU_LIST].tail
        if (!node) return null

        del(this, node)
        return node.value
      }

      del(key) {
        del(this, this[CACHE].get(key))
      }

      load(arr) {
        // reset the cache
        this.reset()

        const now = Date.now()
        // A previous serialized cache has the most recent items first
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l]
          const expiresAt = hit.e || 0
          if (expiresAt === 0)
            // the item was created without expiration in a non aged cache
            this.set(hit.k, hit.v)
          else {
            const maxAge = expiresAt - now
            // dont add already expired items
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge)
            }
          }
        }
      }

      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false))
      }
    }

    const get = (self, key, doUse) => {
      const node = self[CACHE].get(key)
      if (node) {
        const hit = node.value
        if (isStale(self, hit)) {
          del(self, node)
          if (!self[ALLOW_STALE]) return undefined
        } else {
          if (doUse) {
            if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now()
            self[LRU_LIST].unshiftNode(node)
          }
        }
        return hit.value
      }
    }

    const isStale = (self, hit) => {
      if (!hit || (!hit.maxAge && !self[MAX_AGE])) return false

      const diff = Date.now() - hit.now
      return hit.maxAge
        ? diff > hit.maxAge
        : self[MAX_AGE] && diff > self[MAX_AGE]
    }

    const trim = (self) => {
      if (self[LENGTH] > self[MAX]) {
        for (
          let walker = self[LRU_LIST].tail;
          self[LENGTH] > self[MAX] && walker !== null;

        ) {
          // We know that we're about to delete this one, and also
          // what the next least recently used key will be, so just
          // go ahead and set it now.
          const prev = walker.prev
          del(self, walker)
          walker = prev
        }
      }
    }

    const del = (self, node) => {
      if (node) {
        const hit = node.value
        if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value)

        self[LENGTH] -= hit.length
        self[CACHE].delete(hit.key)
        self[LRU_LIST].removeNode(node)
      }
    }

    class Entry {
      constructor(key, value, length, now, maxAge) {
        this.key = key
        this.value = value
        this.length = length
        this.now = now
        this.maxAge = maxAge || 0
      }
    }

    const forEachStep = (self, fn, node, thisp) => {
      let hit = node.value
      if (isStale(self, hit)) {
        del(self, node)
        if (!self[ALLOW_STALE]) hit = undefined
      }
      if (hit) fn.call(thisp, hit.value, hit.key, self)
    }

    module.exports = LRUCache

    /***/
  },

  /***/ 900: /***/ (module) => {
    /**
     * Helpers.
     */

    var s = 1000
    var m = s * 60
    var h = m * 60
    var d = h * 24
    var w = d * 7
    var y = d * 365.25

    /**
     * Parse or format the given `val`.
     *
     * Options:
     *
     *  - `long` verbose formatting [false]
     *
     * @param {String|Number} val
     * @param {Object} [options]
     * @throws {Error} throw an error if val is not a non-empty string or a number
     * @return {String|Number}
     * @api public
     */

    module.exports = function (val, options) {
      options = options || {}
      var type = typeof val
      if (type === 'string' && val.length > 0) {
        return parse(val)
      } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val)
      }
      throw new Error(
        'val is not a non-empty string or a valid number. val=' +
          JSON.stringify(val)
      )
    }

    /**
     * Parse the given `str` and return milliseconds.
     *
     * @param {String} str
     * @return {Number}
     * @api private
     */

    function parse(str) {
      str = String(str)
      if (str.length > 100) {
        return
      }
      var match =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          str
        )
      if (!match) {
        return
      }
      var n = parseFloat(match[1])
      var type = (match[2] || 'ms').toLowerCase()
      switch (type) {
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
          return n * y
        case 'weeks':
        case 'week':
        case 'w':
          return n * w
        case 'days':
        case 'day':
        case 'd':
          return n * d
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
          return n * h
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
          return n * m
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
          return n * s
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
          return n
        default:
          return undefined
      }
    }

    /**
     * Short format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtShort(ms) {
      var msAbs = Math.abs(ms)
      if (msAbs >= d) {
        return Math.round(ms / d) + 'd'
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + 'h'
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + 'm'
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + 's'
      }
      return ms + 'ms'
    }

    /**
     * Long format for `ms`.
     *
     * @param {Number} ms
     * @return {String}
     * @api private
     */

    function fmtLong(ms) {
      var msAbs = Math.abs(ms)
      if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day')
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour')
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute')
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second')
      }
      return ms + ' ms'
    }

    /**
     * Pluralization helper.
     */

    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5
      return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '')
    }

    /***/
  },

  /***/ 467: /***/ (module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var Stream = _interopDefault(__nccwpck_require__(2781))
    var http = _interopDefault(__nccwpck_require__(3685))
    var Url = _interopDefault(__nccwpck_require__(7310))
    var whatwgUrl = _interopDefault(__nccwpck_require__(8665))
    var https = _interopDefault(__nccwpck_require__(5687))
    var zlib = _interopDefault(__nccwpck_require__(9796))

    // Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

    // fix for "Readable" isn't a named export issue
    const Readable = Stream.Readable

    const BUFFER = Symbol('buffer')
    const TYPE = Symbol('type')

    class Blob {
      constructor() {
        this[TYPE] = ''

        const blobParts = arguments[0]
        const options = arguments[1]

        const buffers = []
        let size = 0

        if (blobParts) {
          const a = blobParts
          const length = Number(a.length)
          for (let i = 0; i < length; i++) {
            const element = a[i]
            let buffer
            if (element instanceof Buffer) {
              buffer = element
            } else if (ArrayBuffer.isView(element)) {
              buffer = Buffer.from(
                element.buffer,
                element.byteOffset,
                element.byteLength
              )
            } else if (element instanceof ArrayBuffer) {
              buffer = Buffer.from(element)
            } else if (element instanceof Blob) {
              buffer = element[BUFFER]
            } else {
              buffer = Buffer.from(
                typeof element === 'string' ? element : String(element)
              )
            }
            size += buffer.length
            buffers.push(buffer)
          }
        }

        this[BUFFER] = Buffer.concat(buffers)

        let type =
          options &&
          options.type !== undefined &&
          String(options.type).toLowerCase()
        if (type && !/[^\u0020-\u007E]/.test(type)) {
          this[TYPE] = type
        }
      }
      get size() {
        return this[BUFFER].length
      }
      get type() {
        return this[TYPE]
      }
      text() {
        return Promise.resolve(this[BUFFER].toString())
      }
      arrayBuffer() {
        const buf = this[BUFFER]
        const ab = buf.buffer.slice(
          buf.byteOffset,
          buf.byteOffset + buf.byteLength
        )
        return Promise.resolve(ab)
      }
      stream() {
        const readable = new Readable()
        readable._read = function () {}
        readable.push(this[BUFFER])
        readable.push(null)
        return readable
      }
      toString() {
        return '[object Blob]'
      }
      slice() {
        const size = this.size

        const start = arguments[0]
        const end = arguments[1]
        let relativeStart, relativeEnd
        if (start === undefined) {
          relativeStart = 0
        } else if (start < 0) {
          relativeStart = Math.max(size + start, 0)
        } else {
          relativeStart = Math.min(start, size)
        }
        if (end === undefined) {
          relativeEnd = size
        } else if (end < 0) {
          relativeEnd = Math.max(size + end, 0)
        } else {
          relativeEnd = Math.min(end, size)
        }
        const span = Math.max(relativeEnd - relativeStart, 0)

        const buffer = this[BUFFER]
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span)
        const blob = new Blob([], { type: arguments[2] })
        blob[BUFFER] = slicedBuffer
        return blob
      }
    }

    Object.defineProperties(Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    })

    Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
      value: 'Blob',
      writable: false,
      enumerable: false,
      configurable: true
    })

    /**
     * fetch-error.js
     *
     * FetchError interface for operational errors
     */

    /**
     * Create FetchError instance
     *
     * @param   String      message      Error message for human
     * @param   String      type         Error type for machine
     * @param   String      systemError  For Node.js system error
     * @return  FetchError
     */
    function FetchError(message, type, systemError) {
      Error.call(this, message)

      this.message = message
      this.type = type

      // when err.type is `system`, err.code contains system error code
      if (systemError) {
        this.code = this.errno = systemError.code
      }

      // hide custom error implementation details from end-users
      Error.captureStackTrace(this, this.constructor)
    }

    FetchError.prototype = Object.create(Error.prototype)
    FetchError.prototype.constructor = FetchError
    FetchError.prototype.name = 'FetchError'

    let convert
    try {
      convert = __nccwpck_require__(2877).convert
    } catch (e) {}

    const INTERNALS = Symbol('Body internals')

    // fix an issue where "PassThrough" isn't a named export for node <10
    const PassThrough = Stream.PassThrough

    /**
     * Body mixin
     *
     * Ref: https://fetch.spec.whatwg.org/#body
     *
     * @param   Stream  body  Readable stream
     * @param   Object  opts  Response options
     * @return  Void
     */
    function Body(body) {
      var _this = this

      var _ref =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {},
        _ref$size = _ref.size

      let size = _ref$size === undefined ? 0 : _ref$size
      var _ref$timeout = _ref.timeout
      let timeout = _ref$timeout === undefined ? 0 : _ref$timeout

      if (body == null) {
        // body is undefined or null
        body = null
      } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        body = Buffer.from(body.toString())
      } else if (isBlob(body));
      else if (Buffer.isBuffer(body));
      else if (
        Object.prototype.toString.call(body) === '[object ArrayBuffer]'
      ) {
        // body is ArrayBuffer
        body = Buffer.from(body)
      } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength)
      } else if (body instanceof Stream);
      else {
        // none of the above
        // coerce to string then buffer
        body = Buffer.from(String(body))
      }
      this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
      }
      this.size = size
      this.timeout = timeout

      if (body instanceof Stream) {
        body.on('error', function (err) {
          const error =
            err.name === 'AbortError'
              ? err
              : new FetchError(
                  `Invalid response body while trying to fetch ${_this.url}: ${err.message}`,
                  'system',
                  err
                )
          _this[INTERNALS].error = error
        })
      }
    }

    Body.prototype = {
      get body() {
        return this[INTERNALS].body
      },

      get bodyUsed() {
        return this[INTERNALS].disturbed
      },

      /**
       * Decode response as ArrayBuffer
       *
       * @return  Promise
       */
      arrayBuffer() {
        return consumeBody.call(this).then(function (buf) {
          return buf.buffer.slice(
            buf.byteOffset,
            buf.byteOffset + buf.byteLength
          )
        })
      },

      /**
       * Return raw response as Blob
       *
       * @return Promise
       */
      blob() {
        let ct = (this.headers && this.headers.get('content-type')) || ''
        return consumeBody.call(this).then(function (buf) {
          return Object.assign(
            // Prevent copying
            new Blob([], {
              type: ct.toLowerCase()
            }),
            {
              [BUFFER]: buf
            }
          )
        })
      },

      /**
       * Decode response as json
       *
       * @return  Promise
       */
      json() {
        var _this2 = this

        return consumeBody.call(this).then(function (buffer) {
          try {
            return JSON.parse(buffer.toString())
          } catch (err) {
            return Body.Promise.reject(
              new FetchError(
                `invalid json response body at ${_this2.url} reason: ${err.message}`,
                'invalid-json'
              )
            )
          }
        })
      },

      /**
       * Decode response as text
       *
       * @return  Promise
       */
      text() {
        return consumeBody.call(this).then(function (buffer) {
          return buffer.toString()
        })
      },

      /**
       * Decode response as buffer (non-spec api)
       *
       * @return  Promise
       */
      buffer() {
        return consumeBody.call(this)
      },

      /**
       * Decode response as text, while automatically detecting the encoding and
       * trying to decode to UTF-8 (non-spec api)
       *
       * @return  Promise
       */
      textConverted() {
        var _this3 = this

        return consumeBody.call(this).then(function (buffer) {
          return convertBody(buffer, _this3.headers)
        })
      }
    }

    // In browsers, all properties are enumerable.
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    })

    Body.mixIn = function (proto) {
      for (const name of Object.getOwnPropertyNames(Body.prototype)) {
        // istanbul ignore else: future proof
        if (!(name in proto)) {
          const desc = Object.getOwnPropertyDescriptor(Body.prototype, name)
          Object.defineProperty(proto, name, desc)
        }
      }
    }

    /**
     * Consume and convert an entire Body to a Buffer.
     *
     * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
     *
     * @return  Promise
     */
    function consumeBody() {
      var _this4 = this

      if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(
          new TypeError(`body used already for: ${this.url}`)
        )
      }

      this[INTERNALS].disturbed = true

      if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error)
      }

      let body = this.body

      // body is null
      if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0))
      }

      // body is blob
      if (isBlob(body)) {
        body = body.stream()
      }

      // body is buffer
      if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body)
      }

      // istanbul ignore if: should never happen
      if (!(body instanceof Stream)) {
        return Body.Promise.resolve(Buffer.alloc(0))
      }

      // body is stream
      // get ready to actually consume the body
      let accum = []
      let accumBytes = 0
      let abort = false

      return new Body.Promise(function (resolve, reject) {
        let resTimeout

        // allow timeout on slow response body
        if (_this4.timeout) {
          resTimeout = setTimeout(function () {
            abort = true
            reject(
              new FetchError(
                `Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`,
                'body-timeout'
              )
            )
          }, _this4.timeout)
        }

        // handle stream errors
        body.on('error', function (err) {
          if (err.name === 'AbortError') {
            // if the request was aborted, reject with this Error
            abort = true
            reject(err)
          } else {
            // other errors, such as incorrect content-encoding
            reject(
              new FetchError(
                `Invalid response body while trying to fetch ${_this4.url}: ${err.message}`,
                'system',
                err
              )
            )
          }
        })

        body.on('data', function (chunk) {
          if (abort || chunk === null) {
            return
          }

          if (_this4.size && accumBytes + chunk.length > _this4.size) {
            abort = true
            reject(
              new FetchError(
                `content size at ${_this4.url} over limit: ${_this4.size}`,
                'max-size'
              )
            )
            return
          }

          accumBytes += chunk.length
          accum.push(chunk)
        })

        body.on('end', function () {
          if (abort) {
            return
          }

          clearTimeout(resTimeout)

          try {
            resolve(Buffer.concat(accum, accumBytes))
          } catch (err) {
            // handle streams that have accumulated too much data (issue #414)
            reject(
              new FetchError(
                `Could not create Buffer from response body for ${_this4.url}: ${err.message}`,
                'system',
                err
              )
            )
          }
        })
      })
    }

    /**
     * Detect buffer encoding and convert to target encoding
     * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
     *
     * @param   Buffer  buffer    Incoming buffer
     * @param   String  encoding  Target encoding
     * @return  String
     */
    function convertBody(buffer, headers) {
      if (typeof convert !== 'function') {
        throw new Error(
          'The package `encoding` must be installed to use the textConverted() function'
        )
      }

      const ct = headers.get('content-type')
      let charset = 'utf-8'
      let res, str

      // header
      if (ct) {
        res = /charset=([^;]*)/i.exec(ct)
      }

      // no charset in content type, peek at response body for at most 1024 bytes
      str = buffer.slice(0, 1024).toString()

      // html5
      if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str)
      }

      // html4
      if (!res && str) {
        res =
          /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(
            str
          )
        if (!res) {
          res =
            /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(
              str
            )
          if (res) {
            res.pop() // drop last quote
          }
        }

        if (res) {
          res = /charset=(.*)/i.exec(res.pop())
        }
      }

      // xml
      if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str)
      }

      // found charset
      if (res) {
        charset = res.pop()

        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') {
          charset = 'gb18030'
        }
      }

      // turn raw buffers into a single utf-8 buffer
      return convert(buffer, 'UTF-8', charset).toString()
    }

    /**
     * Detect a URLSearchParams object
     * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
     *
     * @param   Object  obj     Object to detect by type or brand
     * @return  String
     */
    function isURLSearchParams(obj) {
      // Duck-typing as a necessary condition.
      if (
        typeof obj !== 'object' ||
        typeof obj.append !== 'function' ||
        typeof obj.delete !== 'function' ||
        typeof obj.get !== 'function' ||
        typeof obj.getAll !== 'function' ||
        typeof obj.has !== 'function' ||
        typeof obj.set !== 'function'
      ) {
        return false
      }

      // Brand-checking and more duck-typing as optional condition.
      return (
        obj.constructor.name === 'URLSearchParams' ||
        Object.prototype.toString.call(obj) === '[object URLSearchParams]' ||
        typeof obj.sort === 'function'
      )
    }

    /**
     * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
     * @param  {*} obj
     * @return {boolean}
     */
    function isBlob(obj) {
      return (
        typeof obj === 'object' &&
        typeof obj.arrayBuffer === 'function' &&
        typeof obj.type === 'string' &&
        typeof obj.stream === 'function' &&
        typeof obj.constructor === 'function' &&
        typeof obj.constructor.name === 'string' &&
        /^(Blob|File)$/.test(obj.constructor.name) &&
        /^(Blob|File)$/.test(obj[Symbol.toStringTag])
      )
    }

    /**
     * Clone body given Res/Req instance
     *
     * @param   Mixed  instance  Response or Request instance
     * @return  Mixed
     */
    function clone(instance) {
      let p1, p2
      let body = instance.body

      // don't allow cloning a used body
      if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used')
      }

      // check that body is a stream and not form-data object
      // note: we can't clone the form-data object without having it as a dependency
      if (body instanceof Stream && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new PassThrough()
        p2 = new PassThrough()
        body.pipe(p1)
        body.pipe(p2)
        // set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1
        body = p2
      }

      return body
    }

    /**
     * Performs the operation "extract a `Content-Type` value from |object|" as
     * specified in the specification:
     * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
     *
     * This function assumes that instance.body is present.
     *
     * @param   Mixed  instance  Any options.body input
     */
    function extractContentType(body) {
      if (body === null) {
        // body is null
        return null
      } else if (typeof body === 'string') {
        // body is string
        return 'text/plain;charset=UTF-8'
      } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        return 'application/x-www-form-urlencoded;charset=UTF-8'
      } else if (isBlob(body)) {
        // body is blob
        return body.type || null
      } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return null
      } else if (
        Object.prototype.toString.call(body) === '[object ArrayBuffer]'
      ) {
        // body is ArrayBuffer
        return null
      } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        return null
      } else if (typeof body.getBoundary === 'function') {
        // detect form data input from form-data module
        return `multipart/form-data;boundary=${body.getBoundary()}`
      } else if (body instanceof Stream) {
        // body is stream
        // can't really do much about this
        return null
      } else {
        // Body constructor defaults other things to string
        return 'text/plain;charset=UTF-8'
      }
    }

    /**
     * The Fetch Standard treats this as if "total bytes" is a property on the body.
     * For us, we have to explicitly get it with a function.
     *
     * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
     *
     * @param   Body    instance   Instance of Body
     * @return  Number?            Number of bytes, or null if not possible
     */
    function getTotalBytes(instance) {
      const body = instance.body

      if (body === null) {
        // body is null
        return 0
      } else if (isBlob(body)) {
        return body.size
      } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return body.length
      } else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (
          (body._lengthRetrievers && body._lengthRetrievers.length == 0) || // 1.x
          (body.hasKnownLength && body.hasKnownLength())
        ) {
          // 2.x
          return body.getLengthSync()
        }
        return null
      } else {
        // body is stream
        return null
      }
    }

    /**
     * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
     *
     * @param   Body    instance   Instance of Body
     * @return  Void
     */
    function writeToStream(dest, instance) {
      const body = instance.body

      if (body === null) {
        // body is null
        dest.end()
      } else if (isBlob(body)) {
        body.stream().pipe(dest)
      } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body)
        dest.end()
      } else {
        // body is stream
        body.pipe(dest)
      }
    }

    // expose Promise
    Body.Promise = global.Promise

    /**
     * headers.js
     *
     * Headers class offers convenient helpers
     */

    const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/
    const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/

    function validateName(name) {
      name = `${name}`
      if (invalidTokenRegex.test(name) || name === '') {
        throw new TypeError(`${name} is not a legal HTTP header name`)
      }
    }

    function validateValue(value) {
      value = `${value}`
      if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`)
      }
    }

    /**
     * Find the key in the map object given a header name.
     *
     * Returns undefined if not found.
     *
     * @param   String  name  Header name
     * @return  String|Undefined
     */
    function find(map, name) {
      name = name.toLowerCase()
      for (const key in map) {
        if (key.toLowerCase() === name) {
          return key
        }
      }
      return undefined
    }

    const MAP = Symbol('map')
    class Headers {
      /**
       * Headers class
       *
       * @param   Object  headers  Response headers
       * @return  Void
       */
      constructor() {
        let init =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : undefined

        this[MAP] = Object.create(null)

        if (init instanceof Headers) {
          const rawHeaders = init.raw()
          const headerNames = Object.keys(rawHeaders)

          for (const headerName of headerNames) {
            for (const value of rawHeaders[headerName]) {
              this.append(headerName, value)
            }
          }

          return
        }

        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null);
        else if (typeof init === 'object') {
          const method = init[Symbol.iterator]
          if (method != null) {
            if (typeof method !== 'function') {
              throw new TypeError('Header pairs must be iterable')
            }

            // sequence<sequence<ByteString>>
            // Note: per spec we have to first exhaust the lists then process them
            const pairs = []
            for (const pair of init) {
              if (
                typeof pair !== 'object' ||
                typeof pair[Symbol.iterator] !== 'function'
              ) {
                throw new TypeError('Each header pair must be iterable')
              }
              pairs.push(Array.from(pair))
            }

            for (const pair of pairs) {
              if (pair.length !== 2) {
                throw new TypeError(
                  'Each header pair must be a name/value tuple'
                )
              }
              this.append(pair[0], pair[1])
            }
          } else {
            // record<ByteString, ByteString>
            for (const key of Object.keys(init)) {
              const value = init[key]
              this.append(key, value)
            }
          }
        } else {
          throw new TypeError('Provided initializer must be an object')
        }
      }

      /**
       * Return combined header value given name
       *
       * @param   String  name  Header name
       * @return  Mixed
       */
      get(name) {
        name = `${name}`
        validateName(name)
        const key = find(this[MAP], name)
        if (key === undefined) {
          return null
        }

        return this[MAP][key].join(', ')
      }

      /**
       * Iterate over all headers
       *
       * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
       * @param   Boolean   thisArg   `this` context for callback function
       * @return  Void
       */
      forEach(callback) {
        let thisArg =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : undefined

        let pairs = getHeaders(this)
        let i = 0
        while (i < pairs.length) {
          var _pairs$i = pairs[i]
          const name = _pairs$i[0],
            value = _pairs$i[1]

          callback.call(thisArg, value, name, this)
          pairs = getHeaders(this)
          i++
        }
      }

      /**
       * Overwrite header values given name
       *
       * @param   String  name   Header name
       * @param   String  value  Header value
       * @return  Void
       */
      set(name, value) {
        name = `${name}`
        value = `${value}`
        validateName(name)
        validateValue(value)
        const key = find(this[MAP], name)
        this[MAP][key !== undefined ? key : name] = [value]
      }

      /**
       * Append a value onto existing header
       *
       * @param   String  name   Header name
       * @param   String  value  Header value
       * @return  Void
       */
      append(name, value) {
        name = `${name}`
        value = `${value}`
        validateName(name)
        validateValue(value)
        const key = find(this[MAP], name)
        if (key !== undefined) {
          this[MAP][key].push(value)
        } else {
          this[MAP][name] = [value]
        }
      }

      /**
       * Check for header name existence
       *
       * @param   String   name  Header name
       * @return  Boolean
       */
      has(name) {
        name = `${name}`
        validateName(name)
        return find(this[MAP], name) !== undefined
      }

      /**
       * Delete all header values given name
       *
       * @param   String  name  Header name
       * @return  Void
       */
      delete(name) {
        name = `${name}`
        validateName(name)
        const key = find(this[MAP], name)
        if (key !== undefined) {
          delete this[MAP][key]
        }
      }

      /**
       * Return raw headers (non-spec api)
       *
       * @return  Object
       */
      raw() {
        return this[MAP]
      }

      /**
       * Get an iterator on keys.
       *
       * @return  Iterator
       */
      keys() {
        return createHeadersIterator(this, 'key')
      }

      /**
       * Get an iterator on values.
       *
       * @return  Iterator
       */
      values() {
        return createHeadersIterator(this, 'value')
      }

      /**
       * Get an iterator on entries.
       *
       * This is the default iterator of the Headers object.
       *
       * @return  Iterator
       */
      [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value')
      }
    }
    Headers.prototype.entries = Headers.prototype[Symbol.iterator]

    Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
      value: 'Headers',
      writable: false,
      enumerable: false,
      configurable: true
    })

    Object.defineProperties(Headers.prototype, {
      get: { enumerable: true },
      forEach: { enumerable: true },
      set: { enumerable: true },
      append: { enumerable: true },
      has: { enumerable: true },
      delete: { enumerable: true },
      keys: { enumerable: true },
      values: { enumerable: true },
      entries: { enumerable: true }
    })

    function getHeaders(headers) {
      let kind =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : 'key+value'

      const keys = Object.keys(headers[MAP]).sort()
      return keys.map(
        kind === 'key'
          ? function (k) {
              return k.toLowerCase()
            }
          : kind === 'value'
          ? function (k) {
              return headers[MAP][k].join(', ')
            }
          : function (k) {
              return [k.toLowerCase(), headers[MAP][k].join(', ')]
            }
      )
    }

    const INTERNAL = Symbol('internal')

    function createHeadersIterator(target, kind) {
      const iterator = Object.create(HeadersIteratorPrototype)
      iterator[INTERNAL] = {
        target,
        kind,
        index: 0
      }
      return iterator
    }

    const HeadersIteratorPrototype = Object.setPrototypeOf(
      {
        next() {
          // istanbul ignore if
          if (
            !this ||
            Object.getPrototypeOf(this) !== HeadersIteratorPrototype
          ) {
            throw new TypeError('Value of `this` is not a HeadersIterator')
          }

          var _INTERNAL = this[INTERNAL]
          const target = _INTERNAL.target,
            kind = _INTERNAL.kind,
            index = _INTERNAL.index

          const values = getHeaders(target, kind)
          const len = values.length
          if (index >= len) {
            return {
              value: undefined,
              done: true
            }
          }

          this[INTERNAL].index = index + 1

          return {
            value: values[index],
            done: false
          }
        }
      },
      Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
    )

    Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
      value: 'HeadersIterator',
      writable: false,
      enumerable: false,
      configurable: true
    })

    /**
     * Export the Headers object in a form that Node.js can consume.
     *
     * @param   Headers  headers
     * @return  Object
     */
    function exportNodeCompatibleHeaders(headers) {
      const obj = Object.assign({ __proto__: null }, headers[MAP])

      // http.request() only supports string as Host header. This hack makes
      // specifying custom Host header possible.
      const hostHeaderKey = find(headers[MAP], 'Host')
      if (hostHeaderKey !== undefined) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0]
      }

      return obj
    }

    /**
     * Create a Headers object from an object of headers, ignoring those that do
     * not conform to HTTP grammar productions.
     *
     * @param   Object  obj  Object of headers
     * @return  Headers
     */
    function createHeadersLenient(obj) {
      const headers = new Headers()
      for (const name of Object.keys(obj)) {
        if (invalidTokenRegex.test(name)) {
          continue
        }
        if (Array.isArray(obj[name])) {
          for (const val of obj[name]) {
            if (invalidHeaderCharRegex.test(val)) {
              continue
            }
            if (headers[MAP][name] === undefined) {
              headers[MAP][name] = [val]
            } else {
              headers[MAP][name].push(val)
            }
          }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
          headers[MAP][name] = [obj[name]]
        }
      }
      return headers
    }

    const INTERNALS$1 = Symbol('Response internals')

    // fix an issue where "STATUS_CODES" aren't a named export for node <10
    const STATUS_CODES = http.STATUS_CODES

    /**
     * Response class
     *
     * @param   Stream  body  Readable stream
     * @param   Object  opts  Response options
     * @return  Void
     */
    class Response {
      constructor() {
        let body =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : null
        let opts =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

        Body.call(this, body, opts)

        const status = opts.status || 200
        const headers = new Headers(opts.headers)

        if (body != null && !headers.has('Content-Type')) {
          const contentType = extractContentType(body)
          if (contentType) {
            headers.append('Content-Type', contentType)
          }
        }

        this[INTERNALS$1] = {
          url: opts.url,
          status,
          statusText: opts.statusText || STATUS_CODES[status],
          headers,
          counter: opts.counter
        }
      }

      get url() {
        return this[INTERNALS$1].url || ''
      }

      get status() {
        return this[INTERNALS$1].status
      }

      /**
       * Convenience property representing if the request ended normally
       */
      get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300
      }

      get redirected() {
        return this[INTERNALS$1].counter > 0
      }

      get statusText() {
        return this[INTERNALS$1].statusText
      }

      get headers() {
        return this[INTERNALS$1].headers
      }

      /**
       * Clone this response
       *
       * @return  Response
       */
      clone() {
        return new Response(clone(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        })
      }
    }

    Body.mixIn(Response.prototype)

    Object.defineProperties(Response.prototype, {
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    })

    Object.defineProperty(Response.prototype, Symbol.toStringTag, {
      value: 'Response',
      writable: false,
      enumerable: false,
      configurable: true
    })

    const INTERNALS$2 = Symbol('Request internals')
    const URL = Url.URL || whatwgUrl.URL

    // fix an issue where "format", "parse" aren't a named export for node <10
    const parse_url = Url.parse
    const format_url = Url.format

    /**
     * Wrapper around `new URL` to handle arbitrary URLs
     *
     * @param  {string} urlStr
     * @return {void}
     */
    function parseURL(urlStr) {
      /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */
      if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString()
      }

      // Fallback to old implementation for arbitrary URLs
      return parse_url(urlStr)
    }

    const streamDestructionSupported = 'destroy' in Stream.Readable.prototype

    /**
     * Check if a value is an instance of Request.
     *
     * @param   Mixed   input
     * @return  Boolean
     */
    function isRequest(input) {
      return typeof input === 'object' && typeof input[INTERNALS$2] === 'object'
    }

    function isAbortSignal(signal) {
      const proto =
        signal && typeof signal === 'object' && Object.getPrototypeOf(signal)
      return !!(proto && proto.constructor.name === 'AbortSignal')
    }

    /**
     * Request class
     *
     * @param   Mixed   input  Url or Request instance
     * @param   Object  init   Custom options
     * @return  Void
     */
    class Request {
      constructor(input) {
        let init =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

        let parsedURL

        // normalize input
        if (!isRequest(input)) {
          if (input && input.href) {
            // in order to support Node.js' Url objects; though WHATWG's URL objects
            // will fall into this branch also (since their `toString()` will return
            // `href` property anyway)
            parsedURL = parseURL(input.href)
          } else {
            // coerce input to a string before attempting to parse
            parsedURL = parseURL(`${input}`)
          }
          input = {}
        } else {
          parsedURL = parseURL(input.url)
        }

        let method = init.method || input.method || 'GET'
        method = method.toUpperCase()

        if (
          (init.body != null || (isRequest(input) && input.body !== null)) &&
          (method === 'GET' || method === 'HEAD')
        ) {
          throw new TypeError('Request with GET/HEAD method cannot have body')
        }

        let inputBody =
          init.body != null
            ? init.body
            : isRequest(input) && input.body !== null
            ? clone(input)
            : null

        Body.call(this, inputBody, {
          timeout: init.timeout || input.timeout || 0,
          size: init.size || input.size || 0
        })

        const headers = new Headers(init.headers || input.headers || {})

        if (inputBody != null && !headers.has('Content-Type')) {
          const contentType = extractContentType(inputBody)
          if (contentType) {
            headers.append('Content-Type', contentType)
          }
        }

        let signal = isRequest(input) ? input.signal : null
        if ('signal' in init) signal = init.signal

        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError('Expected signal to be an instanceof AbortSignal')
        }

        this[INTERNALS$2] = {
          method,
          redirect: init.redirect || input.redirect || 'follow',
          headers,
          parsedURL,
          signal
        }

        // node-fetch-only options
        this.follow =
          init.follow !== undefined
            ? init.follow
            : input.follow !== undefined
            ? input.follow
            : 20
        this.compress =
          init.compress !== undefined
            ? init.compress
            : input.compress !== undefined
            ? input.compress
            : true
        this.counter = init.counter || input.counter || 0
        this.agent = init.agent || input.agent
      }

      get method() {
        return this[INTERNALS$2].method
      }

      get url() {
        return format_url(this[INTERNALS$2].parsedURL)
      }

      get headers() {
        return this[INTERNALS$2].headers
      }

      get redirect() {
        return this[INTERNALS$2].redirect
      }

      get signal() {
        return this[INTERNALS$2].signal
      }

      /**
       * Clone this request
       *
       * @return  Request
       */
      clone() {
        return new Request(this)
      }
    }

    Body.mixIn(Request.prototype)

    Object.defineProperty(Request.prototype, Symbol.toStringTag, {
      value: 'Request',
      writable: false,
      enumerable: false,
      configurable: true
    })

    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true }
    })

    /**
     * Convert a Request to Node.js http request options.
     *
     * @param   Request  A Request instance
     * @return  Object   The options object to be passed to http.request
     */
    function getNodeRequestOptions(request) {
      const parsedURL = request[INTERNALS$2].parsedURL
      const headers = new Headers(request[INTERNALS$2].headers)

      // fetch step 1.3
      if (!headers.has('Accept')) {
        headers.set('Accept', '*/*')
      }

      // Basic fetch
      if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError('Only absolute URLs are supported')
      }

      if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported')
      }

      if (
        request.signal &&
        request.body instanceof Stream.Readable &&
        !streamDestructionSupported
      ) {
        throw new Error(
          'Cancellation of streamed requests with AbortSignal is not supported in node < 8'
        )
      }

      // HTTP-network-or-cache fetch steps 2.4-2.7
      let contentLengthValue = null
      if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = '0'
      }
      if (request.body != null) {
        const totalBytes = getTotalBytes(request)
        if (typeof totalBytes === 'number') {
          contentLengthValue = String(totalBytes)
        }
      }
      if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue)
      }

      // HTTP-network-or-cache fetch step 2.11
      if (!headers.has('User-Agent')) {
        headers.set(
          'User-Agent',
          'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)'
        )
      }

      // HTTP-network-or-cache fetch step 2.15
      if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate')
      }

      let agent = request.agent
      if (typeof agent === 'function') {
        agent = agent(parsedURL)
      }

      if (!headers.has('Connection') && !agent) {
        headers.set('Connection', 'close')
      }

      // HTTP-network fetch step 4.2
      // chunked encoding is handled by Node.js

      return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
      })
    }

    /**
     * abort-error.js
     *
     * AbortError interface for cancelled requests
     */

    /**
     * Create AbortError instance
     *
     * @param   String      message      Error message for human
     * @return  AbortError
     */
    function AbortError(message) {
      Error.call(this, message)

      this.type = 'aborted'
      this.message = message

      // hide custom error implementation details from end-users
      Error.captureStackTrace(this, this.constructor)
    }

    AbortError.prototype = Object.create(Error.prototype)
    AbortError.prototype.constructor = AbortError
    AbortError.prototype.name = 'AbortError'

    const URL$1 = Url.URL || whatwgUrl.URL

    // fix an issue where "PassThrough", "resolve" aren't a named export for node <10
    const PassThrough$1 = Stream.PassThrough

    const isDomainOrSubdomain = function isDomainOrSubdomain(
      destination,
      original
    ) {
      const orig = new URL$1(original).hostname
      const dest = new URL$1(destination).hostname

      return (
        orig === dest ||
        (orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest))
      )
    }

    /**
     * Fetch function
     *
     * @param   Mixed    url   Absolute url or Request instance
     * @param   Object   opts  Fetch options
     * @return  Promise
     */
    function fetch(url, opts) {
      // allow custom promise
      if (!fetch.Promise) {
        throw new Error(
          'native promise missing, set fetch.Promise to your favorite alternative'
        )
      }

      Body.Promise = fetch.Promise

      // wrap http.request into fetch
      return new fetch.Promise(function (resolve, reject) {
        // build request object
        const request = new Request(url, opts)
        const options = getNodeRequestOptions(request)

        const send = (options.protocol === 'https:' ? https : http).request
        const signal = request.signal

        let response = null

        const abort = function abort() {
          let error = new AbortError('The user aborted a request.')
          reject(error)
          if (request.body && request.body instanceof Stream.Readable) {
            request.body.destroy(error)
          }
          if (!response || !response.body) return
          response.body.emit('error', error)
        }

        if (signal && signal.aborted) {
          abort()
          return
        }

        const abortAndFinalize = function abortAndFinalize() {
          abort()
          finalize()
        }

        // send request
        const req = send(options)
        let reqTimeout

        if (signal) {
          signal.addEventListener('abort', abortAndFinalize)
        }

        function finalize() {
          req.abort()
          if (signal) signal.removeEventListener('abort', abortAndFinalize)
          clearTimeout(reqTimeout)
        }

        if (request.timeout) {
          req.once('socket', function (socket) {
            reqTimeout = setTimeout(function () {
              reject(
                new FetchError(
                  `network timeout at: ${request.url}`,
                  'request-timeout'
                )
              )
              finalize()
            }, request.timeout)
          })
        }

        req.on('error', function (err) {
          reject(
            new FetchError(
              `request to ${request.url} failed, reason: ${err.message}`,
              'system',
              err
            )
          )
          finalize()
        })

        req.on('response', function (res) {
          clearTimeout(reqTimeout)

          const headers = createHeadersLenient(res.headers)

          // HTTP fetch step 5
          if (fetch.isRedirect(res.statusCode)) {
            // HTTP fetch step 5.2
            const location = headers.get('Location')

            // HTTP fetch step 5.3
            let locationURL = null
            try {
              locationURL =
                location === null
                  ? null
                  : new URL$1(location, request.url).toString()
            } catch (err) {
              // error here can only be invalid URL in Location: header
              // do not throw when options.redirect == manual
              // let the user extract the errorneous redirect URL
              if (request.redirect !== 'manual') {
                reject(
                  new FetchError(
                    `uri requested responds with an invalid redirect URL: ${location}`,
                    'invalid-redirect'
                  )
                )
                finalize()
                return
              }
            }

            // HTTP fetch step 5.5
            switch (request.redirect) {
              case 'error':
                reject(
                  new FetchError(
                    `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                    'no-redirect'
                  )
                )
                finalize()
                return
              case 'manual':
                // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                if (locationURL !== null) {
                  // handle corrupted header
                  try {
                    headers.set('Location', locationURL)
                  } catch (err) {
                    // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                    reject(err)
                  }
                }
                break
              case 'follow':
                // HTTP-redirect fetch step 2
                if (locationURL === null) {
                  break
                }

                // HTTP-redirect fetch step 5
                if (request.counter >= request.follow) {
                  reject(
                    new FetchError(
                      `maximum redirect reached at: ${request.url}`,
                      'max-redirect'
                    )
                  )
                  finalize()
                  return
                }

                // HTTP-redirect fetch step 6 (counter increment)
                // Create a new Request object.
                const requestOpts = {
                  headers: new Headers(request.headers),
                  follow: request.follow,
                  counter: request.counter + 1,
                  agent: request.agent,
                  compress: request.compress,
                  method: request.method,
                  body: request.body,
                  signal: request.signal,
                  timeout: request.timeout,
                  size: request.size
                }

                if (!isDomainOrSubdomain(request.url, locationURL)) {
                  for (const name of [
                    'authorization',
                    'www-authenticate',
                    'cookie',
                    'cookie2'
                  ]) {
                    requestOpts.headers.delete(name)
                  }
                }

                // HTTP-redirect fetch step 9
                if (
                  res.statusCode !== 303 &&
                  request.body &&
                  getTotalBytes(request) === null
                ) {
                  reject(
                    new FetchError(
                      'Cannot follow redirect with body being a readable stream',
                      'unsupported-redirect'
                    )
                  )
                  finalize()
                  return
                }

                // HTTP-redirect fetch step 11
                if (
                  res.statusCode === 303 ||
                  ((res.statusCode === 301 || res.statusCode === 302) &&
                    request.method === 'POST')
                ) {
                  requestOpts.method = 'GET'
                  requestOpts.body = undefined
                  requestOpts.headers.delete('content-length')
                }

                // HTTP-redirect fetch step 15
                resolve(fetch(new Request(locationURL, requestOpts)))
                finalize()
                return
            }
          }

          // prepare response
          res.once('end', function () {
            if (signal) signal.removeEventListener('abort', abortAndFinalize)
          })
          let body = res.pipe(new PassThrough$1())

          const response_options = {
            url: request.url,
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: headers,
            size: request.size,
            timeout: request.timeout,
            counter: request.counter
          }

          // HTTP-network fetch step 12.1.1.3
          const codings = headers.get('Content-Encoding')

          // HTTP-network fetch step 12.1.1.4: handle content codings

          // in following scenarios we ignore compression support
          // 1. compression support is disabled
          // 2. HEAD request
          // 3. no Content-Encoding header
          // 4. no content response (204)
          // 5. content not modified response (304)
          if (
            !request.compress ||
            request.method === 'HEAD' ||
            codings === null ||
            res.statusCode === 204 ||
            res.statusCode === 304
          ) {
            response = new Response(body, response_options)
            resolve(response)
            return
          }

          // For Node v6+
          // Be less strict when decoding compressed responses, since sometimes
          // servers send slightly invalid responses that are still accepted
          // by common browsers.
          // Always using Z_SYNC_FLUSH is what cURL does.
          const zlibOptions = {
            flush: zlib.Z_SYNC_FLUSH,
            finishFlush: zlib.Z_SYNC_FLUSH
          }

          // for gzip
          if (codings == 'gzip' || codings == 'x-gzip') {
            body = body.pipe(zlib.createGunzip(zlibOptions))
            response = new Response(body, response_options)
            resolve(response)
            return
          }

          // for deflate
          if (codings == 'deflate' || codings == 'x-deflate') {
            // handle the infamous raw deflate response from old servers
            // a hack for old IIS and Apache servers
            const raw = res.pipe(new PassThrough$1())
            raw.once('data', function (chunk) {
              // see http://stackoverflow.com/questions/37519828
              if ((chunk[0] & 0x0f) === 0x08) {
                body = body.pipe(zlib.createInflate())
              } else {
                body = body.pipe(zlib.createInflateRaw())
              }
              response = new Response(body, response_options)
              resolve(response)
            })
            return
          }

          // for br
          if (
            codings == 'br' &&
            typeof zlib.createBrotliDecompress === 'function'
          ) {
            body = body.pipe(zlib.createBrotliDecompress())
            response = new Response(body, response_options)
            resolve(response)
            return
          }

          // otherwise, use response as-is
          response = new Response(body, response_options)
          resolve(response)
        })

        writeToStream(req, request)
      })
    }
    /**
     * Redirect code matching
     *
     * @param   Number   code  Status code
     * @return  Boolean
     */
    fetch.isRedirect = function (code) {
      return (
        code === 301 ||
        code === 302 ||
        code === 303 ||
        code === 307 ||
        code === 308
      )
    }

    // expose Promise
    fetch.Promise = global.Promise

    module.exports = exports = fetch
    Object.defineProperty(exports, '__esModule', { value: true })
    exports['default'] = exports
    exports.Headers = Headers
    exports.Request = Request
    exports.Response = Response
    exports.FetchError = FetchError

    /***/
  },

  /***/ 1223: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var wrappy = __nccwpck_require__(2940)
    module.exports = wrappy(once)
    module.exports.strict = wrappy(onceStrict)

    once.proto = once(function () {
      Object.defineProperty(Function.prototype, 'once', {
        value: function () {
          return once(this)
        },
        configurable: true
      })

      Object.defineProperty(Function.prototype, 'onceStrict', {
        value: function () {
          return onceStrict(this)
        },
        configurable: true
      })
    })

    function once(fn) {
      var f = function () {
        if (f.called) return f.value
        f.called = true
        return (f.value = fn.apply(this, arguments))
      }
      f.called = false
      return f
    }

    function onceStrict(fn) {
      var f = function () {
        if (f.called) throw new Error(f.onceError)
        f.called = true
        return (f.value = fn.apply(this, arguments))
      }
      var name = fn.name || 'Function wrapped with `once`'
      f.onceError = name + " shouldn't be called more than once"
      f.called = false
      return f
    }

    /***/
  },

  /***/ 1867: /***/ (module, exports, __nccwpck_require__) => {
    /* eslint-disable node/no-deprecated-api */
    var buffer = __nccwpck_require__(4300)
    var Buffer = buffer.Buffer

    // alternative to using Object.keys for old browsers
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key]
      }
    }
    if (
      Buffer.from &&
      Buffer.alloc &&
      Buffer.allocUnsafe &&
      Buffer.allocUnsafeSlow
    ) {
      module.exports = buffer
    } else {
      // Copy properties from require('buffer')
      copyProps(buffer, exports)
      exports.Buffer = SafeBuffer
    }

    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length)
    }

    // Copy static methods from Buffer
    copyProps(Buffer, SafeBuffer)

    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number')
      }
      return Buffer(arg, encodingOrOffset, length)
    }

    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      var buf = Buffer(size)
      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding)
        } else {
          buf.fill(fill)
        }
      } else {
        buf.fill(0)
      }
      return buf
    }

    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return Buffer(size)
    }

    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return buffer.SlowBuffer(size)
    }

    /***/
  },

  /***/ 4256: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    var punycode = __nccwpck_require__(5477)
    var mappingTable = __nccwpck_require__(2020)

    var PROCESSING_OPTIONS = {
      TRANSITIONAL: 0,
      NONTRANSITIONAL: 1
    }

    function normalize(str) {
      // fix bug in v8
      return str
        .split('\u0000')
        .map(function (s) {
          return s.normalize('NFC')
        })
        .join('\u0000')
    }

    function findStatus(val) {
      var start = 0
      var end = mappingTable.length - 1

      while (start <= end) {
        var mid = Math.floor((start + end) / 2)

        var target = mappingTable[mid]
        if (target[0][0] <= val && target[0][1] >= val) {
          return target
        } else if (target[0][0] > val) {
          end = mid - 1
        } else {
          start = mid + 1
        }
      }

      return null
    }

    var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g

    function countSymbols(string) {
      return (
        // then get the length
        string
          // replace every surrogate pair with a BMP symbol
          .replace(regexAstralSymbols, '_').length
      )
    }

    function mapChars(domain_name, useSTD3, processing_option) {
      var hasError = false
      var processed = ''

      var len = countSymbols(domain_name)
      for (var i = 0; i < len; ++i) {
        var codePoint = domain_name.codePointAt(i)
        var status = findStatus(codePoint)

        switch (status[1]) {
          case 'disallowed':
            hasError = true
            processed += String.fromCodePoint(codePoint)
            break
          case 'ignored':
            break
          case 'mapped':
            processed += String.fromCodePoint.apply(String, status[2])
            break
          case 'deviation':
            if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
              processed += String.fromCodePoint.apply(String, status[2])
            } else {
              processed += String.fromCodePoint(codePoint)
            }
            break
          case 'valid':
            processed += String.fromCodePoint(codePoint)
            break
          case 'disallowed_STD3_mapped':
            if (useSTD3) {
              hasError = true
              processed += String.fromCodePoint(codePoint)
            } else {
              processed += String.fromCodePoint.apply(String, status[2])
            }
            break
          case 'disallowed_STD3_valid':
            if (useSTD3) {
              hasError = true
            }

            processed += String.fromCodePoint(codePoint)
            break
        }
      }

      return {
        string: processed,
        error: hasError
      }
    }

    var combiningMarksRegex =
      /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/

    function validateLabel(label, processing_option) {
      if (label.substr(0, 4) === 'xn--') {
        label = punycode.toUnicode(label)
        processing_option = PROCESSING_OPTIONS.NONTRANSITIONAL
      }

      var error = false

      if (
        normalize(label) !== label ||
        (label[3] === '-' && label[4] === '-') ||
        label[0] === '-' ||
        label[label.length - 1] === '-' ||
        label.indexOf('.') !== -1 ||
        label.search(combiningMarksRegex) === 0
      ) {
        error = true
      }

      var len = countSymbols(label)
      for (var i = 0; i < len; ++i) {
        var status = findStatus(label.codePointAt(i))
        if (
          (processing === PROCESSING_OPTIONS.TRANSITIONAL &&
            status[1] !== 'valid') ||
          (processing === PROCESSING_OPTIONS.NONTRANSITIONAL &&
            status[1] !== 'valid' &&
            status[1] !== 'deviation')
        ) {
          error = true
          break
        }
      }

      return {
        label: label,
        error: error
      }
    }

    function processing(domain_name, useSTD3, processing_option) {
      var result = mapChars(domain_name, useSTD3, processing_option)
      result.string = normalize(result.string)

      var labels = result.string.split('.')
      for (var i = 0; i < labels.length; ++i) {
        try {
          var validation = validateLabel(labels[i])
          labels[i] = validation.label
          result.error = result.error || validation.error
        } catch (e) {
          result.error = true
        }
      }

      return {
        string: labels.join('.'),
        error: result.error
      }
    }

    module.exports.toASCII = function (
      domain_name,
      useSTD3,
      processing_option,
      verifyDnsLength
    ) {
      var result = processing(domain_name, useSTD3, processing_option)
      var labels = result.string.split('.')
      labels = labels.map(function (l) {
        try {
          return punycode.toASCII(l)
        } catch (e) {
          result.error = true
          return l
        }
      })

      if (verifyDnsLength) {
        var total = labels.slice(0, labels.length - 1).join('.').length
        if (total.length > 253 || total.length === 0) {
          result.error = true
        }

        for (var i = 0; i < labels.length; ++i) {
          if (labels.length > 63 || labels.length === 0) {
            result.error = true
            break
          }
        }
      }

      if (result.error) return null
      return labels.join('.')
    }

    module.exports.toUnicode = function (domain_name, useSTD3) {
      var result = processing(
        domain_name,
        useSTD3,
        PROCESSING_OPTIONS.NONTRANSITIONAL
      )

      return {
        domain: result.string,
        error: result.error
      }
    }

    module.exports.PROCESSING_OPTIONS = PROCESSING_OPTIONS

    /***/
  },

  /***/ 4294: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    module.exports = __nccwpck_require__(4219)

    /***/
  },

  /***/ 4219: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    var net = __nccwpck_require__(1808)
    var tls = __nccwpck_require__(4404)
    var http = __nccwpck_require__(3685)
    var https = __nccwpck_require__(5687)
    var events = __nccwpck_require__(2361)
    var assert = __nccwpck_require__(9491)
    var util = __nccwpck_require__(3837)

    exports.httpOverHttp = httpOverHttp
    exports.httpsOverHttp = httpsOverHttp
    exports.httpOverHttps = httpOverHttps
    exports.httpsOverHttps = httpsOverHttps

    function httpOverHttp(options) {
      var agent = new TunnelingAgent(options)
      agent.request = http.request
      return agent
    }

    function httpsOverHttp(options) {
      var agent = new TunnelingAgent(options)
      agent.request = http.request
      agent.createSocket = createSecureSocket
      agent.defaultPort = 443
      return agent
    }

    function httpOverHttps(options) {
      var agent = new TunnelingAgent(options)
      agent.request = https.request
      return agent
    }

    function httpsOverHttps(options) {
      var agent = new TunnelingAgent(options)
      agent.request = https.request
      agent.createSocket = createSecureSocket
      agent.defaultPort = 443
      return agent
    }

    function TunnelingAgent(options) {
      var self = this
      self.options = options || {}
      self.proxyOptions = self.options.proxy || {}
      self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets
      self.requests = []
      self.sockets = []

      self.on('free', function onFree(socket, host, port, localAddress) {
        var options = toOptions(host, port, localAddress)
        for (var i = 0, len = self.requests.length; i < len; ++i) {
          var pending = self.requests[i]
          if (pending.host === options.host && pending.port === options.port) {
            // Detect the request to connect same origin server,
            // reuse the connection.
            self.requests.splice(i, 1)
            pending.request.onSocket(socket)
            return
          }
        }
        socket.destroy()
        self.removeSocket(socket)
      })
    }
    util.inherits(TunnelingAgent, events.EventEmitter)

    TunnelingAgent.prototype.addRequest = function addRequest(
      req,
      host,
      port,
      localAddress
    ) {
      var self = this
      var options = mergeOptions(
        { request: req },
        self.options,
        toOptions(host, port, localAddress)
      )

      if (self.sockets.length >= this.maxSockets) {
        // We are over limit so we'll add it to the queue.
        self.requests.push(options)
        return
      }

      // If we are under maxSockets create a new one.
      self.createSocket(options, function (socket) {
        socket.on('free', onFree)
        socket.on('close', onCloseOrRemove)
        socket.on('agentRemove', onCloseOrRemove)
        req.onSocket(socket)

        function onFree() {
          self.emit('free', socket, options)
        }

        function onCloseOrRemove(err) {
          self.removeSocket(socket)
          socket.removeListener('free', onFree)
          socket.removeListener('close', onCloseOrRemove)
          socket.removeListener('agentRemove', onCloseOrRemove)
        }
      })
    }

    TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
      var self = this
      var placeholder = {}
      self.sockets.push(placeholder)

      var connectOptions = mergeOptions({}, self.proxyOptions, {
        method: 'CONNECT',
        path: options.host + ':' + options.port,
        agent: false,
        headers: {
          host: options.host + ':' + options.port
        }
      })
      if (options.localAddress) {
        connectOptions.localAddress = options.localAddress
      }
      if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {}
        connectOptions.headers['Proxy-Authorization'] =
          'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64')
      }

      debug('making CONNECT request')
      var connectReq = self.request(connectOptions)
      connectReq.useChunkedEncodingByDefault = false // for v0.6
      connectReq.once('response', onResponse) // for v0.6
      connectReq.once('upgrade', onUpgrade) // for v0.6
      connectReq.once('connect', onConnect) // for v0.7 or later
      connectReq.once('error', onError)
      connectReq.end()

      function onResponse(res) {
        // Very hacky. This is necessary to avoid http-parser leaks.
        res.upgrade = true
      }

      function onUpgrade(res, socket, head) {
        // Hacky.
        process.nextTick(function () {
          onConnect(res, socket, head)
        })
      }

      function onConnect(res, socket, head) {
        connectReq.removeAllListeners()
        socket.removeAllListeners()

        if (res.statusCode !== 200) {
          debug(
            'tunneling socket could not be established, statusCode=%d',
            res.statusCode
          )
          socket.destroy()
          var error = new Error(
            'tunneling socket could not be established, ' +
              'statusCode=' +
              res.statusCode
          )
          error.code = 'ECONNRESET'
          options.request.emit('error', error)
          self.removeSocket(placeholder)
          return
        }
        if (head.length > 0) {
          debug('got illegal response body from proxy')
          socket.destroy()
          var error = new Error('got illegal response body from proxy')
          error.code = 'ECONNRESET'
          options.request.emit('error', error)
          self.removeSocket(placeholder)
          return
        }
        debug('tunneling connection has established')
        self.sockets[self.sockets.indexOf(placeholder)] = socket
        return cb(socket)
      }

      function onError(cause) {
        connectReq.removeAllListeners()

        debug(
          'tunneling socket could not be established, cause=%s\n',
          cause.message,
          cause.stack
        )
        var error = new Error(
          'tunneling socket could not be established, ' +
            'cause=' +
            cause.message
        )
        error.code = 'ECONNRESET'
        options.request.emit('error', error)
        self.removeSocket(placeholder)
      }
    }

    TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
      var pos = this.sockets.indexOf(socket)
      if (pos === -1) {
        return
      }
      this.sockets.splice(pos, 1)

      var pending = this.requests.shift()
      if (pending) {
        // If we have pending requests and a socket gets closed a new one
        // needs to be created to take over in the pool for the one that closed.
        this.createSocket(pending, function (socket) {
          pending.request.onSocket(socket)
        })
      }
    }

    function createSecureSocket(options, cb) {
      var self = this
      TunnelingAgent.prototype.createSocket.call(
        self,
        options,
        function (socket) {
          var hostHeader = options.request.getHeader('host')
          var tlsOptions = mergeOptions({}, self.options, {
            socket: socket,
            servername: hostHeader
              ? hostHeader.replace(/:.*$/, '')
              : options.host
          })

          // 0 is dummy port for v0.6
          var secureSocket = tls.connect(0, tlsOptions)
          self.sockets[self.sockets.indexOf(socket)] = secureSocket
          cb(secureSocket)
        }
      )
    }

    function toOptions(host, port, localAddress) {
      if (typeof host === 'string') {
        // since v0.10
        return {
          host: host,
          port: port,
          localAddress: localAddress
        }
      }
      return host // for v0.11 or later
    }

    function mergeOptions(target) {
      for (var i = 1, len = arguments.length; i < len; ++i) {
        var overrides = arguments[i]
        if (typeof overrides === 'object') {
          var keys = Object.keys(overrides)
          for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
            var k = keys[j]
            if (overrides[k] !== undefined) {
              target[k] = overrides[k]
            }
          }
        }
      }
      return target
    }

    var debug
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      debug = function () {
        var args = Array.prototype.slice.call(arguments)
        if (typeof args[0] === 'string') {
          args[0] = 'TUNNEL: ' + args[0]
        } else {
          args.unshift('TUNNEL:')
        }
        console.error.apply(console, args)
      }
    } else {
      debug = function () {}
    }
    exports.debug = debug // for test

    /***/
  },

  /***/ 4419: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex
        ? ex['default']
        : ex
    }

    var jsonwebtoken = _interopDefault(__nccwpck_require__(7486))

    async function getToken({ privateKey, payload }) {
      return jsonwebtoken.sign(payload, privateKey, {
        algorithm: 'RS256'
      })
    }

    async function githubAppJwt({
      id,
      privateKey,
      now = Math.floor(Date.now() / 1000)
    }) {
      // When creating a JSON Web Token, it sets the "issued at time" (iat) to 30s
      // in the past as we have seen people running situations where the GitHub API
      // claimed the iat would be in future. It turned out the clocks on the
      // different machine were not in sync.
      const nowWithSafetyMargin = now - 30
      const expiration = nowWithSafetyMargin + 60 * 10 // JWT expiration time (10 minute maximum)

      const payload = {
        iat: nowWithSafetyMargin,
        exp: expiration,
        iss: id
      }
      const token = await getToken({
        privateKey,
        payload
      })
      return {
        appId: id,
        expiration,
        token
      }
    }

    exports.githubAppJwt = githubAppJwt
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 5030: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', { value: true })

    function getUserAgent() {
      if (typeof navigator === 'object' && 'userAgent' in navigator) {
        return navigator.userAgent
      }

      if (typeof process === 'object' && 'version' in process) {
        return `Node.js/${process.version.substr(1)} (${process.platform}; ${
          process.arch
        })`
      }

      return '<environment undetectable>'
    }

    exports.getUserAgent = getUserAgent
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 5840: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    Object.defineProperty(exports, 'v1', {
      enumerable: true,
      get: function () {
        return _v.default
      }
    })
    Object.defineProperty(exports, 'v3', {
      enumerable: true,
      get: function () {
        return _v2.default
      }
    })
    Object.defineProperty(exports, 'v4', {
      enumerable: true,
      get: function () {
        return _v3.default
      }
    })
    Object.defineProperty(exports, 'v5', {
      enumerable: true,
      get: function () {
        return _v4.default
      }
    })
    Object.defineProperty(exports, 'NIL', {
      enumerable: true,
      get: function () {
        return _nil.default
      }
    })
    Object.defineProperty(exports, 'version', {
      enumerable: true,
      get: function () {
        return _version.default
      }
    })
    Object.defineProperty(exports, 'validate', {
      enumerable: true,
      get: function () {
        return _validate.default
      }
    })
    Object.defineProperty(exports, 'stringify', {
      enumerable: true,
      get: function () {
        return _stringify.default
      }
    })
    Object.defineProperty(exports, 'parse', {
      enumerable: true,
      get: function () {
        return _parse.default
      }
    })

    var _v = _interopRequireDefault(__nccwpck_require__(8628))

    var _v2 = _interopRequireDefault(__nccwpck_require__(6409))

    var _v3 = _interopRequireDefault(__nccwpck_require__(5122))

    var _v4 = _interopRequireDefault(__nccwpck_require__(9120))

    var _nil = _interopRequireDefault(__nccwpck_require__(5332))

    var _version = _interopRequireDefault(__nccwpck_require__(1595))

    var _validate = _interopRequireDefault(__nccwpck_require__(6900))

    var _stringify = _interopRequireDefault(__nccwpck_require__(8950))

    var _parse = _interopRequireDefault(__nccwpck_require__(2746))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    /***/
  },

  /***/ 4569: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _crypto = _interopRequireDefault(__nccwpck_require__(6113))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function md5(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes)
      } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8')
      }

      return _crypto.default.createHash('md5').update(bytes).digest()
    }

    var _default = md5
    exports['default'] = _default

    /***/
  },

  /***/ 5332: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0
    var _default = '00000000-0000-0000-0000-000000000000'
    exports['default'] = _default

    /***/
  },

  /***/ 2746: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _validate = _interopRequireDefault(__nccwpck_require__(6900))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function parse(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError('Invalid UUID')
      }

      let v
      const arr = new Uint8Array(16) // Parse ########-....-....-....-............

      arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24
      arr[1] = (v >>> 16) & 0xff
      arr[2] = (v >>> 8) & 0xff
      arr[3] = v & 0xff // Parse ........-####-....-....-............

      arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8
      arr[5] = v & 0xff // Parse ........-....-####-....-............

      arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8
      arr[7] = v & 0xff // Parse ........-....-....-####-............

      arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8
      arr[9] = v & 0xff // Parse ........-....-....-....-############
      // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

      arr[10] = ((v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000) & 0xff
      arr[11] = (v / 0x100000000) & 0xff
      arr[12] = (v >>> 24) & 0xff
      arr[13] = (v >>> 16) & 0xff
      arr[14] = (v >>> 8) & 0xff
      arr[15] = v & 0xff
      return arr
    }

    var _default = parse
    exports['default'] = _default

    /***/
  },

  /***/ 814: /***/ (__unused_webpack_module, exports) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0
    var _default =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
    exports['default'] = _default

    /***/
  },

  /***/ 807: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = rng

    var _crypto = _interopRequireDefault(__nccwpck_require__(6113))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    const rnds8Pool = new Uint8Array(256) // # of random values to pre-allocate

    let poolPtr = rnds8Pool.length

    function rng() {
      if (poolPtr > rnds8Pool.length - 16) {
        _crypto.default.randomFillSync(rnds8Pool)

        poolPtr = 0
      }

      return rnds8Pool.slice(poolPtr, (poolPtr += 16))
    }

    /***/
  },

  /***/ 5274: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _crypto = _interopRequireDefault(__nccwpck_require__(6113))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function sha1(bytes) {
      if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes)
      } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8')
      }

      return _crypto.default.createHash('sha1').update(bytes).digest()
    }

    var _default = sha1
    exports['default'] = _default

    /***/
  },

  /***/ 8950: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _validate = _interopRequireDefault(__nccwpck_require__(6900))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */
    const byteToHex = []

    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 0x100).toString(16).substr(1))
    }

    function stringify(arr, offset = 0) {
      // Note: Be careful editing this code!  It's been tuned for performance
      // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
      const uuid = (
        byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]
      ).toLowerCase() // Consistency check for valid UUID.  If this throws, it's likely due to one
      // of the following:
      // - One or more input array values don't map to a hex octet (leading to
      // "undefined" in the uuid)
      // - Invalid input values for the RFC `version` or `variant` fields

      if (!(0, _validate.default)(uuid)) {
        throw TypeError('Stringified UUID is invalid')
      }

      return uuid
    }

    var _default = stringify
    exports['default'] = _default

    /***/
  },

  /***/ 8628: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _rng = _interopRequireDefault(__nccwpck_require__(807))

    var _stringify = _interopRequireDefault(__nccwpck_require__(8950))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    // **`v1()` - Generate time-based UUID**
    //
    // Inspired by https://github.com/LiosK/UUID.js
    // and http://docs.python.org/library/uuid.html
    let _nodeId

    let _clockseq // Previous uuid creation time

    let _lastMSecs = 0
    let _lastNSecs = 0 // See https://github.com/uuidjs/uuid for API details

    function v1(options, buf, offset) {
      let i = (buf && offset) || 0
      const b = buf || new Array(16)
      options = options || {}
      let node = options.node || _nodeId
      let clockseq =
        options.clockseq !== undefined ? options.clockseq : _clockseq // node and clockseq need to be initialized to random values if they're not
      // specified.  We do this lazily to minimize issues related to insufficient
      // system entropy.  See #189

      if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || _rng.default)()

        if (node == null) {
          // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
          node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
          ]
        }

        if (clockseq == null) {
          // Per 4.2.2, randomize (14 bit) clockseq
          clockseq = _clockseq = ((seedBytes[6] << 8) | seedBytes[7]) & 0x3fff
        }
      } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
      // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
      // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
      // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.

      let msecs = options.msecs !== undefined ? options.msecs : Date.now() // Per 4.2.1.2, use count of uuid's generated during the current clock
      // cycle to simulate higher resolution clock

      let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1 // Time since last uuid creation (in msecs)

      const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000 // Per 4.2.1.2, Bump clockseq on clock regression

      if (dt < 0 && options.clockseq === undefined) {
        clockseq = (clockseq + 1) & 0x3fff
      } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
      // time interval

      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0
      } // Per 4.2.1.2 Throw error if too many uuids are requested

      if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
      }

      _lastMSecs = msecs
      _lastNSecs = nsecs
      _clockseq = clockseq // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

      msecs += 12219292800000 // `time_low`

      const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000
      b[i++] = (tl >>> 24) & 0xff
      b[i++] = (tl >>> 16) & 0xff
      b[i++] = (tl >>> 8) & 0xff
      b[i++] = tl & 0xff // `time_mid`

      const tmh = ((msecs / 0x100000000) * 10000) & 0xfffffff
      b[i++] = (tmh >>> 8) & 0xff
      b[i++] = tmh & 0xff // `time_high_and_version`

      b[i++] = ((tmh >>> 24) & 0xf) | 0x10 // include version

      b[i++] = (tmh >>> 16) & 0xff // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

      b[i++] = (clockseq >>> 8) | 0x80 // `clock_seq_low`

      b[i++] = clockseq & 0xff // `node`

      for (let n = 0; n < 6; ++n) {
        b[i + n] = node[n]
      }

      return buf || (0, _stringify.default)(b)
    }

    var _default = v1
    exports['default'] = _default

    /***/
  },

  /***/ 6409: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _v = _interopRequireDefault(__nccwpck_require__(5998))

    var _md = _interopRequireDefault(__nccwpck_require__(4569))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    const v3 = (0, _v.default)('v3', 0x30, _md.default)
    var _default = v3
    exports['default'] = _default

    /***/
  },

  /***/ 5998: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = _default
    exports.URL = exports.DNS = void 0

    var _stringify = _interopRequireDefault(__nccwpck_require__(8950))

    var _parse = _interopRequireDefault(__nccwpck_require__(2746))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str)) // UTF8 escape

      const bytes = []

      for (let i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i))
      }

      return bytes
    }

    const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
    exports.DNS = DNS
    const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'
    exports.URL = URL

    function _default(name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') {
          value = stringToBytes(value)
        }

        if (typeof namespace === 'string') {
          namespace = (0, _parse.default)(namespace)
        }

        if (namespace.length !== 16) {
          throw TypeError(
            'Namespace must be array-like (16 iterable integer values, 0-255)'
          )
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`

        let bytes = new Uint8Array(16 + value.length)
        bytes.set(namespace)
        bytes.set(value, namespace.length)
        bytes = hashfunc(bytes)
        bytes[6] = (bytes[6] & 0x0f) | version
        bytes[8] = (bytes[8] & 0x3f) | 0x80

        if (buf) {
          offset = offset || 0

          for (let i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i]
          }

          return buf
        }

        return (0, _stringify.default)(bytes)
      } // Function#name is not settable on some platforms (#270)

      try {
        generateUUID.name = name // eslint-disable-next-line no-empty
      } catch (err) {} // For CommonJS default export support

      generateUUID.DNS = DNS
      generateUUID.URL = URL
      return generateUUID
    }

    /***/
  },

  /***/ 5122: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _rng = _interopRequireDefault(__nccwpck_require__(807))

    var _stringify = _interopRequireDefault(__nccwpck_require__(8950))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function v4(options, buf, offset) {
      options = options || {}

      const rnds = options.random || (options.rng || _rng.default)() // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

      rnds[6] = (rnds[6] & 0x0f) | 0x40
      rnds[8] = (rnds[8] & 0x3f) | 0x80 // Copy bytes to buffer, if provided

      if (buf) {
        offset = offset || 0

        for (let i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i]
        }

        return buf
      }

      return (0, _stringify.default)(rnds)
    }

    var _default = v4
    exports['default'] = _default

    /***/
  },

  /***/ 9120: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _v = _interopRequireDefault(__nccwpck_require__(5998))

    var _sha = _interopRequireDefault(__nccwpck_require__(5274))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    const v5 = (0, _v.default)('v5', 0x50, _sha.default)
    var _default = v5
    exports['default'] = _default

    /***/
  },

  /***/ 6900: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _regex = _interopRequireDefault(__nccwpck_require__(814))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function validate(uuid) {
      return typeof uuid === 'string' && _regex.default.test(uuid)
    }

    var _default = validate
    exports['default'] = _default

    /***/
  },

  /***/ 1595: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
    exports['default'] = void 0

    var _validate = _interopRequireDefault(__nccwpck_require__(6900))

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj }
    }

    function version(uuid) {
      if (!(0, _validate.default)(uuid)) {
        throw TypeError('Invalid UUID')
      }

      return parseInt(uuid.substr(14, 1), 16)
    }

    var _default = version
    exports['default'] = _default

    /***/
  },

  /***/ 4886: /***/ (module) => {
    var conversions = {}
    module.exports = conversions

    function sign(x) {
      return x < 0 ? -1 : 1
    }

    function evenRound(x) {
      // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
      if (x % 1 === 0.5 && (x & 1) === 0) {
        // [even number].5; round down (i.e. floor)
        return Math.floor(x)
      } else {
        return Math.round(x)
      }
    }

    function createNumberConversion(bitLength, typeOpts) {
      if (!typeOpts.unsigned) {
        --bitLength
      }
      const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength)
      const upperBound = Math.pow(2, bitLength) - 1

      const moduloVal = typeOpts.moduloBitLength
        ? Math.pow(2, typeOpts.moduloBitLength)
        : Math.pow(2, bitLength)
      const moduloBound = typeOpts.moduloBitLength
        ? Math.pow(2, typeOpts.moduloBitLength - 1)
        : Math.pow(2, bitLength - 1)

      return function (V, opts) {
        if (!opts) opts = {}

        let x = +V

        if (opts.enforceRange) {
          if (!Number.isFinite(x)) {
            throw new TypeError('Argument is not a finite number')
          }

          x = sign(x) * Math.floor(Math.abs(x))
          if (x < lowerBound || x > upperBound) {
            throw new TypeError('Argument is not in byte range')
          }

          return x
        }

        if (!isNaN(x) && opts.clamp) {
          x = evenRound(x)

          if (x < lowerBound) x = lowerBound
          if (x > upperBound) x = upperBound
          return x
        }

        if (!Number.isFinite(x) || x === 0) {
          return 0
        }

        x = sign(x) * Math.floor(Math.abs(x))
        x = x % moduloVal

        if (!typeOpts.unsigned && x >= moduloBound) {
          return x - moduloVal
        } else if (typeOpts.unsigned) {
          if (x < 0) {
            x += moduloVal
          } else if (x === -0) {
            // don't return negative zero
            return 0
          }
        }

        return x
      }
    }

    conversions['void'] = function () {
      return undefined
    }

    conversions['boolean'] = function (val) {
      return !!val
    }

    conversions['byte'] = createNumberConversion(8, { unsigned: false })
    conversions['octet'] = createNumberConversion(8, { unsigned: true })

    conversions['short'] = createNumberConversion(16, { unsigned: false })
    conversions['unsigned short'] = createNumberConversion(16, {
      unsigned: true
    })

    conversions['long'] = createNumberConversion(32, { unsigned: false })
    conversions['unsigned long'] = createNumberConversion(32, {
      unsigned: true
    })

    conversions['long long'] = createNumberConversion(32, {
      unsigned: false,
      moduloBitLength: 64
    })
    conversions['unsigned long long'] = createNumberConversion(32, {
      unsigned: true,
      moduloBitLength: 64
    })

    conversions['double'] = function (V) {
      const x = +V

      if (!Number.isFinite(x)) {
        throw new TypeError('Argument is not a finite floating-point value')
      }

      return x
    }

    conversions['unrestricted double'] = function (V) {
      const x = +V

      if (isNaN(x)) {
        throw new TypeError('Argument is NaN')
      }

      return x
    }

    // not quite valid, but good enough for JS
    conversions['float'] = conversions['double']
    conversions['unrestricted float'] = conversions['unrestricted double']

    conversions['DOMString'] = function (V, opts) {
      if (!opts) opts = {}

      if (opts.treatNullAsEmptyString && V === null) {
        return ''
      }

      return String(V)
    }

    conversions['ByteString'] = function (V, opts) {
      const x = String(V)
      let c = undefined
      for (let i = 0; (c = x.codePointAt(i)) !== undefined; ++i) {
        if (c > 255) {
          throw new TypeError('Argument is not a valid bytestring')
        }
      }

      return x
    }

    conversions['USVString'] = function (V) {
      const S = String(V)
      const n = S.length
      const U = []
      for (let i = 0; i < n; ++i) {
        const c = S.charCodeAt(i)
        if (c < 0xd800 || c > 0xdfff) {
          U.push(String.fromCodePoint(c))
        } else if (0xdc00 <= c && c <= 0xdfff) {
          U.push(String.fromCodePoint(0xfffd))
        } else {
          if (i === n - 1) {
            U.push(String.fromCodePoint(0xfffd))
          } else {
            const d = S.charCodeAt(i + 1)
            if (0xdc00 <= d && d <= 0xdfff) {
              const a = c & 0x3ff
              const b = d & 0x3ff
              U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b))
              ++i
            } else {
              U.push(String.fromCodePoint(0xfffd))
            }
          }
        }
      }

      return U.join('')
    }

    conversions['Date'] = function (V, opts) {
      if (!(V instanceof Date)) {
        throw new TypeError('Argument is not a Date object')
      }
      if (isNaN(V)) {
        return undefined
      }

      return V
    }

    conversions['RegExp'] = function (V, opts) {
      if (!(V instanceof RegExp)) {
        V = new RegExp(V)
      }

      return V
    }

    /***/
  },

  /***/ 7537: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    const usm = __nccwpck_require__(2158)

    exports.implementation = class URLImpl {
      constructor(constructorArgs) {
        const url = constructorArgs[0]
        const base = constructorArgs[1]

        let parsedBase = null
        if (base !== undefined) {
          parsedBase = usm.basicURLParse(base)
          if (parsedBase === 'failure') {
            throw new TypeError('Invalid base URL')
          }
        }

        const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase })
        if (parsedURL === 'failure') {
          throw new TypeError('Invalid URL')
        }

        this._url = parsedURL

        // TODO: query stuff
      }

      get href() {
        return usm.serializeURL(this._url)
      }

      set href(v) {
        const parsedURL = usm.basicURLParse(v)
        if (parsedURL === 'failure') {
          throw new TypeError('Invalid URL')
        }

        this._url = parsedURL
      }

      get origin() {
        return usm.serializeURLOrigin(this._url)
      }

      get protocol() {
        return this._url.scheme + ':'
      }

      set protocol(v) {
        usm.basicURLParse(v + ':', {
          url: this._url,
          stateOverride: 'scheme start'
        })
      }

      get username() {
        return this._url.username
      }

      set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return
        }

        usm.setTheUsername(this._url, v)
      }

      get password() {
        return this._url.password
      }

      set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return
        }

        usm.setThePassword(this._url, v)
      }

      get host() {
        const url = this._url

        if (url.host === null) {
          return ''
        }

        if (url.port === null) {
          return usm.serializeHost(url.host)
        }

        return (
          usm.serializeHost(url.host) + ':' + usm.serializeInteger(url.port)
        )
      }

      set host(v) {
        if (this._url.cannotBeABaseURL) {
          return
        }

        usm.basicURLParse(v, { url: this._url, stateOverride: 'host' })
      }

      get hostname() {
        if (this._url.host === null) {
          return ''
        }

        return usm.serializeHost(this._url.host)
      }

      set hostname(v) {
        if (this._url.cannotBeABaseURL) {
          return
        }

        usm.basicURLParse(v, { url: this._url, stateOverride: 'hostname' })
      }

      get port() {
        if (this._url.port === null) {
          return ''
        }

        return usm.serializeInteger(this._url.port)
      }

      set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
          return
        }

        if (v === '') {
          this._url.port = null
        } else {
          usm.basicURLParse(v, { url: this._url, stateOverride: 'port' })
        }
      }

      get pathname() {
        if (this._url.cannotBeABaseURL) {
          return this._url.path[0]
        }

        if (this._url.path.length === 0) {
          return ''
        }

        return '/' + this._url.path.join('/')
      }

      set pathname(v) {
        if (this._url.cannotBeABaseURL) {
          return
        }

        this._url.path = []
        usm.basicURLParse(v, { url: this._url, stateOverride: 'path start' })
      }

      get search() {
        if (this._url.query === null || this._url.query === '') {
          return ''
        }

        return '?' + this._url.query
      }

      set search(v) {
        // TODO: query stuff

        const url = this._url

        if (v === '') {
          url.query = null
          return
        }

        const input = v[0] === '?' ? v.substring(1) : v
        url.query = ''
        usm.basicURLParse(input, { url, stateOverride: 'query' })
      }

      get hash() {
        if (this._url.fragment === null || this._url.fragment === '') {
          return ''
        }

        return '#' + this._url.fragment
      }

      set hash(v) {
        if (v === '') {
          this._url.fragment = null
          return
        }

        const input = v[0] === '#' ? v.substring(1) : v
        this._url.fragment = ''
        usm.basicURLParse(input, { url: this._url, stateOverride: 'fragment' })
      }

      toJSON() {
        return this.href
      }
    }

    /***/
  },

  /***/ 3394: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const conversions = __nccwpck_require__(4886)
    const utils = __nccwpck_require__(3185)
    const Impl = __nccwpck_require__(7537)

    const impl = utils.implSymbol

    function URL(url) {
      if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError(
          "Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function."
        )
      }
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'URL': 1 argument required, but only " +
            arguments.length +
            ' present.'
        )
      }
      const args = []
      for (let i = 0; i < arguments.length && i < 2; ++i) {
        args[i] = arguments[i]
      }
      args[0] = conversions['USVString'](args[0])
      if (args[1] !== undefined) {
        args[1] = conversions['USVString'](args[1])
      }

      module.exports.setup(this, args)
    }

    URL.prototype.toJSON = function toJSON() {
      if (!this || !module.exports.is(this)) {
        throw new TypeError('Illegal invocation')
      }
      const args = []
      for (let i = 0; i < arguments.length && i < 0; ++i) {
        args[i] = arguments[i]
      }
      return this[impl].toJSON.apply(this[impl], args)
    }
    Object.defineProperty(URL.prototype, 'href', {
      get() {
        return this[impl].href
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].href = V
      },
      enumerable: true,
      configurable: true
    })

    URL.prototype.toString = function () {
      if (!this || !module.exports.is(this)) {
        throw new TypeError('Illegal invocation')
      }
      return this.href
    }

    Object.defineProperty(URL.prototype, 'origin', {
      get() {
        return this[impl].origin
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'protocol', {
      get() {
        return this[impl].protocol
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].protocol = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'username', {
      get() {
        return this[impl].username
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].username = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'password', {
      get() {
        return this[impl].password
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].password = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'host', {
      get() {
        return this[impl].host
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].host = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'hostname', {
      get() {
        return this[impl].hostname
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].hostname = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'port', {
      get() {
        return this[impl].port
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].port = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'pathname', {
      get() {
        return this[impl].pathname
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].pathname = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'search', {
      get() {
        return this[impl].search
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].search = V
      },
      enumerable: true,
      configurable: true
    })

    Object.defineProperty(URL.prototype, 'hash', {
      get() {
        return this[impl].hash
      },
      set(V) {
        V = conversions['USVString'](V)
        this[impl].hash = V
      },
      enumerable: true,
      configurable: true
    })

    module.exports = {
      is(obj) {
        return !!obj && obj[impl] instanceof Impl.implementation
      },
      create(constructorArgs, privateData) {
        let obj = Object.create(URL.prototype)
        this.setup(obj, constructorArgs, privateData)
        return obj
      },
      setup(obj, constructorArgs, privateData) {
        if (!privateData) privateData = {}
        privateData.wrapper = obj

        obj[impl] = new Impl.implementation(constructorArgs, privateData)
        obj[impl][utils.wrapperSymbol] = obj
      },
      interface: URL,
      expose: {
        Window: { URL: URL },
        Worker: { URL: URL }
      }
    }

    /***/
  },

  /***/ 8665: /***/ (__unused_webpack_module, exports, __nccwpck_require__) => {
    exports.URL = __nccwpck_require__(3394)['interface']
    exports.serializeURL = __nccwpck_require__(2158).serializeURL
    exports.serializeURLOrigin = __nccwpck_require__(2158).serializeURLOrigin
    exports.basicURLParse = __nccwpck_require__(2158).basicURLParse
    exports.setTheUsername = __nccwpck_require__(2158).setTheUsername
    exports.setThePassword = __nccwpck_require__(2158).setThePassword
    exports.serializeHost = __nccwpck_require__(2158).serializeHost
    exports.serializeInteger = __nccwpck_require__(2158).serializeInteger
    exports.parseURL = __nccwpck_require__(2158).parseURL

    /***/
  },

  /***/ 2158: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    const punycode = __nccwpck_require__(5477)
    const tr46 = __nccwpck_require__(4256)

    const specialSchemes = {
      ftp: 21,
      file: null,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    }

    const failure = Symbol('failure')

    function countSymbols(str) {
      return punycode.ucs2.decode(str).length
    }

    function at(input, idx) {
      const c = input[idx]
      return isNaN(c) ? undefined : String.fromCodePoint(c)
    }

    function isASCIIDigit(c) {
      return c >= 0x30 && c <= 0x39
    }

    function isASCIIAlpha(c) {
      return (c >= 0x41 && c <= 0x5a) || (c >= 0x61 && c <= 0x7a)
    }

    function isASCIIAlphanumeric(c) {
      return isASCIIAlpha(c) || isASCIIDigit(c)
    }

    function isASCIIHex(c) {
      return (
        isASCIIDigit(c) || (c >= 0x41 && c <= 0x46) || (c >= 0x61 && c <= 0x66)
      )
    }

    function isSingleDot(buffer) {
      return buffer === '.' || buffer.toLowerCase() === '%2e'
    }

    function isDoubleDot(buffer) {
      buffer = buffer.toLowerCase()
      return (
        buffer === '..' ||
        buffer === '%2e.' ||
        buffer === '.%2e' ||
        buffer === '%2e%2e'
      )
    }

    function isWindowsDriveLetterCodePoints(cp1, cp2) {
      return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124)
    }

    function isWindowsDriveLetterString(string) {
      return (
        string.length === 2 &&
        isASCIIAlpha(string.codePointAt(0)) &&
        (string[1] === ':' || string[1] === '|')
      )
    }

    function isNormalizedWindowsDriveLetterString(string) {
      return (
        string.length === 2 &&
        isASCIIAlpha(string.codePointAt(0)) &&
        string[1] === ':'
      )
    }

    function containsForbiddenHostCodePoint(string) {
      return (
        string.search(
          /\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/
        ) !== -1
      )
    }

    function containsForbiddenHostCodePointExcludingPercent(string) {
      return (
        string.search(
          /\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/
        ) !== -1
      )
    }

    function isSpecialScheme(scheme) {
      return specialSchemes[scheme] !== undefined
    }

    function isSpecial(url) {
      return isSpecialScheme(url.scheme)
    }

    function defaultPort(scheme) {
      return specialSchemes[scheme]
    }

    function percentEncode(c) {
      let hex = c.toString(16).toUpperCase()
      if (hex.length === 1) {
        hex = '0' + hex
      }

      return '%' + hex
    }

    function utf8PercentEncode(c) {
      const buf = new Buffer(c)

      let str = ''

      for (let i = 0; i < buf.length; ++i) {
        str += percentEncode(buf[i])
      }

      return str
    }

    function utf8PercentDecode(str) {
      const input = new Buffer(str)
      const output = []
      for (let i = 0; i < input.length; ++i) {
        if (input[i] !== 37) {
          output.push(input[i])
        } else if (
          input[i] === 37 &&
          isASCIIHex(input[i + 1]) &&
          isASCIIHex(input[i + 2])
        ) {
          output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16))
          i += 2
        } else {
          output.push(input[i])
        }
      }
      return new Buffer(output).toString()
    }

    function isC0ControlPercentEncode(c) {
      return c <= 0x1f || c > 0x7e
    }

    const extraPathPercentEncodeSet = new Set([
      32, 34, 35, 60, 62, 63, 96, 123, 125
    ])
    function isPathPercentEncode(c) {
      return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c)
    }

    const extraUserinfoPercentEncodeSet = new Set([
      47, 58, 59, 61, 64, 91, 92, 93, 94, 124
    ])
    function isUserinfoPercentEncode(c) {
      return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c)
    }

    function percentEncodeChar(c, encodeSetPredicate) {
      const cStr = String.fromCodePoint(c)

      if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr)
      }

      return cStr
    }

    function parseIPv4Number(input) {
      let R = 10

      if (
        input.length >= 2 &&
        input.charAt(0) === '0' &&
        input.charAt(1).toLowerCase() === 'x'
      ) {
        input = input.substring(2)
        R = 16
      } else if (input.length >= 2 && input.charAt(0) === '0') {
        input = input.substring(1)
        R = 8
      }

      if (input === '') {
        return 0
      }

      const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/
      if (regex.test(input)) {
        return failure
      }

      return parseInt(input, R)
    }

    function parseIPv4(input) {
      const parts = input.split('.')
      if (parts[parts.length - 1] === '') {
        if (parts.length > 1) {
          parts.pop()
        }
      }

      if (parts.length > 4) {
        return input
      }

      const numbers = []
      for (const part of parts) {
        if (part === '') {
          return input
        }
        const n = parseIPv4Number(part)
        if (n === failure) {
          return input
        }

        numbers.push(n)
      }

      for (let i = 0; i < numbers.length - 1; ++i) {
        if (numbers[i] > 255) {
          return failure
        }
      }
      if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure
      }

      let ipv4 = numbers.pop()
      let counter = 0

      for (const n of numbers) {
        ipv4 += n * Math.pow(256, 3 - counter)
        ++counter
      }

      return ipv4
    }

    function serializeIPv4(address) {
      let output = ''
      let n = address

      for (let i = 1; i <= 4; ++i) {
        output = String(n % 256) + output
        if (i !== 4) {
          output = '.' + output
        }
        n = Math.floor(n / 256)
      }

      return output
    }

    function parseIPv6(input) {
      const address = [0, 0, 0, 0, 0, 0, 0, 0]
      let pieceIndex = 0
      let compress = null
      let pointer = 0

      input = punycode.ucs2.decode(input)

      if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
          return failure
        }

        pointer += 2
        ++pieceIndex
        compress = pieceIndex
      }

      while (pointer < input.length) {
        if (pieceIndex === 8) {
          return failure
        }

        if (input[pointer] === 58) {
          if (compress !== null) {
            return failure
          }
          ++pointer
          ++pieceIndex
          compress = pieceIndex
          continue
        }

        let value = 0
        let length = 0

        while (length < 4 && isASCIIHex(input[pointer])) {
          value = value * 0x10 + parseInt(at(input, pointer), 16)
          ++pointer
          ++length
        }

        if (input[pointer] === 46) {
          if (length === 0) {
            return failure
          }

          pointer -= length

          if (pieceIndex > 6) {
            return failure
          }

          let numbersSeen = 0

          while (input[pointer] !== undefined) {
            let ipv4Piece = null

            if (numbersSeen > 0) {
              if (input[pointer] === 46 && numbersSeen < 4) {
                ++pointer
              } else {
                return failure
              }
            }

            if (!isASCIIDigit(input[pointer])) {
              return failure
            }

            while (isASCIIDigit(input[pointer])) {
              const number = parseInt(at(input, pointer))
              if (ipv4Piece === null) {
                ipv4Piece = number
              } else if (ipv4Piece === 0) {
                return failure
              } else {
                ipv4Piece = ipv4Piece * 10 + number
              }
              if (ipv4Piece > 255) {
                return failure
              }
              ++pointer
            }

            address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece

            ++numbersSeen

            if (numbersSeen === 2 || numbersSeen === 4) {
              ++pieceIndex
            }
          }

          if (numbersSeen !== 4) {
            return failure
          }

          break
        } else if (input[pointer] === 58) {
          ++pointer
          if (input[pointer] === undefined) {
            return failure
          }
        } else if (input[pointer] !== undefined) {
          return failure
        }

        address[pieceIndex] = value
        ++pieceIndex
      }

      if (compress !== null) {
        let swaps = pieceIndex - compress
        pieceIndex = 7
        while (pieceIndex !== 0 && swaps > 0) {
          const temp = address[compress + swaps - 1]
          address[compress + swaps - 1] = address[pieceIndex]
          address[pieceIndex] = temp
          --pieceIndex
          --swaps
        }
      } else if (compress === null && pieceIndex !== 8) {
        return failure
      }

      return address
    }

    function serializeIPv6(address) {
      let output = ''
      const seqResult = findLongestZeroSequence(address)
      const compress = seqResult.idx
      let ignore0 = false

      for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
        if (ignore0 && address[pieceIndex] === 0) {
          continue
        } else if (ignore0) {
          ignore0 = false
        }

        if (compress === pieceIndex) {
          const separator = pieceIndex === 0 ? '::' : ':'
          output += separator
          ignore0 = true
          continue
        }

        output += address[pieceIndex].toString(16)

        if (pieceIndex !== 7) {
          output += ':'
        }
      }

      return output
    }

    function parseHost(input, isSpecialArg) {
      if (input[0] === '[') {
        if (input[input.length - 1] !== ']') {
          return failure
        }

        return parseIPv6(input.substring(1, input.length - 1))
      }

      if (!isSpecialArg) {
        return parseOpaqueHost(input)
      }

      const domain = utf8PercentDecode(input)
      const asciiDomain = tr46.toASCII(
        domain,
        false,
        tr46.PROCESSING_OPTIONS.NONTRANSITIONAL,
        false
      )
      if (asciiDomain === null) {
        return failure
      }

      if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure
      }

      const ipv4Host = parseIPv4(asciiDomain)
      if (typeof ipv4Host === 'number' || ipv4Host === failure) {
        return ipv4Host
      }

      return asciiDomain
    }

    function parseOpaqueHost(input) {
      if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure
      }

      let output = ''
      const decoded = punycode.ucs2.decode(input)
      for (let i = 0; i < decoded.length; ++i) {
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode)
      }
      return output
    }

    function findLongestZeroSequence(arr) {
      let maxIdx = null
      let maxLen = 1 // only find elements > 1
      let currStart = null
      let currLen = 0

      for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 0) {
          if (currLen > maxLen) {
            maxIdx = currStart
            maxLen = currLen
          }

          currStart = null
          currLen = 0
        } else {
          if (currStart === null) {
            currStart = i
          }
          ++currLen
        }
      }

      // if trailing zeros
      if (currLen > maxLen) {
        maxIdx = currStart
        maxLen = currLen
      }

      return {
        idx: maxIdx,
        len: maxLen
      }
    }

    function serializeHost(host) {
      if (typeof host === 'number') {
        return serializeIPv4(host)
      }

      // IPv6 serializer
      if (host instanceof Array) {
        return '[' + serializeIPv6(host) + ']'
      }

      return host
    }

    function trimControlChars(url) {
      return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, '')
    }

    function trimTabAndNewline(url) {
      return url.replace(/\u0009|\u000A|\u000D/g, '')
    }

    function shortenPath(url) {
      const path = url.path
      if (path.length === 0) {
        return
      }
      if (
        url.scheme === 'file' &&
        path.length === 1 &&
        isNormalizedWindowsDriveLetter(path[0])
      ) {
        return
      }

      path.pop()
    }

    function includesCredentials(url) {
      return url.username !== '' || url.password !== ''
    }

    function cannotHaveAUsernamePasswordPort(url) {
      return (
        url.host === null ||
        url.host === '' ||
        url.cannotBeABaseURL ||
        url.scheme === 'file'
      )
    }

    function isNormalizedWindowsDriveLetter(string) {
      return /^[A-Za-z]:$/.test(string)
    }

    function URLStateMachine(
      input,
      base,
      encodingOverride,
      url,
      stateOverride
    ) {
      this.pointer = 0
      this.input = input
      this.base = base || null
      this.encodingOverride = encodingOverride || 'utf-8'
      this.stateOverride = stateOverride
      this.url = url
      this.failure = false
      this.parseError = false

      if (!this.url) {
        this.url = {
          scheme: '',
          username: '',
          password: '',
          host: null,
          port: null,
          path: [],
          query: null,
          fragment: null,

          cannotBeABaseURL: false
        }

        const res = trimControlChars(this.input)
        if (res !== this.input) {
          this.parseError = true
        }
        this.input = res
      }

      const res = trimTabAndNewline(this.input)
      if (res !== this.input) {
        this.parseError = true
      }
      this.input = res

      this.state = stateOverride || 'scheme start'

      this.buffer = ''
      this.atFlag = false
      this.arrFlag = false
      this.passwordTokenSeenFlag = false

      this.input = punycode.ucs2.decode(this.input)

      for (; this.pointer <= this.input.length; ++this.pointer) {
        const c = this.input[this.pointer]
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c)

        // exec state machine
        const ret = this['parse ' + this.state](c, cStr)
        if (!ret) {
          break // terminate algorithm
        } else if (ret === failure) {
          this.failure = true
          break
        }
      }
    }

    URLStateMachine.prototype['parse scheme start'] = function parseSchemeStart(
      c,
      cStr
    ) {
      if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase()
        this.state = 'scheme'
      } else if (!this.stateOverride) {
        this.state = 'no scheme'
        --this.pointer
      } else {
        this.parseError = true
        return failure
      }

      return true
    }

    URLStateMachine.prototype['parse scheme'] = function parseScheme(c, cStr) {
      if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase()
      } else if (c === 58) {
        if (this.stateOverride) {
          if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
            return false
          }

          if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
            return false
          }

          if (
            (includesCredentials(this.url) || this.url.port !== null) &&
            this.buffer === 'file'
          ) {
            return false
          }

          if (
            this.url.scheme === 'file' &&
            (this.url.host === '' || this.url.host === null)
          ) {
            return false
          }
        }
        this.url.scheme = this.buffer
        this.buffer = ''
        if (this.stateOverride) {
          return false
        }
        if (this.url.scheme === 'file') {
          if (
            this.input[this.pointer + 1] !== 47 ||
            this.input[this.pointer + 2] !== 47
          ) {
            this.parseError = true
          }
          this.state = 'file'
        } else if (
          isSpecial(this.url) &&
          this.base !== null &&
          this.base.scheme === this.url.scheme
        ) {
          this.state = 'special relative or authority'
        } else if (isSpecial(this.url)) {
          this.state = 'special authority slashes'
        } else if (this.input[this.pointer + 1] === 47) {
          this.state = 'path or authority'
          ++this.pointer
        } else {
          this.url.cannotBeABaseURL = true
          this.url.path.push('')
          this.state = 'cannot-be-a-base-URL path'
        }
      } else if (!this.stateOverride) {
        this.buffer = ''
        this.state = 'no scheme'
        this.pointer = -1
      } else {
        this.parseError = true
        return failure
      }

      return true
    }

    URLStateMachine.prototype['parse no scheme'] = function parseNoScheme(c) {
      if (this.base === null || (this.base.cannotBeABaseURL && c !== 35)) {
        return failure
      } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme
        this.url.path = this.base.path.slice()
        this.url.query = this.base.query
        this.url.fragment = ''
        this.url.cannotBeABaseURL = true
        this.state = 'fragment'
      } else if (this.base.scheme === 'file') {
        this.state = 'file'
        --this.pointer
      } else {
        this.state = 'relative'
        --this.pointer
      }

      return true
    }

    URLStateMachine.prototype['parse special relative or authority'] =
      function parseSpecialRelativeOrAuthority(c) {
        if (c === 47 && this.input[this.pointer + 1] === 47) {
          this.state = 'special authority ignore slashes'
          ++this.pointer
        } else {
          this.parseError = true
          this.state = 'relative'
          --this.pointer
        }

        return true
      }

    URLStateMachine.prototype['parse path or authority'] =
      function parsePathOrAuthority(c) {
        if (c === 47) {
          this.state = 'authority'
        } else {
          this.state = 'path'
          --this.pointer
        }

        return true
      }

    URLStateMachine.prototype['parse relative'] = function parseRelative(c) {
      this.url.scheme = this.base.scheme
      if (isNaN(c)) {
        this.url.username = this.base.username
        this.url.password = this.base.password
        this.url.host = this.base.host
        this.url.port = this.base.port
        this.url.path = this.base.path.slice()
        this.url.query = this.base.query
      } else if (c === 47) {
        this.state = 'relative slash'
      } else if (c === 63) {
        this.url.username = this.base.username
        this.url.password = this.base.password
        this.url.host = this.base.host
        this.url.port = this.base.port
        this.url.path = this.base.path.slice()
        this.url.query = ''
        this.state = 'query'
      } else if (c === 35) {
        this.url.username = this.base.username
        this.url.password = this.base.password
        this.url.host = this.base.host
        this.url.port = this.base.port
        this.url.path = this.base.path.slice()
        this.url.query = this.base.query
        this.url.fragment = ''
        this.state = 'fragment'
      } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true
        this.state = 'relative slash'
      } else {
        this.url.username = this.base.username
        this.url.password = this.base.password
        this.url.host = this.base.host
        this.url.port = this.base.port
        this.url.path = this.base.path.slice(0, this.base.path.length - 1)

        this.state = 'path'
        --this.pointer
      }

      return true
    }

    URLStateMachine.prototype['parse relative slash'] =
      function parseRelativeSlash(c) {
        if (isSpecial(this.url) && (c === 47 || c === 92)) {
          if (c === 92) {
            this.parseError = true
          }
          this.state = 'special authority ignore slashes'
        } else if (c === 47) {
          this.state = 'authority'
        } else {
          this.url.username = this.base.username
          this.url.password = this.base.password
          this.url.host = this.base.host
          this.url.port = this.base.port
          this.state = 'path'
          --this.pointer
        }

        return true
      }

    URLStateMachine.prototype['parse special authority slashes'] =
      function parseSpecialAuthoritySlashes(c) {
        if (c === 47 && this.input[this.pointer + 1] === 47) {
          this.state = 'special authority ignore slashes'
          ++this.pointer
        } else {
          this.parseError = true
          this.state = 'special authority ignore slashes'
          --this.pointer
        }

        return true
      }

    URLStateMachine.prototype['parse special authority ignore slashes'] =
      function parseSpecialAuthorityIgnoreSlashes(c) {
        if (c !== 47 && c !== 92) {
          this.state = 'authority'
          --this.pointer
        } else {
          this.parseError = true
        }

        return true
      }

    URLStateMachine.prototype['parse authority'] = function parseAuthority(
      c,
      cStr
    ) {
      if (c === 64) {
        this.parseError = true
        if (this.atFlag) {
          this.buffer = '%40' + this.buffer
        }
        this.atFlag = true

        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer)
        for (let pointer = 0; pointer < len; ++pointer) {
          const codePoint = this.buffer.codePointAt(pointer)

          if (codePoint === 58 && !this.passwordTokenSeenFlag) {
            this.passwordTokenSeenFlag = true
            continue
          }
          const encodedCodePoints = percentEncodeChar(
            codePoint,
            isUserinfoPercentEncode
          )
          if (this.passwordTokenSeenFlag) {
            this.url.password += encodedCodePoints
          } else {
            this.url.username += encodedCodePoints
          }
        }
        this.buffer = ''
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92)
      ) {
        if (this.atFlag && this.buffer === '') {
          this.parseError = true
          return failure
        }
        this.pointer -= countSymbols(this.buffer) + 1
        this.buffer = ''
        this.state = 'host'
      } else {
        this.buffer += cStr
      }

      return true
    }

    URLStateMachine.prototype['parse hostname'] = URLStateMachine.prototype[
      'parse host'
    ] = function parseHostName(c, cStr) {
      if (this.stateOverride && this.url.scheme === 'file') {
        --this.pointer
        this.state = 'file host'
      } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === '') {
          this.parseError = true
          return failure
        }

        const host = parseHost(this.buffer, isSpecial(this.url))
        if (host === failure) {
          return failure
        }

        this.url.host = host
        this.buffer = ''
        this.state = 'port'
        if (this.stateOverride === 'hostname') {
          return false
        }
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92)
      ) {
        --this.pointer
        if (isSpecial(this.url) && this.buffer === '') {
          this.parseError = true
          return failure
        } else if (
          this.stateOverride &&
          this.buffer === '' &&
          (includesCredentials(this.url) || this.url.port !== null)
        ) {
          this.parseError = true
          return false
        }

        const host = parseHost(this.buffer, isSpecial(this.url))
        if (host === failure) {
          return failure
        }

        this.url.host = host
        this.buffer = ''
        this.state = 'path start'
        if (this.stateOverride) {
          return false
        }
      } else {
        if (c === 91) {
          this.arrFlag = true
        } else if (c === 93) {
          this.arrFlag = false
        }
        this.buffer += cStr
      }

      return true
    }

    URLStateMachine.prototype['parse port'] = function parsePort(c, cStr) {
      if (isASCIIDigit(c)) {
        this.buffer += cStr
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92) ||
        this.stateOverride
      ) {
        if (this.buffer !== '') {
          const port = parseInt(this.buffer)
          if (port > Math.pow(2, 16) - 1) {
            this.parseError = true
            return failure
          }
          this.url.port = port === defaultPort(this.url.scheme) ? null : port
          this.buffer = ''
        }
        if (this.stateOverride) {
          return false
        }
        this.state = 'path start'
        --this.pointer
      } else {
        this.parseError = true
        return failure
      }

      return true
    }

    const fileOtherwiseCodePoints = new Set([47, 92, 63, 35])

    URLStateMachine.prototype['parse file'] = function parseFile(c) {
      this.url.scheme = 'file'

      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true
        }
        this.state = 'file slash'
      } else if (this.base !== null && this.base.scheme === 'file') {
        if (isNaN(c)) {
          this.url.host = this.base.host
          this.url.path = this.base.path.slice()
          this.url.query = this.base.query
        } else if (c === 63) {
          this.url.host = this.base.host
          this.url.path = this.base.path.slice()
          this.url.query = ''
          this.state = 'query'
        } else if (c === 35) {
          this.url.host = this.base.host
          this.url.path = this.base.path.slice()
          this.url.query = this.base.query
          this.url.fragment = ''
          this.state = 'fragment'
        } else {
          if (
            this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) ||
            (this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
              !fileOtherwiseCodePoints.has(this.input[this.pointer + 2]))
          ) {
            this.url.host = this.base.host
            this.url.path = this.base.path.slice()
            shortenPath(this.url)
          } else {
            this.parseError = true
          }

          this.state = 'path'
          --this.pointer
        }
      } else {
        this.state = 'path'
        --this.pointer
      }

      return true
    }

    URLStateMachine.prototype['parse file slash'] = function parseFileSlash(c) {
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true
        }
        this.state = 'file host'
      } else {
        if (this.base !== null && this.base.scheme === 'file') {
          if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
            this.url.path.push(this.base.path[0])
          } else {
            this.url.host = this.base.host
          }
        }
        this.state = 'path'
        --this.pointer
      }

      return true
    }

    URLStateMachine.prototype['parse file host'] = function parseFileHost(
      c,
      cStr
    ) {
      if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
          this.parseError = true
          this.state = 'path'
        } else if (this.buffer === '') {
          this.url.host = ''
          if (this.stateOverride) {
            return false
          }
          this.state = 'path start'
        } else {
          let host = parseHost(this.buffer, isSpecial(this.url))
          if (host === failure) {
            return failure
          }
          if (host === 'localhost') {
            host = ''
          }
          this.url.host = host

          if (this.stateOverride) {
            return false
          }

          this.buffer = ''
          this.state = 'path start'
        }
      } else {
        this.buffer += cStr
      }

      return true
    }

    URLStateMachine.prototype['parse path start'] = function parsePathStart(c) {
      if (isSpecial(this.url)) {
        if (c === 92) {
          this.parseError = true
        }
        this.state = 'path'

        if (c !== 47 && c !== 92) {
          --this.pointer
        }
      } else if (!this.stateOverride && c === 63) {
        this.url.query = ''
        this.state = 'query'
      } else if (!this.stateOverride && c === 35) {
        this.url.fragment = ''
        this.state = 'fragment'
      } else if (c !== undefined) {
        this.state = 'path'
        if (c !== 47) {
          --this.pointer
        }
      }

      return true
    }

    URLStateMachine.prototype['parse path'] = function parsePath(c) {
      if (
        isNaN(c) ||
        c === 47 ||
        (isSpecial(this.url) && c === 92) ||
        (!this.stateOverride && (c === 63 || c === 35))
      ) {
        if (isSpecial(this.url) && c === 92) {
          this.parseError = true
        }

        if (isDoubleDot(this.buffer)) {
          shortenPath(this.url)
          if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push('')
          }
        } else if (
          isSingleDot(this.buffer) &&
          c !== 47 &&
          !(isSpecial(this.url) && c === 92)
        ) {
          this.url.path.push('')
        } else if (!isSingleDot(this.buffer)) {
          if (
            this.url.scheme === 'file' &&
            this.url.path.length === 0 &&
            isWindowsDriveLetterString(this.buffer)
          ) {
            if (this.url.host !== '' && this.url.host !== null) {
              this.parseError = true
              this.url.host = ''
            }
            this.buffer = this.buffer[0] + ':'
          }
          this.url.path.push(this.buffer)
        }
        this.buffer = ''
        if (
          this.url.scheme === 'file' &&
          (c === undefined || c === 63 || c === 35)
        ) {
          while (this.url.path.length > 1 && this.url.path[0] === '') {
            this.parseError = true
            this.url.path.shift()
          }
        }
        if (c === 63) {
          this.url.query = ''
          this.state = 'query'
        }
        if (c === 35) {
          this.url.fragment = ''
          this.state = 'fragment'
        }
      } else {
        // TODO: If c is not a URL code point and not "%", parse error.

        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true
        }

        this.buffer += percentEncodeChar(c, isPathPercentEncode)
      }

      return true
    }

    URLStateMachine.prototype['parse cannot-be-a-base-URL path'] =
      function parseCannotBeABaseURLPath(c) {
        if (c === 63) {
          this.url.query = ''
          this.state = 'query'
        } else if (c === 35) {
          this.url.fragment = ''
          this.state = 'fragment'
        } else {
          // TODO: Add: not a URL code point
          if (!isNaN(c) && c !== 37) {
            this.parseError = true
          }

          if (
            c === 37 &&
            (!isASCIIHex(this.input[this.pointer + 1]) ||
              !isASCIIHex(this.input[this.pointer + 2]))
          ) {
            this.parseError = true
          }

          if (!isNaN(c)) {
            this.url.path[0] =
              this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode)
          }
        }

        return true
      }

    URLStateMachine.prototype['parse query'] = function parseQuery(c, cStr) {
      if (isNaN(c) || (!this.stateOverride && c === 35)) {
        if (
          !isSpecial(this.url) ||
          this.url.scheme === 'ws' ||
          this.url.scheme === 'wss'
        ) {
          this.encodingOverride = 'utf-8'
        }

        const buffer = new Buffer(this.buffer) // TODO: Use encoding override instead
        for (let i = 0; i < buffer.length; ++i) {
          if (
            buffer[i] < 0x21 ||
            buffer[i] > 0x7e ||
            buffer[i] === 0x22 ||
            buffer[i] === 0x23 ||
            buffer[i] === 0x3c ||
            buffer[i] === 0x3e
          ) {
            this.url.query += percentEncode(buffer[i])
          } else {
            this.url.query += String.fromCodePoint(buffer[i])
          }
        }

        this.buffer = ''
        if (c === 35) {
          this.url.fragment = ''
          this.state = 'fragment'
        }
      } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true
        }

        this.buffer += cStr
      }

      return true
    }

    URLStateMachine.prototype['parse fragment'] = function parseFragment(c) {
      if (isNaN(c)) {
        // do nothing
      } else if (c === 0x0) {
        this.parseError = true
      } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true
        }

        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode)
      }

      return true
    }

    function serializeURL(url, excludeFragment) {
      let output = url.scheme + ':'
      if (url.host !== null) {
        output += '//'

        if (url.username !== '' || url.password !== '') {
          output += url.username
          if (url.password !== '') {
            output += ':' + url.password
          }
          output += '@'
        }

        output += serializeHost(url.host)

        if (url.port !== null) {
          output += ':' + url.port
        }
      } else if (url.host === null && url.scheme === 'file') {
        output += '//'
      }

      if (url.cannotBeABaseURL) {
        output += url.path[0]
      } else {
        for (const string of url.path) {
          output += '/' + string
        }
      }

      if (url.query !== null) {
        output += '?' + url.query
      }

      if (!excludeFragment && url.fragment !== null) {
        output += '#' + url.fragment
      }

      return output
    }

    function serializeOrigin(tuple) {
      let result = tuple.scheme + '://'
      result += serializeHost(tuple.host)

      if (tuple.port !== null) {
        result += ':' + tuple.port
      }

      return result
    }

    module.exports.serializeURL = serializeURL

    module.exports.serializeURLOrigin = function (url) {
      // https://url.spec.whatwg.org/#concept-url-origin
      switch (url.scheme) {
        case 'blob':
          try {
            return module.exports.serializeURLOrigin(
              module.exports.parseURL(url.path[0])
            )
          } catch (e) {
            // serializing an opaque origin returns "null"
            return 'null'
          }
        case 'ftp':
        case 'gopher':
        case 'http':
        case 'https':
        case 'ws':
        case 'wss':
          return serializeOrigin({
            scheme: url.scheme,
            host: url.host,
            port: url.port
          })
        case 'file':
          // spec says "exercise to the reader", chrome says "file://"
          return 'file://'
        default:
          // serializing an opaque origin returns "null"
          return 'null'
      }
    }

    module.exports.basicURLParse = function (input, options) {
      if (options === undefined) {
        options = {}
      }

      const usm = new URLStateMachine(
        input,
        options.baseURL,
        options.encodingOverride,
        options.url,
        options.stateOverride
      )
      if (usm.failure) {
        return 'failure'
      }

      return usm.url
    }

    module.exports.setTheUsername = function (url, username) {
      url.username = ''
      const decoded = punycode.ucs2.decode(username)
      for (let i = 0; i < decoded.length; ++i) {
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode)
      }
    }

    module.exports.setThePassword = function (url, password) {
      url.password = ''
      const decoded = punycode.ucs2.decode(password)
      for (let i = 0; i < decoded.length; ++i) {
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode)
      }
    }

    module.exports.serializeHost = serializeHost

    module.exports.cannotHaveAUsernamePasswordPort =
      cannotHaveAUsernamePasswordPort

    module.exports.serializeInteger = function (integer) {
      return String(integer)
    }

    module.exports.parseURL = function (input, options) {
      if (options === undefined) {
        options = {}
      }

      // We don't handle blobs, so this just delegates:
      return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
      })
    }

    /***/
  },

  /***/ 3185: /***/ (module) => {
    module.exports.mixin = function mixin(target, source) {
      const keys = Object.getOwnPropertyNames(source)
      for (let i = 0; i < keys.length; ++i) {
        Object.defineProperty(
          target,
          keys[i],
          Object.getOwnPropertyDescriptor(source, keys[i])
        )
      }
    }

    module.exports.wrapperSymbol = Symbol('wrapper')
    module.exports.implSymbol = Symbol('impl')

    module.exports.wrapperForImpl = function (impl) {
      return impl[module.exports.wrapperSymbol]
    }

    module.exports.implForWrapper = function (wrapper) {
      return wrapper[module.exports.implSymbol]
    }

    /***/
  },

  /***/ 2940: /***/ (module) => {
    // Returns a wrapper function that returns a wrapped callback
    // The wrapper function should do some stuff, and return a
    // presumably different callback function.
    // This makes sure that own properties are retained, so that
    // decorations and such are not lost along the way.
    module.exports = wrappy
    function wrappy(fn, cb) {
      if (fn && cb) return wrappy(fn)(cb)

      if (typeof fn !== 'function') throw new TypeError('need wrapper function')

      Object.keys(fn).forEach(function (k) {
        wrapper[k] = fn[k]
      })

      return wrapper

      function wrapper() {
        var args = new Array(arguments.length)
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i]
        }
        var ret = fn.apply(this, args)
        var cb = args[args.length - 1]
        if (typeof ret === 'function' && ret !== cb) {
          Object.keys(cb).forEach(function (k) {
            ret[k] = cb[k]
          })
        }
        return ret
      }
    }

    /***/
  },

  /***/ 4091: /***/ (module) => {
    module.exports = function (Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value
        }
      }
    }

    /***/
  },

  /***/ 665: /***/ (module, __unused_webpack_exports, __nccwpck_require__) => {
    module.exports = Yallist

    Yallist.Node = Node
    Yallist.create = Yallist

    function Yallist(list) {
      var self = this
      if (!(self instanceof Yallist)) {
        self = new Yallist()
      }

      self.tail = null
      self.head = null
      self.length = 0

      if (list && typeof list.forEach === 'function') {
        list.forEach(function (item) {
          self.push(item)
        })
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i])
        }
      }

      return self
    }

    Yallist.prototype.removeNode = function (node) {
      if (node.list !== this) {
        throw new Error('removing node which does not belong to this list')
      }

      var next = node.next
      var prev = node.prev

      if (next) {
        next.prev = prev
      }

      if (prev) {
        prev.next = next
      }

      if (node === this.head) {
        this.head = next
      }
      if (node === this.tail) {
        this.tail = prev
      }

      node.list.length--
      node.next = null
      node.prev = null
      node.list = null

      return next
    }

    Yallist.prototype.unshiftNode = function (node) {
      if (node === this.head) {
        return
      }

      if (node.list) {
        node.list.removeNode(node)
      }

      var head = this.head
      node.list = this
      node.next = head
      if (head) {
        head.prev = node
      }

      this.head = node
      if (!this.tail) {
        this.tail = node
      }
      this.length++
    }

    Yallist.prototype.pushNode = function (node) {
      if (node === this.tail) {
        return
      }

      if (node.list) {
        node.list.removeNode(node)
      }

      var tail = this.tail
      node.list = this
      node.prev = tail
      if (tail) {
        tail.next = node
      }

      this.tail = node
      if (!this.head) {
        this.head = node
      }
      this.length++
    }

    Yallist.prototype.push = function () {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i])
      }
      return this.length
    }

    Yallist.prototype.unshift = function () {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i])
      }
      return this.length
    }

    Yallist.prototype.pop = function () {
      if (!this.tail) {
        return undefined
      }

      var res = this.tail.value
      this.tail = this.tail.prev
      if (this.tail) {
        this.tail.next = null
      } else {
        this.head = null
      }
      this.length--
      return res
    }

    Yallist.prototype.shift = function () {
      if (!this.head) {
        return undefined
      }

      var res = this.head.value
      this.head = this.head.next
      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null
      }
      this.length--
      return res
    }

    Yallist.prototype.forEach = function (fn, thisp) {
      thisp = thisp || this
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this)
        walker = walker.next
      }
    }

    Yallist.prototype.forEachReverse = function (fn, thisp) {
      thisp = thisp || this
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this)
        walker = walker.prev
      }
    }

    Yallist.prototype.get = function (n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        // abort out of the list early if we hit a cycle
        walker = walker.next
      }
      if (i === n && walker !== null) {
        return walker.value
      }
    }

    Yallist.prototype.getReverse = function (n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        // abort out of the list early if we hit a cycle
        walker = walker.prev
      }
      if (i === n && walker !== null) {
        return walker.value
      }
    }

    Yallist.prototype.map = function (fn, thisp) {
      thisp = thisp || this
      var res = new Yallist()
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this))
        walker = walker.next
      }
      return res
    }

    Yallist.prototype.mapReverse = function (fn, thisp) {
      thisp = thisp || this
      var res = new Yallist()
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this))
        walker = walker.prev
      }
      return res
    }

    Yallist.prototype.reduce = function (fn, initial) {
      var acc
      var walker = this.head
      if (arguments.length > 1) {
        acc = initial
      } else if (this.head) {
        walker = this.head.next
        acc = this.head.value
      } else {
        throw new TypeError('Reduce of empty list with no initial value')
      }

      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i)
        walker = walker.next
      }

      return acc
    }

    Yallist.prototype.reduceReverse = function (fn, initial) {
      var acc
      var walker = this.tail
      if (arguments.length > 1) {
        acc = initial
      } else if (this.tail) {
        walker = this.tail.prev
        acc = this.tail.value
      } else {
        throw new TypeError('Reduce of empty list with no initial value')
      }

      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i)
        walker = walker.prev
      }

      return acc
    }

    Yallist.prototype.toArray = function () {
      var arr = new Array(this.length)
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value
        walker = walker.next
      }
      return arr
    }

    Yallist.prototype.toArrayReverse = function () {
      var arr = new Array(this.length)
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value
        walker = walker.prev
      }
      return arr
    }

    Yallist.prototype.slice = function (from, to) {
      to = to || this.length
      if (to < 0) {
        to += this.length
      }
      from = from || 0
      if (from < 0) {
        from += this.length
      }
      var ret = new Yallist()
      if (to < from || to < 0) {
        return ret
      }
      if (from < 0) {
        from = 0
      }
      if (to > this.length) {
        to = this.length
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value)
      }
      return ret
    }

    Yallist.prototype.sliceReverse = function (from, to) {
      to = to || this.length
      if (to < 0) {
        to += this.length
      }
      from = from || 0
      if (from < 0) {
        from += this.length
      }
      var ret = new Yallist()
      if (to < from || to < 0) {
        return ret
      }
      if (from < 0) {
        from = 0
      }
      if (to > this.length) {
        to = this.length
      }
      for (
        var i = this.length, walker = this.tail;
        walker !== null && i > to;
        i--
      ) {
        walker = walker.prev
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value)
      }
      return ret
    }

    Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1
      }
      if (start < 0) {
        start = this.length + start
      }

      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next
      }

      var ret = []
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value)
        walker = this.removeNode(walker)
      }
      if (walker === null) {
        walker = this.tail
      }

      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev
      }

      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i])
      }
      return ret
    }

    Yallist.prototype.reverse = function () {
      var head = this.head
      var tail = this.tail
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev
        walker.prev = walker.next
        walker.next = p
      }
      this.head = tail
      this.tail = head
      return this
    }

    function insert(self, node, value) {
      var inserted =
        node === self.head
          ? new Node(value, null, node, self)
          : new Node(value, node, node.next, self)

      if (inserted.next === null) {
        self.tail = inserted
      }
      if (inserted.prev === null) {
        self.head = inserted
      }

      self.length++

      return inserted
    }

    function push(self, item) {
      self.tail = new Node(item, self.tail, null, self)
      if (!self.head) {
        self.head = self.tail
      }
      self.length++
    }

    function unshift(self, item) {
      self.head = new Node(item, null, self.head, self)
      if (!self.tail) {
        self.tail = self.head
      }
      self.length++
    }

    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list)
      }

      this.list = list
      this.value = value

      if (prev) {
        prev.next = this
        this.prev = prev
      } else {
        this.prev = null
      }

      if (next) {
        next.prev = this
        this.next = next
      } else {
        this.next = null
      }
    }

    try {
      // add if support for Symbol.iterator is present
      __nccwpck_require__(4091)(Yallist)
    } catch (er) {}

    /***/
  },

  /***/ 2877: /***/ (module) => {
    module.exports = eval('require')('encoding')

    /***/
  },

  /***/ 9491: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('assert')

    /***/
  },

  /***/ 4300: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('buffer')

    /***/
  },

  /***/ 6113: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('crypto')

    /***/
  },

  /***/ 2361: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('events')

    /***/
  },

  /***/ 7147: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('fs')

    /***/
  },

  /***/ 3685: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('http')

    /***/
  },

  /***/ 5687: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('https')

    /***/
  },

  /***/ 1808: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('net')

    /***/
  },

  /***/ 2037: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('os')

    /***/
  },

  /***/ 1017: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('path')

    /***/
  },

  /***/ 5477: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)(
      'punycode'
    )

    /***/
  },

  /***/ 2781: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('stream')

    /***/
  },

  /***/ 4404: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('tls')

    /***/
  },

  /***/ 7310: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('url')

    /***/
  },

  /***/ 3837: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('util')

    /***/
  },

  /***/ 9796: /***/ (module) => {
    module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('zlib')

    /***/
  },

  /***/ 2020: /***/ (module) => {
    module.exports = JSON.parse(
    )

    /***/
  }

  /******/
}
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {}
/******/
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
  /******/ // Check if module is in cache
  /******/ var cachedModule = __webpack_module_cache__[moduleId]
  /******/ if (cachedModule !== undefined) {
    /******/ return cachedModule.exports
    /******/
  }
  /******/ // Create a new module (and put it into the cache)
  /******/ var module = (__webpack_module_cache__[moduleId] = {
    /******/ // no module.id needed
    /******/ // no module.loaded needed
    /******/ exports: {}
    /******/
  })
  /******/
  /******/ // Execute the module function
  /******/ var threw = true
  /******/ try {
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __nccwpck_require__
    )
    /******/ threw = false
    /******/
  } finally {
    /******/ if (threw) delete __webpack_module_cache__[moduleId]
    /******/
  }
  /******/
  /******/ // Return the exports of the module
  /******/ return module.exports
  /******/
}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/
/******/ if (typeof __nccwpck_require__ !== 'undefined')
  __nccwpck_require__.ab =
    new URL('.', import.meta.url).pathname.slice(
      import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0,
      -1
    ) + '/'
/******/
/************************************************************************/
var __webpack_exports__ = {}
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
;(() => {
  // EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
  var core = __nccwpck_require__(2186)
  // EXTERNAL MODULE: ./node_modules/@actions/github/lib/github.js
  var github = __nccwpck_require__(5438)
  // EXTERNAL MODULE: ./node_modules/@octokit/rest/dist-node/index.js
  var dist_node = __nccwpck_require__(5375)
  // EXTERNAL MODULE: ./node_modules/@octokit/auth-app/dist-node/index.js
  var auth_app_dist_node = __nccwpck_require__(7541) // CONCATENATED MODULE: ./src/lib/gh-invite.js
  /* harmony default export */ async function gh_invite(
    github,
    owner,
    user,
    core
  ) {
    core.info('Checking membership and invitation status...')

    try {
      // check failed invites
      const failedInvites = await github.rest.orgs.listFailedInvitations({
        org: owner,
        per_page: 100
      })
      const failedInvite = failedInvites.data.find(
        (i) => i.login === user.login
      )
      if (failedInvite) {
        core.debug('Invitation failed')
        return
      }

      // check pending invites
      const pendingInvites = await github.rest.orgs.listPendingInvitations({
        org: owner,
        per_page: 100
      })
      const pendingInvite = pendingInvites.data.find(
        (i) => i.login === user.login
      )
      if (pendingInvite) {
        core.debug('Invitation pending')
        return
      }

      // check membership status
      const isMember = await github.rest.orgs.getMembershipForUser({
        org: owner,
        username: user.login
      })
      if (isMember) {
        return
      }

      // invite is not pending or failed, user is not a member, let's invite
      core.info('Inviting user')
      await github.rest.orgs.createInvitation({
        org: owner,
        invitee_id: user.id
      })
    } catch (err) {
      if (err.status === 404) {
        await github.rest.orgs.createInvitation({
          org: owner,
          invitee_id: user.id
        })
      }
    }
  } // CONCATENATED MODULE: ./src/lib/gh-query.js

  async function query(octokit, owner, repo, core) {
    core.info('Querying for reactions')

    const query = `
    query reactions($owner: String!, $repo: String!, $size: Int!) {
      repository(name: $repo, owner: $owner) {
        issues(first: $size, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            reactions(first: $size) {
              nodes {
                user {
                  databaseId
                  login
                }
              }
              totalCount
            }
          }
        }
        discussions(
          first: $size
          orderBy: { field: CREATED_AT, direction: DESC }
        ) {
          nodes {
            reactions(first: $size) {
              totalCount
              nodes {
                user {
                  databaseId
                  login
                }
              }
            }
          }
        }
      }
    }
  `

    const { repository } = await octokit.graphql(query, {
      owner: owner,
      repo: repo,
      size: 10
    })

    const users = repository.issues.nodes
      .map((i) => {
        return i.reactions.nodes
          .map((r) => {
            return { login: r.user.login, id: r.user.databaseId }
          })
          .flat()
      })
      .concat(
        repository.discussions.nodes.map((d) => {
          return d.reactions.nodes
            .map((r) => {
              return { login: r.user.login, id: r.user.databaseId }
            })
            .flat()
        })
      )
      .flat()

    const resArr = []
    users.filter(function (item) {
      var i = resArr.findIndex((x) => x.login == item.login && x.id == item.id)
      if (i <= -1) {
        resArr.push(item)
      }
      return null
    })

    return resArr
  } // CONCATENATED MODULE: ./src/index.js

  async function run() {
    core.info('Starting GitEvents Inclusive Org ...')

    // for local integration testing
    // const token = process.env.GITHUB_TOKEN
    // const octokit = github.getOctokit(token)
    // const context = github.context
    // const owner = 'cyprus-developer-community'
    // const repo = 'events'

    const appId = core.getInput('gitevents-app-id', {
      required: true
    })
    const appPrivateKey = core.getInput('gitevents-app-private-key', {
      required: true
    })
    const appInstallationId = core.getInput('gitevents-app-installation-id', {
      required: true
    })

    core.info(
      `Running Inclusive Org with App ID ${appId} and Installation ID ${appInstallationId} ...`
    )

    const context = github.context
    const octokit = new dist_node /* Octokit */.v({
      authStrategy: auth_app_dist_node /* createAppAuth */.iq,
      auth: {
        appId: appId,
        privateKey: appPrivateKey,
        installationId: appInstallationId
      }
    })
    const { data: appUser } = await octokit.rest.apps.getAuthenticated()
    const botUser = `${appUser.slug}[bot]`
    context.botUser = botUser

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')

    if (context.eventName === 'workflow_dispatch') {
      const users = await query(octokit, owner, repo, core)
      for (const user of users) {
        await gh_invite(octokit, owner, user, core)
      }
    } else if (context.eventName === 'schedule') {
      const users = await query(octokit, owner, repo, core)
      for (const user of users) {
        await gh_invite(octokit, owner, user, core)
      }
    } else {
      await gh_invite(octokit, owner, context.payload.sender, core)
    }
  }

  run()
})()