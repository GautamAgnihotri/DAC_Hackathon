function createResult(error,data){
    const result = {};
    if(!error){
        result.status = "success";
        result.data = data;
        return result;
    } else{
        result.status = "error";
        result.error = error;
        return result;
    }
}

function createSuccessResult(data){
    const result = {};
    result.status = "success";
    result.data = data;
    return result;
}

function createErrorResult(error){
    const result = {};
    result.status = "error";
    result.error = error;
    return result;
}

module.exports = {createResult,createSuccessResult,createErrorResult};