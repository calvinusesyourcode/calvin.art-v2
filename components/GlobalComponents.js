import Link from "next/link";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

/**
 * Returns an SVG Icon.
 *
 * @param {object} props - The properties that define the SVG's attributes.
 * @param {string} props.icon - Which icon to render.
 * @param {string} [props.color] - The color used to fill the SVG.
 * @param {number} [props.width] - The width (and height) of the SVG.
 * @returns {JSX.Element} An SVG Icon.
 */
export function SvgIcon(props) {
    const {
        icon = "questionMark",
        color = "var(--color-text)",
        width = "12",
    } = props;

    return (
        <>
            {icon == "questionMark" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`}id="questionMark_icon_svg" viewBox="0 0 973.1 973.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.29,788.199h-47c-33.1,0-60,26.9-60,60v64.9c0,33.1,26.9,60,60,60h47c33.101,0,60-26.9,60-60v-64.9                        C562.29,815,535.391,788.199,502.29,788.199z"/>
                    <path d="M170.89,285.8l86.7,10.8c27.5,3.4,53.6-12.4,63.5-38.3c12.5-32.7,29.9-58.5,52.2-77.3c31.601-26.6,70.9-40,117.9-40                        c48.7,0,87.5,12.8,116.3,38.3c28.8,25.6,43.1,56.2,43.1,92.1c0,25.8-8.1,49.4-24.3,70.8c-10.5,13.6-42.8,42.2-96.7,85.9                        c-54,43.7-89.899,83.099-107.899,118.099c-18.4,35.801-24.8,75.5-26.4,115.301c-1.399,34.1,25.8,62.5,60,62.5h49                        c31.2,0,57-23.9,59.8-54.9c2-22.299,5.7-39.199,11.301-50.699c9.399-19.701,33.699-45.701,72.699-78.1                        C723.59,477.8,772.79,428.4,795.891,392c23-36.3,34.6-74.8,34.6-115.5c0-73.5-31.3-138-94-193.4c-62.6-55.4-147-83.1-253-83.1                        c-100.8,0-182.1,27.3-244.1,82c-52.8,46.6-84.9,101.8-96.2,165.5C139.69,266.1,152.39,283.5,170.89,285.8z"/>
                </svg>
            )}

            {icon == "gear" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="gear_icon_svg" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" >
                    <path fill={`${color}`} d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                </svg>
            )}
        
            {icon == "home" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="home_icon_svg" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" >
                    <path fill={`${color}`} d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 15 L 14 15 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z" />
                </svg>
            )}

            {icon == "calendar" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="calendar_icon_svg" viewBox="0 0 344.83 366.75" xmlns="http://www.w3.org/2000/svg" >
                    <path fill={`${color}`} d="M339.3,35.55H306V13.63H265.69V35.55H122.31V13.63H82V35.55H48.7A27.11,27.11,0,0,0,21.59,62.66v290.6A27.12,27.12,0,0,0,48.7,380.38H339.3a27.12,27.12,0,0,0,27.11-27.12V62.66A27.11,27.11,0,0,0,339.3,35.55Zm4.6,309.53a12.78,12.78,0,0,1-12.78,12.78H56.88A12.78,12.78,0,0,1,44.1,345.08V99.88A12.79,12.79,0,0,1,56.88,87.09H331.12A12.79,12.79,0,0,1,343.9,99.88Z" transform="translate(-21.59 -13.63)"/>
                </svg>
            )}

            {icon == "clock" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="clock_icon_svg" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg" >
                    <path fill={`${color}`} d="M194,32A165,165,0,1,0,359,197,165,165,0,0,0,194,32Zm0,297.5c-72.9,0-132-59.32-132-132.5S121.1,64.5,194,64.5,326,123.82,326,197,266.9,329.5,194,329.5Z" transform="translate(-29 -32)"/>
                    <path fill={`${color}`} d="M283.65,222.36l-73.77-32.55,13.58-55.76a6.8,6.8,0,0,0-5-8.21l-14-3.41a6.79,6.79,0,0,0-8.21,5L180.7,191.31a14,14,0,0,0,9.46,20.4L272.35,248a6.8,6.8,0,0,0,9-3.47l5.82-13.19A6.79,6.79,0,0,0,283.65,222.36Z" transform="translate(-29 -32)"/>
                    </svg>
            )}

            {icon == "phone" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="phone_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 324.52 324.98">
                    <path fill={`${color}`} d="M57,53c-3.57,4-8.74,10.91-13,23-8.72,24.78-5.8,49.68,0,72,18,69.27,65.49,113.65,90,136,33,30.08,60,44,66,47,23,11.58,68.86,34.7,114,20,16.78-5.47,26.13-13.77,31-19,9.9-10.63,23.12-32,16-48-3.89-8.73-10.3-7.84-36-22-30.77-16.95-35.9-26.11-46-23-10.86,3.34-20.25,18.63-26,28-4.27,6.95-6.38,12.25-12,14-7.39,2.3-15.26-3.27-19-6,0,0-72.75-53.14-106-108-1.25-2.07-4-6.71-3-12,1.23-6.72,7.64-10.37,13-14,10.12-6.85,25.22-17.07,28-28,2.57-10.09-7-14.38-22-41-14.92-26.45-12.24-34.35-22-39C94,25.38,69.91,38.47,57,53Z" transform="translate(-38.5 -30.76)"/>
                </svg>
            )}

            {icon == "size" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="size_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 328">
                    <polygon fill={`${color}`} points="286.5 40.5 286.5 173 327 173 327 0 155.5 0 155.5 40.5 286.5 40.5"/>
                    <polygon fill={`${color}`} points="171.5 287.5 40.5 287.5 40.5 156 0 156 0 328 171.5 328 171.5 287.5"/>
                </svg>

            )}

            {icon == "tag" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="tag_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360.73 395.12">
                    <path fill={`${color}`} d="M359.25,203.63a74.73,74.73,0,0,0,14.58-54C356.7,7.11,351.19,3,210,25.88A74.85,74.85,0,0,0,162.27,54.6L30,229.57a80.66,80.66,0,0,0,15.68,113L114,394.24a80.65,80.65,0,0,0,113-15.69ZM251.1,143.11a29,29,0,1,1,40.64-5.5A29,29,0,0,1,251.1,143.11Z" transform="translate(-13.63 -15.44)"/>
                </svg>
            )}

            {icon == "facebook" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="facebook_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path fill={`${color}`} d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/>
                </svg>
            )}

            {icon == 'twitter' && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="twitter_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill={`${color}`} d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
            )}

            {icon == 'github' && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="github_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill={`${color}`} d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
            )}

            {icon == "email" && (
                <svg className={`svg-icon`} width={`${width}px`} height={`${width}px`} id="email_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 189">
                    <path fill="none" stroke={`${color}`} stroke-width="14" stroke-linejoin="round" d="M7 7L123 105L244 7M7 7V182H244V7M7 7H244"/>
                </svg>
            )}
        </>
    )};

/**
 * Returns content based on user permissions.
 *
 * @param {JSX} props.children - Content rendered if user has permission.
 * @param {JSX} props.fallback - Else.
 */ 
export function AuthCheck(props) {
    const { role, fetchingUser } = useContext(UserContext);

    return (
        <>
            {!fetchingUser && (
                role == "admin" || role == "noob" ? props.children : props.fallback
            )}
            {fetchingUser && (
                <button className="non-button">loading...</button>
            )}
        </>
    )
}

/**
 * Wait until user fetched.
 *
 * @param {JSX} props.children - Content rendered after user information retrieved.
 */ 
export function AfterUserFetched(props) {
    const { fetchingUser } = useContext(UserContext);

    return (
        <>
            {!fetchingUser && (
                props.children
            )}
            {fetchingUser && (
                <button className="non-button">loading...</button>
            )}
        </>
    )
}
