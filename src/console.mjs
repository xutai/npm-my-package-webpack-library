


export function consoleApi(type = 'log', ...restParameters) {
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
    const fn = new Function(
        ...paramsArr,
        `console.${type}(
            ${newStr}
        )`
    )
    return fn
}
// consoleApi('trace', 'a', 'b')(a, b)


export function consoleAll(msg) {
    console.clear("console.clear()",msg)
    console.assert("console.assert()",msg)
    console.count("console.count()",msg)
    console.countReset("console.countReset()",msg)
    console.debug("console.debug()",msg)
    console.dir("console.dir()",msg)
    console.dirxml("console.dirxml()",msg)
    console.error("console.error()",msg)
    console.group("console.group()",msg)
    console.groupCollapsed("console.groupCollapsed()",msg)
    console.info("console.info()",msg)
    console.log("console.log()",msg)
    console.table("console.table()",msg)
    console.time("console.time()",msg)
    console.timeEnd("console.timeEnd()",msg)
    console.timeLog("console.timeLog()",msg)
    console.trace("console.trace()",msg)
    console.warn("console.warn()",msg)
    console.groupEnd("console.groupEnd()",msg)
}

// consoleAll('5')