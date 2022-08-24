"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test('Should return introduction blog', () => __awaiter(void 0, void 0, void 0, function* () {
    const DOC_BY_ID_QUERY = `
query GetDocEntry($slug: String!) {
    docsCollection(where: { slug:$slug}, limit:1){
      items{
        title
        body
        }
      }
    }
  `;
    const requestOptions = {
        variables: {
            slug: "introduction"
        }
    };
    const { isLoading, error, result } = yield (0, index_1.fetchContentful)(DOC_BY_ID_QUERY, requestOptions);
    expect({ isLoading, error, result }).toBe({
        isLoading: false,
        error: "",
        result: { data: { docsCollection: { items: {
                        title: 'Introduction',
                        body: '# Introduction\n' +
                            'Next-Docs is a headless CMS application that utilizes Contentful to handle your project documentation needs. Application also includes integrations with Google Analytics and Next-SEO on top of CMS functionality. \n' +
                            '\n' +
                            '### Technology\n' +
                            '- Typescript\n' +
                            '- Next.js\n' +
                            '- Tailwindcss\n' +
                            '- Contentful\n' +
                            '- GraphQL\n' +
                            '- Google Analytics \n' +
                            '\n' +
                            '### Features\n' +
                            '- ✅  Well-tested and production ready.\n' +
                            '- Easy connections to Vercel and Netifly. \n' +
                            '- Type Safe Application.\n' +
                            '- Support plans available. \n'
                    }
                }
            }
        }
    });
}));
test('Should return Error Message', () => __awaiter(void 0, void 0, void 0, function* () {
    const DOC_BY_ID_QUERY = `
query GetDocEntry($slug: String!) {
    docsCollection(where: { slug:$slug}, limit:1){
      items{
        title
        body
        }
      }
    }
  `;
    const requestOptions = {
        variables: {
            slug: "1fqwefqe32"
        }
    };
    const { isLoading, error, result } = yield (0, index_1.fetchContentful)(DOC_BY_ID_QUERY, requestOptions);
    expect({ isLoading, error, result }).toEqual({
        isLoading: false,
        error: "Data Fetch Failed",
        result: null
    });
}));
//# sourceMappingURL=fetchContentful.spec.js.map