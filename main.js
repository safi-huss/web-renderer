var CVector = /** @class */ (function () {
    function CVector(arg_vV) {
        this.m_vV = arg_vV;
    }
    return CVector;
}());
function VectorAdd(arg_vA, arg_vB) {
    return new CVector([arg_vA.m_vV[0] + arg_vB.m_vV[0], arg_vA.m_vV[1] + arg_vB.m_vV[1], arg_vA.m_vV[2] + arg_vB.m_vV[2], arg_vA.m_vV[3] + arg_vB.m_vV[3]]);
}
function VectorSub(arg_vA, arg_vB) {
    return new CVector([arg_vA.m_vV[0] - arg_vB.m_vV[0], arg_vA.m_vV[1] - arg_vB.m_vV[1], arg_vA.m_vV[2] - arg_vB.m_vV[2], arg_vA.m_vV[3] - arg_vB.m_vV[3]]);
}
function VectorDot(arg_vA, arg_vB) {
    return (arg_vA.m_vV[0] * arg_vB.m_vV[0]) + (arg_vA.m_vV[1] * arg_vB.m_vV[1]) + (arg_vA.m_vV[2] * arg_vB.m_vV[2]) + (arg_vA.m_vV[3] * arg_vB.m_vV[3]);
}
function VectorCross(arg_vA, arg_vB) {
    return new CVector([arg_vA.m_vV[1] * arg_vB.m_vV[2] - arg_vA.m_vV[2] * arg_vB.m_vV[1],
        arg_vA.m_vV[2] * arg_vB.m_vV[0] - arg_vA.m_vV[0] * arg_vB.m_vV[2],
        arg_vA.m_vV[0] * arg_vB.m_vV[1] - arg_vA.m_vV[1] * arg_vB.m_vV[0],
        0]);
}
function Vector4Mag(arg_vA) {
    return Math.sqrt((arg_vA.m_vV[0] * arg_vA.m_vV[0]) + (arg_vA.m_vV[1] * arg_vA.m_vV[1]) + (arg_vA.m_vV[2] * arg_vA.m_vV[2]) + (arg_vA.m_vV[3] * arg_vA.m_vV[3]));
}
function Vector3Mag(arg_vA) {
    return Math.sqrt((arg_vA.m_vV[0] * arg_vA.m_vV[0]) + (arg_vA.m_vV[1] * arg_vA.m_vV[1]) + (arg_vA.m_vV[2] * arg_vA.m_vV[2]));
}
function VectorScale(arg_vA, arg_fB) {
    return new CVector([arg_vA.m_vV[0] * arg_fB, arg_vA.m_vV[1] * arg_fB, arg_vA.m_vV[2] * arg_fB, arg_vA.m_vV[3] * arg_fB]);
}
function VectorNeg(arg_fA) {
    return new CVector([-arg_fA.m_vV[0], -arg_fA.m_vV[1], -arg_fA.m_vV[2], -arg_fA.m_vV[3]]);
}
function Vector4Normalize(arg_vA) {
    return new CVector([arg_vA.m_vV[0] / Vector4Mag(arg_vA),
        arg_vA.m_vV[1] / Vector4Mag(arg_vA),
        arg_vA.m_vV[2] / Vector4Mag(arg_vA),
        arg_vA.m_vV[3] / Vector4Mag(arg_vA)]);
}
function Vector3Normalize(arg_vA) {
    return new CVector([arg_vA.m_vV[0] / Vector3Mag(arg_vA),
        arg_vA.m_vV[1] / Vector3Mag(arg_vA),
        arg_vA.m_vV[2] / Vector3Mag(arg_vA),
        0]);
}
var CMatrix = /** @class */ (function () {
    //Constructor
    function CMatrix(arg_vM) {
        this.m_vM = arg_vM;
    }
    return CMatrix;
}());
function MatrixZero() {
    return new CMatrix([
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ]);
}
function MatrixIdentity() {
    return new CMatrix([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
}
function MatrixTransform(arg_matMatrix, arg_v4Vector) {
    return new CVector([arg_matMatrix.m_vM[0 * 4 + 0] * arg_v4Vector.m_vV[0] + arg_matMatrix.m_vM[0 * 4 + 1] * arg_v4Vector.m_vV[1] + arg_matMatrix.m_vM[0 * 4 + 2] * arg_v4Vector.m_vV[2] + arg_matMatrix.m_vM[0 * 4 + 3] * arg_v4Vector.m_vV[3],
        arg_matMatrix.m_vM[1 * 4 + 0] * arg_v4Vector.m_vV[0] + arg_matMatrix.m_vM[1 * 4 + 1] * arg_v4Vector.m_vV[1] + arg_matMatrix.m_vM[1 * 4 + 2] * arg_v4Vector.m_vV[2] + arg_matMatrix.m_vM[1 * 4 + 3] * arg_v4Vector.m_vV[3],
        arg_matMatrix.m_vM[2 * 4 + 0] * arg_v4Vector.m_vV[0] + arg_matMatrix.m_vM[2 * 4 + 1] * arg_v4Vector.m_vV[1] + arg_matMatrix.m_vM[2 * 4 + 2] * arg_v4Vector.m_vV[2] + arg_matMatrix.m_vM[2 * 4 + 3] * arg_v4Vector.m_vV[3],
        arg_matMatrix.m_vM[3 * 4 + 0] * arg_v4Vector.m_vV[0] + arg_matMatrix.m_vM[3 * 4 + 1] * arg_v4Vector.m_vV[1] + arg_matMatrix.m_vM[3 * 4 + 2] * arg_v4Vector.m_vV[2] + arg_matMatrix.m_vM[3 * 4 + 3] * arg_v4Vector.m_vV[3]]);
}
function MatrixRotationX(arg_fRads) {
    var fCos = Math.cos(arg_fRads);
    var fSin = Math.sin(arg_fRads);
    console.log("Cos : " + fCos + " Input : " + arg_fRads);
    return new CMatrix([1, 0, 0, 0,
        0, fCos, fSin, 0,
        0, -fSin, fCos, 0,
        0, 0, 0, 1]);
}
function MatrixRotationY(arg_fRads) {
    var fCos = Math.cos(arg_fRads);
    var fSin = Math.sin(arg_fRads);
    return new CMatrix([fCos, 0, -fSin, 0,
        0, 1, 0, 0,
        fSin, 0, fCos, 0,
        0, 0, 0, 1]);
}
function MatrixRotationZ(arg_fRads) {
    var fCos = Math.cos(arg_fRads);
    var fSin = Math.sin(arg_fRads);
    return new CMatrix([fCos, -fSin, 0, 0,
        fSin, fCos, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1]);
}
function MatrixAdd(arg_matA, arg_matB) {
    var matRet = MatrixZero();
    var iter_matB = 0;
    for (var iter_matA in arg_matA) {
        matRet[iter_matB] = arg_matA[iter_matA] + arg_matB[iter_matB];
    }
    return matRet;
}
function MatrixSub(arg_matA, arg_matB) {
    var matRet = MatrixZero();
    var iter_matB = 0;
    for (var iter_matA in arg_matA) {
        matRet[iter_matB] = arg_matA[iter_matA] - arg_matB[iter_matB];
    }
    return matRet;
}
function MatrixMultiply(arg_mat1, arg_mat2) {
    var A00 = arg_mat1.m_vM[0 * 4 + 0];
    var A01 = arg_mat1.m_vM[0 * 4 + 1];
    var A02 = arg_mat1.m_vM[0 * 4 + 2];
    var A03 = arg_mat1.m_vM[0 * 4 + 3];
    var A10 = arg_mat1.m_vM[1 * 4 + 0];
    var A11 = arg_mat1.m_vM[1 * 4 + 1];
    var A12 = arg_mat1.m_vM[1 * 4 + 2];
    var A13 = arg_mat1.m_vM[1 * 4 + 3];
    var A20 = arg_mat1.m_vM[2 * 4 + 0];
    var A21 = arg_mat1.m_vM[2 * 4 + 1];
    var A22 = arg_mat1.m_vM[2 * 4 + 2];
    var A23 = arg_mat1.m_vM[2 * 4 + 3];
    var A30 = arg_mat1.m_vM[3 * 4 + 0];
    var A31 = arg_mat1.m_vM[3 * 4 + 1];
    var A32 = arg_mat1.m_vM[3 * 4 + 2];
    var A33 = arg_mat1.m_vM[3 * 4 + 3];
    var B00 = arg_mat2.m_vM[0 * 4 + 0];
    var B01 = arg_mat2.m_vM[0 * 4 + 1];
    var B02 = arg_mat2.m_vM[0 * 4 + 2];
    var B03 = arg_mat2.m_vM[0 * 4 + 3];
    var B10 = arg_mat2.m_vM[1 * 4 + 0];
    var B11 = arg_mat2.m_vM[1 * 4 + 1];
    var B12 = arg_mat2.m_vM[1 * 4 + 2];
    var B13 = arg_mat2.m_vM[1 * 4 + 3];
    var B20 = arg_mat2.m_vM[2 * 4 + 0];
    var B21 = arg_mat2.m_vM[2 * 4 + 1];
    var B22 = arg_mat2.m_vM[2 * 4 + 2];
    var B23 = arg_mat2.m_vM[2 * 4 + 3];
    var B30 = arg_mat2.m_vM[3 * 4 + 0];
    var B31 = arg_mat2.m_vM[3 * 4 + 1];
    var B32 = arg_mat2.m_vM[3 * 4 + 2];
    var B33 = arg_mat2.m_vM[3 * 4 + 3];
    return new CMatrix([
        B00 * A00 + B01 * A10 + B02 * A20 + B03 * A30,
        B00 * A01 + B01 * A11 + B02 * A21 + B03 * A31,
        B00 * A02 + B01 * A12 + B02 * A22 + B03 * A32,
        B00 * A03 + B01 * A13 + B02 * A23 + B03 * A33,
        B10 * A00 + B11 * A10 + B12 * A20 + B13 * A30,
        B10 * A01 + B11 * A11 + B12 * A21 + B13 * A31,
        B10 * A02 + B11 * A12 + B12 * A22 + B13 * A32,
        B10 * A03 + B11 * A13 + B12 * A23 + B13 * A33,
        B20 * A00 + B21 * A10 + B22 * A20 + B23 * A30,
        B20 * A01 + B21 * A11 + B22 * A21 + B23 * A31,
        B20 * A02 + B21 * A12 + B22 * A22 + B23 * A32,
        B20 * A03 + B21 * A13 + B22 * A23 + B23 * A33,
        B30 * A00 + B31 * A10 + B32 * A20 + B33 * A30,
        B30 * A01 + B31 * A11 + B32 * A21 + B33 * A31,
        B30 * A02 + B31 * A12 + B32 * A22 + B33 * A32,
        B30 * A03 + B31 * A13 + B32 * A23 + B33 * A33
    ]);
}
function MatrixRotationPitchYawRoll(arg_fRadPitch, arg_fRadYaw, arg_fRadRoll) {
    return MatrixMultiply(MatrixMultiply(MatrixRotationX(arg_fRadPitch), MatrixRotationY(arg_fRadYaw)), MatrixRotationZ(arg_fRadRoll));
}
function MatrixTranslate(arg_v4V) {
    return new CMatrix([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        arg_v4V.m_vV[0], arg_v4V.m_vV[1], arg_v4V.m_vV[2], 1
    ]);
}
function MatrixPerspective(arg_fRadFov, arg_fAspect, arg_fNearZ, arg_fFarZ) {
    var fFactor = Math.tan(Math.PI * 0.5 - 0.5 * arg_fRadFov);
    var fRangeInv = 1.0 / (arg_fNearZ - arg_fFarZ);
    return new CMatrix([
        fFactor / fAspect, 0, 0, 0,
        0, fFactor, 0, 0,
        0, 0, (fNearZ + fFarZ) * fRangeInv, -1,
        0, 0, fNearZ * fFarZ * fRangeInv * 2.0, 0
    ]);
}
function MatrixLookAt(arg_vCameraPosition, arg_vTarget, arg_vUp) {
    var vAxisZ = Vector3Normalize(VectorSub(arg_vTarget, arg_vCameraPosition));
    var vAxisX = Vector3Normalize(VectorCross(arg_vUp, vAxisZ));
    var vAxisY = Vector3Normalize(VectorCross(vAxisZ, vAxisX));
    return new CMatrix([vAxisX.m_vV[0], vAxisX.m_vV[1], vAxisX.m_vV[2], 0,
        vAxisY.m_vV[0], vAxisY.m_vV[1], vAxisY.m_vV[2], 0,
        vAxisZ.m_vV[0], vAxisZ.m_vV[1], vAxisZ.m_vV[2], 0,
        arg_vCameraPosition.m_vV[0], arg_vCameraPosition.m_vV[1], arg_vCameraPosition.m_vV[2], 1]);
}
function MatrixInverse(arg_vA) {
    var m00 = arg_vA.m_vM[0 * 4 + 0];
    var m01 = arg_vA.m_vM[0 * 4 + 1];
    var m02 = arg_vA.m_vM[0 * 4 + 2];
    var m03 = arg_vA.m_vM[0 * 4 + 3];
    var m10 = arg_vA.m_vM[1 * 4 + 0];
    var m11 = arg_vA.m_vM[1 * 4 + 1];
    var m12 = arg_vA.m_vM[1 * 4 + 2];
    var m13 = arg_vA.m_vM[1 * 4 + 3];
    var m20 = arg_vA.m_vM[2 * 4 + 0];
    var m21 = arg_vA.m_vM[2 * 4 + 1];
    var m22 = arg_vA.m_vM[2 * 4 + 2];
    var m23 = arg_vA.m_vM[2 * 4 + 3];
    var m30 = arg_vA.m_vM[3 * 4 + 0];
    var m31 = arg_vA.m_vM[3 * 4 + 1];
    var m32 = arg_vA.m_vM[3 * 4 + 2];
    var m33 = arg_vA.m_vM[3 * 4 + 3];
    var tmp_0 = m22 * m33;
    var tmp_1 = m32 * m23;
    var tmp_2 = m12 * m33;
    var tmp_3 = m32 * m13;
    var tmp_4 = m12 * m23;
    var tmp_5 = m22 * m13;
    var tmp_6 = m02 * m33;
    var tmp_7 = m32 * m03;
    var tmp_8 = m02 * m23;
    var tmp_9 = m22 * m03;
    var tmp_10 = m02 * m13;
    var tmp_11 = m12 * m03;
    var tmp_12 = m20 * m31;
    var tmp_13 = m30 * m21;
    var tmp_14 = m10 * m31;
    var tmp_15 = m30 * m11;
    var tmp_16 = m10 * m21;
    var tmp_17 = m20 * m11;
    var tmp_18 = m00 * m31;
    var tmp_19 = m30 * m01;
    var tmp_20 = m00 * m21;
    var tmp_21 = m20 * m01;
    var tmp_22 = m00 * m11;
    var tmp_23 = m10 * m01;
    var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
        (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
        (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
        (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
        (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
    var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
    return new CMatrix([d * t0, d * t1, d * t2, d * t3,
        d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
        d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
        d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
        d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
        d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
        d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
        d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
        d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
        d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
        d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
        d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
        d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02))]);
}
function Deg2Rad(arg_fDeg) {
    return arg_fDeg * Math.PI / 180.0;
}
function Rad2Deg(arg_fRad) {
    return arg_fRad * 180.0 / Math.PI;
}
function CreateShader(arg_glContext, arg_objType, arg_strSource) {
    var objShader = arg_glContext.createShader(arg_objType);
    arg_glContext.shaderSource(objShader, arg_strSource);
    arg_glContext.compileShader(objShader);
    var bSuccess = arg_glContext.getShaderParameter(objShader, arg_glContext.COMPILE_STATUS);
    if (bSuccess) {
        return objShader;
    }
    console.log(arg_glContext.getShaderInfoLog(objShader));
    arg_glContext.deleteShader(objShader);
}
function CreateProgram(arg_glContext, arg_objVertexShader, arg_objFragShader) {
    var objProgram = arg_glContext.createProgram();
    arg_glContext.attachShader(objProgram, arg_objVertexShader);
    arg_glContext.attachShader(objProgram, arg_objFragShader);
    arg_glContext.linkProgram(objProgram);
    var bSuccess = arg_glContext.getProgramParameter(objProgram, arg_glContext.LINK_STATUS);
    if (bSuccess) {
        return objProgram;
    }
    console.log(arg_glContext.getProgramInfoLog(objProgram));
    arg_glContext.deleteProgram(objProgram);
}
console.log("Test");
var objCanvas = document.getElementById('render-canvas');
var glContext = objCanvas.getContext("webgl2");
glContext.canvas.addEventListener("mousemove", function (evMouseMove) {
    evMouseMove.preventDefault();
    var fDeltaX = 0.001 * evMouseMove.movementX;
    var fDeltaY = 0.001 * evMouseMove.movementY;
    fPitchAngle = fDeltaY;
    fYawAngle = fDeltaX;
    var matRotProd = MatrixMultiply(MatrixRotationY(fYawAngle), MatrixRotationX(fPitchAngle));
    matViewMatrix = MatrixMultiply(matRotProd, matViewMatrix);
});
window.addEventListener("keydown", function (evKey) {
    evKey.preventDefault();
    switch (evKey.code) {
        case "KeyW":
            var fForward = 0.2;
            vCamera = VectorAdd(vCamera, VectorScale(vCameraDirection, fForward));
            matViewMatrix.m_vM[12] += VectorScale(vCameraDirection, fForward).m_vV[0];
            matViewMatrix.m_vM[13] += VectorScale(vCameraDirection, fForward).m_vV[1];
            matViewMatrix.m_vM[14] += VectorScale(vCameraDirection, fForward).m_vV[2];
            break;
        case "KeyS":
            var fBackward = -0.2;
            vCamera = VectorAdd(vCamera, VectorScale(vCameraDirection, fBackward));
            matViewMatrix.m_vM[12] += VectorScale(vCameraDirection, fBackward).m_vV[0];
            matViewMatrix.m_vM[13] += VectorScale(vCameraDirection, fBackward).m_vV[1];
            matViewMatrix.m_vM[14] += VectorScale(vCameraDirection, fBackward).m_vV[2];
            break;
        case "KeyA":
            var fLeft = 0.2;
            var vLeft = Vector3Normalize(VectorCross(vCameraDirection, vUpVect));
            var vScaled = VectorScale(vLeft, fLeft);
            vCamera = VectorAdd(vCamera, vScaled);
            matViewMatrix.m_vM[12] += vScaled.m_vV[0];
            matViewMatrix.m_vM[13] += vScaled.m_vV[1];
            matViewMatrix.m_vM[14] += vScaled.m_vV[2];
            break;
        case "KeyD":
            var fRight = 0.2;
            var vRight = Vector3Normalize(VectorCross(vUpVect, vCameraDirection));
            var vScaled = VectorScale(vRight, fRight);
            vCamera = VectorAdd(vCamera, vScaled);
            matViewMatrix.m_vM[12] += vScaled.m_vV[0];
            matViewMatrix.m_vM[13] += vScaled.m_vV[1];
            matViewMatrix.m_vM[14] += vScaled.m_vV[2];
            break;
        default:
            break;
    }
});
glContext.canvas.addEventListener("wheel", function (evWheel) {
    evWheel.preventDefault();
    var fRollAngle = evWheel.deltaY * -0.0001;
    matViewMatrix = MatrixMultiply(MatrixRotationZ(fRollAngle), matViewMatrix);
    vUpVect = Vector3Normalize(MatrixTransform(matViewMatrix, vUpVect));
});
var strVertexShaderCode = "#version 300 es\n\nin vec3 v3Position;\nin vec3 v3Normal;\n\nuniform mat4 matWorld;\nuniform mat4 matView;\nuniform mat4 matProj;\n\nout vec3 vNormal;\n\nvoid main()\n{\n    vec4 v4Temp = vec4(v3Position.xyz, 1);\n    mat4 matProduct = matProj * (matView * matWorld);\n    v4Temp = matProduct * v4Temp;\n    v4Temp /= v4Temp.w;\n    vNormal = v3Normal;\n    gl_Position = v4Temp;\n}\n";
var strFragShaderCode = "#version 300 es\n\nprecision highp float;\n\nin vec3 vNormal;\n\nuniform vec3 vLightDir;\nuniform vec4 vLightColor;\n\nout vec4 outColor;\n\nvoid main()\n{\n    vec3 vNormalTemp = normalize(vNormal);\n\n    float fLight = dot(vNormalTemp, -vLightDir);\n\n    outColor = vLightColor;\n    outColor.rgb *= fLight;\n}\n";
//Create Shaders and Shader Program
var glVertexShader = CreateShader(glContext, glContext.VERTEX_SHADER, strVertexShaderCode);
var glFragShader = CreateShader(glContext, glContext.FRAGMENT_SHADER, strFragShaderCode);
var objProgram = CreateProgram(glContext, glVertexShader, glFragShader);
//Define Attribute locations in the Shader Program
var objPosAttribLoc = glContext.getAttribLocation(objProgram, "v3Position");
var objNormAttribLoc = glContext.getAttribLocation(objProgram, "v3Normal");
//Define Uniform Objects location in the Shader Program
var objWorldMatUniformLoc = glContext.getUniformLocation(objProgram, "matWorld");
var objViewMatUniformLoc = glContext.getUniformLocation(objProgram, "matView");
var objProjMatUniformLoc = glContext.getUniformLocation(objProgram, "matProj");
var objLightDirUniformLoc = glContext.getUniformLocation(objProgram, "vLightDir");
var objLightColorUniformLoc = glContext.getUniformLocation(objProgram, "vLightColor");
//Create and Bind Position(Vertex) Buffer to the GL Pipeline
var pPositionBuffer = glContext.createBuffer();
var glVertexArray = glContext.createVertexArray();
glContext.bindVertexArray(glVertexArray);
glContext.enableVertexAttribArray(objPosAttribLoc);
glContext.bindBuffer(glContext.ARRAY_BUFFER, pPositionBuffer);
//Prepare Positions(Vertex) Data
var pPositions = new Float32Array([
    // left column front
    0, 0, 0,
    0, 150, 0,
    30, 0, 0,
    0, 150, 0,
    30, 150, 0,
    30, 0, 0,
    // top rung front
    30, 0, 0,
    30, 30, 0,
    100, 0, 0,
    30, 30, 0,
    100, 30, 0,
    100, 0, 0,
    // middle rung front
    30, 60, 0,
    30, 90, 0,
    67, 60, 0,
    30, 90, 0,
    67, 90, 0,
    67, 60, 0,
    // left column back
    0, 0, 30,
    30, 0, 30,
    0, 150, 30,
    0, 150, 30,
    30, 0, 30,
    30, 150, 30,
    // top rung back
    30, 0, 30,
    100, 0, 30,
    30, 30, 30,
    30, 30, 30,
    100, 0, 30,
    100, 30, 30,
    // middle rung back
    30, 60, 30,
    67, 60, 30,
    30, 90, 30,
    30, 90, 30,
    67, 60, 30,
    67, 90, 30,
    // top
    0, 0, 0,
    100, 0, 0,
    100, 0, 30,
    0, 0, 0,
    100, 0, 30,
    0, 0, 30,
    // top rung right
    100, 0, 0,
    100, 30, 0,
    100, 30, 30,
    100, 0, 0,
    100, 30, 30,
    100, 0, 30,
    // under top rung
    30, 30, 0,
    30, 30, 30,
    100, 30, 30,
    30, 30, 0,
    100, 30, 30,
    100, 30, 0,
    // between top rung and middle
    30, 30, 0,
    30, 60, 30,
    30, 30, 30,
    30, 30, 0,
    30, 60, 0,
    30, 60, 30,
    // top of middle rung
    30, 60, 0,
    67, 60, 30,
    30, 60, 30,
    30, 60, 0,
    67, 60, 0,
    67, 60, 30,
    // right of middle rung
    67, 60, 0,
    67, 90, 30,
    67, 60, 30,
    67, 60, 0,
    67, 90, 0,
    67, 90, 30,
    // bottom of middle rung.
    30, 90, 0,
    30, 90, 30,
    67, 90, 30,
    30, 90, 0,
    67, 90, 30,
    67, 90, 0,
    // right of bottom
    30, 90, 0,
    30, 150, 30,
    30, 90, 30,
    30, 90, 0,
    30, 150, 0,
    30, 150, 30,
    // bottom
    0, 150, 0,
    0, 150, 30,
    30, 150, 30,
    0, 150, 0,
    30, 150, 30,
    30, 150, 0,
    // left side
    0, 0, 0,
    0, 0, 30,
    0, 150, 30,
    0, 0, 0,
    0, 150, 30,
    0, 150, 0,
]);
glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(pPositions), glContext.STATIC_DRAW);
var dSize = 3;
var objType = glContext.FLOAT;
var bNormalize = false;
var dStride = 0;
var dOffset = 0;
glContext.vertexAttribPointer(objPosAttribLoc, dSize, objType, bNormalize, dStride, dOffset);
//Create and Bind Normal(Vertex) Buffer to the GL Pipeline
var pNormalBuffer = glContext.createBuffer();
glContext.bindBuffer(glContext.ARRAY_BUFFER, pNormalBuffer);
glContext.enableVertexAttribArray(objNormAttribLoc);
//Prepare Normals(Vertex) Data
var pNormals = new Float32Array([
    // left column front
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    // top rung front
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    // middle rung front
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    // left column back
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    // top rung back
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    // middle rung back
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    // top
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    // top rung right
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    // under top rung
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    // between top rung and middle
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    // top of middle rung
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    // right of middle rung
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    // bottom of middle rung.
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    // right of bottomkey
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    // bottom
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    // left side
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
]);
glContext.bufferData(glContext.ARRAY_BUFFER, new Float32Array(pNormals), glContext.STATIC_DRAW);
bNormalize = true;
glContext.vertexAttribPointer(objNormAttribLoc, dSize, objType, bNormalize, dStride, dOffset);
//Draw
glContext.viewport(0, 0, glContext.canvas.width, glContext.canvas.height);
glContext.clearColor(0, 0, 0, 0);
glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT);
glContext.enable(glContext.DEPTH_TEST);
glContext.useProgram(objProgram);
glContext.bindVertexArray(glVertexArray);
var fAspect = glContext.canvas.clientWidth / glContext.canvas.clientHeight;
var fNearZ = 0.1;
var fFarZ = 1000;
var fFov = Rad2Deg(60.0);
var matProjMatrix = MatrixPerspective(fFov, fAspect, fNearZ, fFarZ);
var fPitchAngle = 0;
var fYawAngle = 0;
var vCamera = new CVector([50, -75, -300]);
var vTarget = new CVector([30, 150, 0, 1]);
var vCameraDirection = new CVector([0, 0, 1, 0]);
var vUpVect = new CVector([0, 1, 0, 0]);
var vLightColor = new CVector([0.2, 1, 0.2, 1]);
var vLightDir = Vector3Normalize(new CVector([0.5, 0.7, 1]));
var matCameraMatrix = MatrixLookAt(vCamera, vTarget, vUpVect);
var matViewMatrix = MatrixTranslate(vCamera);
var matWorldMatrix = MatrixIdentity(); //MatrixTranslate(new CVector([-50, -75, -15]));
glContext.uniformMatrix4fv(objWorldMatUniformLoc, false, matWorldMatrix.m_vM);
glContext.uniformMatrix4fv(objViewMatUniformLoc, false, matViewMatrix.m_vM);
glContext.uniformMatrix4fv(objProjMatUniformLoc, false, matProjMatrix.m_vM);
glContext.uniform4fv(objLightColorUniformLoc, vLightColor.m_vV, 0, 4);
glContext.uniform3fv(objLightDirUniformLoc, vLightDir.m_vV, 0, 3);
glContext.drawArrays(glContext.TRIANGLES, 0, 72);
var objIntervalId = setInterval(function () {
    glContext.viewport(0, 0, glContext.canvas.width, glContext.canvas.height);
    glContext.clearColor(0, 0, 0, 0);
    glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT);
    glContext.enable(glContext.DEPTH_TEST);
    glContext.useProgram(objProgram);
    glContext.bindVertexArray(glVertexArray);
    glContext.uniformMatrix4fv(objWorldMatUniformLoc, false, matWorldMatrix.m_vM);
    glContext.uniformMatrix4fv(objViewMatUniformLoc, false, matViewMatrix.m_vM);
    glContext.uniformMatrix4fv(objProjMatUniformLoc, false, matProjMatrix.m_vM);
    glContext.uniform4fv(objLightColorUniformLoc, vLightColor.m_vV, 0, 4);
    glContext.uniform3fv(objLightDirUniformLoc, vLightDir.m_vV, 0, 3);
    glContext.drawArrays(glContext.TRIANGLES, 0, 96);
}, 80);
console.log("The End");
