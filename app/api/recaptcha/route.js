import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
import { NextResponse } from 'next/server';

export async function POST(request, res) {
  const req = await request.json()
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath('mapit-1686830441737');
  const requestObj = {
    assessment: {
      event: {
        token: req?.token,
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
      },
    },
    parent: projectPath,
  };
  try {
    const [response] = await client.createAssessment(requestObj);
    console.log(response, 'response');
    if (!response.tokenProperties?.valid) {
      return NextResponse.json({
        message: "Invalid token",
        score: response?.riskAnalysis?.score,
        reason: response.tokenProperties?.invalidReason
      }, { status: 400 })
    }
    if (response.tokenProperties.action === "LOGIN") {
      return NextResponse.json({
        score: response?.riskAnalysis?.score,
        reason: response.riskAnalysis?.reasons,
        status: "Ok"
      }, { status: 200 })
    } else {
      return NextResponse.json({
        reason: response.riskAnalysis?.reasons,
        status: "Fail"
      }, { status: 500 })
    }
  } catch (err) {
    console.log(err, 'err')
  }



}