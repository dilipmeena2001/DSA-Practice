function cartesianProduct(set_A,set_B){
    const result = []
    for(let i=0;i<set_A.length;i++){
        for(let j=0; j < set_B.length;j++){
            result.push([set_A[i], set_B[j]])
        }
    }

    return result
}

const set_A = [1,2];
const set_B = [3,4]

console.log("🚀 ~ cartesianProduct ~ cartesianProduct:", cartesianProduct(set_A, set_B))
