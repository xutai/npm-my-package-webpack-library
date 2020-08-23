


export function consoleApi(type = 'log', ...restParameters) {
    try {
        const paramsArr = [...restParameters]
        const newShadowCopiedArr = Array.from(
            paramsArr,
            item => "\"" + item + "\",'" + item + "'",
            paramsArr
        )
        let paramsStr = "" + newShadowCopiedArr.join(",") + ""
        const regexp = /'/g
        const replacement = ""
        const newStr = paramsStr.replace(
            regexp,
            replacement
        )
        // debugger
        try {
            // ## this logic might be verbose, as args are not required in this context!!
            // if (paramsArr.includes('this')){
            //     paramsArr[paramsArr.indexOf('this')] = 'thisArg'
            // }
            // console.info(paramsArr)
            const fn = new Function(
                // ## if i really want to use ...paramsArr, i have to fix the code
                // ## "this" won't be a valid formal argument name
                // ...paramsArr
                undefined,
                `
                try {
                    console.${type}(
                        ${newStr}
                    )
                } catch (e) {
                    throw new Error(e)
                } finally {}
              
                `
            )
            return fn
        }
        catch (e) {
            throw new Error(`catch an another error! ${e}`)
        }
    } catch (e) {
        throw new Error(`catch an error! ${e}`)
    } finally {
    }

}

// simple example
// const a = 1
// const b = 2
// consoleApi('trace', 'a', 'b')(a, b)

// try 
// const a = 1
// const b = 2
// consoleApi('trace', 'this')(this)


// bad practice
// new Function('this', 'console.log(1)')
// Uncaught SyntaxError: missing formal parameter


export function consoleAll(msg) {
    console.clear("console.clear()", msg)
    console.assert("console.assert()", msg)
    console.count("console.count()", msg)
    console.countReset("console.countReset()", msg)
    console.debug("console.debug()", msg)
    console.dir("console.dir()", msg)
    console.dirxml("console.dirxml()", msg)
    console.error("console.error()", msg)
    console.group("console.group()", msg)
    console.groupCollapsed("console.groupCollapsed()", msg)
    console.info("console.info()", msg)
    console.log("console.log()", msg)
    console.table("console.table()", msg)
    console.time("console.time()", msg)
    console.timeEnd("console.timeEnd()", msg)
    console.timeLog("console.timeLog()", msg)
    console.trace("console.trace()", msg)
    console.warn("console.warn()", msg)
    console.groupEnd("console.groupEnd()", msg)
}

// consoleAll('5')