import nodemailer, { SentMessageInfo } from "nodemailer";

export const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "mail.privateemail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const genHtml = (email: string, name?: string) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
      }
      #m_MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
      p {
        line-height: inherit;
      }
      .m_desktop_hide,
      .m_desktop_hide table {
        display: none;
        max-height: 0;
        overflow: hidden;
      }
      .m_image_block img + div {
        display: none;
      }
      @media (max-width: 720px) {
        .m_row-content {
          width: 100% !important;
        }
        .m_mobile_hide {
          display: none;
        }
        .m_stack .m_column {
          width: 100%;
          display: block;
        }
        .m_mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0;
        }
        .m_desktop_hide,
        .m_desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body data-new-gr-c-s-check-loaded="14.1105.0" data-gr-ext-installed="">
    <u></u>
    <div style="background-color: #fff; margin: 0; padding: 0">
      <table
        class="m_nl-container"
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
        style="background-color: #fff"
      >
        <tbody>
          <tr>
            <td>
              <table
                class="m_row m_row-1"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="background-color: #7d0cc1; background-size: auto"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="m_row-content m_stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          color: #000;
                          background-color: #7d0cc1;
                          background-size: auto;
                          width: 700px;
                        "
                        width="700"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="m_column m_column-1"
                              width="100%"
                              style="
                                font-weight: 400;
                                text-align: left;
                                padding: 40px;
                                vertical-align: top;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="m_text_block m_block-1"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="word-break: break-word"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="m_pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 30px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          style="
                                            font-size: 12px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            color: #fff;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="font-size: 30px"
                                              ><strong
                                                >Congrats! Thanks for your interest!</strong
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                class="m_text_block m_block-2"
                                width="100%"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="word-break: break-word"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      class="m_pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 20px;
                                        padding-right: 20px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          style="
                                            font-size: 12px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            color: #d8ebf8;
                                            line-height: 1.5;
                                          "
                                        >
                                          <p
                                            style="
                                              color: white;
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="font-size: 16px"
                                              >Hey ${
                                                name ? name : email
                                              }, thanks for signing
                                              up to the wait list. As soon as you complete the <a target="_blank" rel="noopener noreferrer" href="https://app.deform.cc/form/4c204027-c44b-4cce-bb5c-5b108e8e5318/" style="color: white;">interest list form</a>, you'll be added to the waitlist.</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="m_row m_row-2"
                align="center"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
              >
                <tbody>
                  <tr>
                    <td>
                      <table
                        class="m_row-content m_stack"
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="color: #000; width: 700px"
                        width="700"
                      >
                        <tbody>
                          <tr>
                            <td
                              class="m_column m_column-1"
                              width="100%"
                              style="
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 25px;
                                padding-top: 25px;
                                vertical-align: top;
                                border-top: 0;
                                border-right: 0;
                                border-bottom: 0;
                                border-left: 0;
                              "
                            >
                              <table
                                class="m_text_block m_block-1"
                                width="100%"
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                role="presentation"
                                style="word-break: break-word"
                              >
                                <tbody>
                                  <tr>
                                    <td class="m_pad">
                                      <div style="font-family: sans-serif">
                                        <div
                                          style="
                                            font-size: 12px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            color: #555;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                            "
                                          >
                                            <a
                                              href="https://paymasters.io"
                                              style="
                                                text-decoration: underline;
                                                color: #555555;
                                              "
                                              rel="noopener noreferrer"
                                              target="_blank"
                                              >https://paymasters.io</a
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="background-color: transparent">
        <div
          style="
            margin: 0 auto;
            min-width: 320px;
            max-width: 500px;
            word-wrap: break-word;
            word-break: break-word;
            background-color: transparent;
          "
          class="m_block-grid"
        >
          <div
            style="
              border-collapse: collapse;
              display: table;
              width: 100%;
              background-color: transparent;
            "
          >
            <div
              class="m_col m_num12"
              style="
                min-width: 320px;
                max-width: 500px;
                display: table-cell;
                vertical-align: top;
              "
            >
              <div
                style="background-color: transparent; width: 100% !important"
              >
                <div
                  style="
                    border-top: 0px solid transparent;
                    border-left: 0px solid transparent;
                    border-bottom: 0px solid transparent;
                    border-right: 0px solid transparent;
                    padding-top: 15px;
                    padding-bottom: 15px;
                    padding-right: 0px;
                    padding-left: 0px;
                  "
                >
                  <div
                    align="center"
                    class="m_img-container m_center m_autowidth"
                    style="padding-right: 0px; padding-left: 0px"
                  >

                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="31" viewBox="0 0 22 31" fill="none">
                  <path d="M10.2722 30.2983L0 23.0847L10.2722 18.6445V30.2983Z" fill="url(#paint0_linear_49_662)"/>
                  <path d="M0 0.552216H10.0734C16.2955 0.552216 21.3396 5.59629 21.3396 11.8185C21.3396 18.0407 16.2955 23.0847 10.0734 23.0847H0V0.552216Z" fill="#7D0CC1"/>
                  <defs>
                  <linearGradient id="paint0_linear_49_662" x1="12.3266" y1="21.2291" x2="11.8627" y2="33.3569" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#B3B3B3"/>
                  <stop offset="0.35901" stop-color="white"/>
                  </linearGradient>
                  </defs>
                  </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;

export const sendMail = async ({
  email,
  name,
  subject,
  text,
}: {
  email: string;
  name: string;
  subject: string;
  text: string;
}): Promise<{
  success: boolean;
  err?: Error;
  info?: SentMessageInfo;
}> =>
  new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: "Miracle@paymasters.io",
        to: email,
        subject,
        text,
        html: genHtml(email, name),
      },
      (err, info) => {
        if (err) {
          console.log(err);

          reject({ success: false, err });
        } else {
          console.log(info);

          resolve({ success: true, info });
        }
      }
    );
  });
