/* tslint:disable */
/* eslint-disable */

import { UserInfoAddress } from './userInfoAddress';
import { UserInfoSocialUserinfoList } from './userInfoSocialUserinfoList';

/**
 * Represents a successful response to a Get User Info operation.
 * @export
 * @interface UserInfo
 */
export interface UserInfo {
    /**
     * The ID by which APS uniquely identifies the user.
     * @type {string}
     * @memberof UserInfo
     */
    'sub'?: string;
    /**
     * The full name of the user.
     * @type {string}
     * @memberof UserInfo
     */
    'name'?: string;
    /**
     * The given name or first name of the user.
     * @type {string}
     * @memberof UserInfo
     */
    'given_name'?: string;
    /**
     * The surname or last name of the user.
     * @type {string}
     * @memberof UserInfo
     */
    'family_name'?: string;
    /**
     * The username by which the user prefers to be addressed.
     * @type {string}
     * @memberof UserInfo
     */
    'preferred_username'?: string;
    /**
     * The email address by which the user prefers to be contacted.
     * @type {string}
     * @memberof UserInfo
     */
    'email'?: string;
    /**
     * ``true`` : The user\'s preferred email address is verified.  ``false``: The user\'s preferred email address is not verified. 
     * @type {boolean}
     * @memberof UserInfo
     */
    'email_verified'?: boolean;
    /**
     * The URL of the profile page of the user.
     * @type {string}
     * @memberof UserInfo
     */
    'profile'?: string;
    /**
     * The URL of the profile picture of the user.
     * @type {string}
     * @memberof UserInfo
     */
    'picture'?: string;
    /**
     * The preferred language settings of the user. This setting is typically specified as a combination of the ISO 639 language code in lower case, and the ISO 3166 country code in upper case, separated by a dash character. For example ``en-US``.
     * @type {string}
     * @memberof UserInfo
     */
    'locale'?: string;
    /**
     * The time the user\'s information was most recently updated, represented as a Unix timestamp.
     * @type {number}
     * @memberof UserInfo
     */
    'updated_at'?: number;
    /**
     * ``true``: Two-factor authentication is enabled for this user.   ``false``: Two-factor authentication is not enabled for this user. 
     * @type {boolean}
     * @memberof UserInfo
     */
    'is_2fa_enabled'?: boolean;
    /**
     * The ISO 3166 country code that was assigned to the user when their profile was created.
     * @type {string}
     * @memberof UserInfo
     */
    'country_code'?: string;
    /**
     * 
     * @type {UserInfoAddress}
     * @memberof UserInfo
     */
    'address'?: UserInfoAddress;
    /**
     * The phone number by which the user prefers to be contacted.
     * @type {string}
     * @memberof UserInfo
     */
    'phone_number'?: string;
    /**
     * ``true`` : The phone number is verified.  ``false`` : The phone number is not verified. 
     * @type {boolean}
     * @memberof UserInfo
     */
    'phone_number_verified'?: boolean;
    /**
     * ``true`` :  Single sign-on using Lightweight Directory Access Protocol (LDAP) is enabled for this user.  ``false`` : LDAP is not enabled for this user. 
     * @type {boolean}
     * @memberof UserInfo
     */
    'ldap_enabled'?: boolean;
    /**
     * The domain name used by the LDAP server for user authentication. ``null``, if ``ldap_enabled`` is ``false``.
     * @type {string}
     * @memberof UserInfo
     */
    'ldap_domain'?: string;
    /**
     * The job title of the user as specified in the user\'s profile.
     * @type {string}
     * @memberof UserInfo
     */
    'job_title'?: string;
    /**
     * The industry the user works in, as specified in the user\'s profile.
     * @type {string}
     * @memberof UserInfo
     */
    'industry'?: string;
    /**
     * A code that corresponds to the industry.
     * @type {string}
     * @memberof UserInfo
     */
    'industry_code'?: string;
    /**
     * A short description written by the user to introduce themselves, as specified in the user\'s profile.
     * @type {string}
     * @memberof UserInfo
     */
    'about_me'?: string;
    /**
     * The ISO 639 language code of the preferred language of the user.
     * @type {string}
     * @memberof UserInfo
     */
    'language'?: string;
    /**
     * The company that the user works for, as specified in the user\'s profile.
     * @type {string}
     * @memberof UserInfo
     */
    'company'?: string;
    /**
     * The time the user profile was created, represented as a Unix timestamp.
     * @type {string}
     * @memberof UserInfo
     */
    'created_date'?: string;
    /**
     * The time the user most recently signed-in to APS successfully, represented as a Unix timestamp.
     * @type {string}
     * @memberof UserInfo
     */
    'last_login_date'?: string;
    /**
     * An ID to uniquely identify the user. For most users this will be the same as ``sub``. However, for users profiles created on the now retired EIDM system ``eidm_guid`` will be different from ``sub``.
     * @type {string}
     * @memberof UserInfo
     */
    'eidm_guid'?: string;
    /**
     * ``true`` : The user has agreed to receive marketing information.  ``false``: The user does not want to receive marketing information. 
     * @type {boolean}
     * @memberof UserInfo
     */
    'opt_in'?: boolean;
    /**
     * An array of objects, where each object represents a social media account that can be used to verify the user\'s identity.
     * @type {Array<UserInfoSocialUserinfoList>}
     * @memberof UserInfo
     */
    'social_userinfo_list'?: Array<UserInfoSocialUserinfoList>;
    /**
     * An array of key-value pairs containing image URLs for various thumbnail sizes of the user\'s profile picture. The key is named ``sizeX<NUMBER>`` where ``<NUMBER>`` is the width and height of the thumbnail, in pixels. The corresponding value is the URL pointing to the thumbnail. For example, ``sizeX200`` would contain the URL for the 200x200 pixel thumbnail.
     * @type {{ [key: string]: string; }}
     * @memberof UserInfo
     */
    'thumbnails'?: { [key: string]: string; };
}

