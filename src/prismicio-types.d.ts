// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | StaffSlice
  | WordListSlice
  | HeroSlice
  | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Navigation Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].navigation_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  navigation_link: prismic.LinkField;

  /**
   * Navigation Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].navigation_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  navigation_label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = PageDocument | SettingsDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: H1 italics for gold
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Hero Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  hero_image: prismic.ImageField<never>;

  /**
   * CTA Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cta_button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_button_link: prismic.LinkField;

  /**
   * CTA Button Label field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.cta_button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_button_label: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Item in *Staff → Default → Primary → Staff Info*
 */
export interface StaffSliceDefaultPrimaryStaffInfoItem {
  /**
   * Avatar field in *Staff → Default → Primary → Staff Info*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: staff.default.primary.staff_info[].avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;

  /**
   * Name field in *Staff → Default → Primary → Staff Info*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: staff.default.primary.staff_info[].name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Title field in *Staff → Default → Primary → Staff Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: staff.default.primary.staff_info[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Staff → Default → Primary*
 */
export interface StaffSliceDefaultPrimary {
  /**
   * Heading field in *Staff → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: staff.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Staff Info field in *Staff → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: staff.default.primary.staff_info[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  staff_info: prismic.GroupField<
    Simplify<StaffSliceDefaultPrimaryStaffInfoItem>
  >;
}

/**
 * Default variation for Staff Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StaffSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StaffSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Staff*
 */
type StaffSliceVariation = StaffSliceDefault;

/**
 * Staff Shared Slice
 *
 * - **API ID**: `staff`
 * - **Description**: Staff
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StaffSlice = prismic.SharedSlice<"staff", StaffSliceVariation>;

/**
 * Item in *WordList → Default → Primary → Words*
 */
export interface WordListSliceDefaultPrimaryWordsItem {
  /**
   * Word field in *WordList → Default → Primary → Words*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: word_list.default.primary.words[].word
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  word: prismic.KeyTextField;
}

/**
 * Primary content in *WordList → Default → Primary*
 */
export interface WordListSliceDefaultPrimary {
  /**
   * Words field in *WordList → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: word_list.default.primary.words[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  words: prismic.GroupField<Simplify<WordListSliceDefaultPrimaryWordsItem>>;
}

/**
 * Default variation for WordList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WordListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WordListSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WordList*
 */
type WordListSliceVariation = WordListSliceDefault;

/**
 * WordList Shared Slice
 *
 * - **API ID**: `word_list`
 * - **Description**: WordList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WordListSlice = prismic.SharedSlice<
  "word_list",
  WordListSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      StaffSlice,
      StaffSliceDefaultPrimaryStaffInfoItem,
      StaffSliceDefaultPrimary,
      StaffSliceVariation,
      StaffSliceDefault,
      WordListSlice,
      WordListSliceDefaultPrimaryWordsItem,
      WordListSliceDefaultPrimary,
      WordListSliceVariation,
      WordListSliceDefault,
    };
  }
}
