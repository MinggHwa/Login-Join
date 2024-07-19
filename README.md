# React + TypeScript + Vite + supabase 

리액트 훅을 활용한 로그인 회원가입 기능입니다.

# useForm 

React-Hook-Form
- 가장 인기 있는 폼 관리 라이브러리 중 하나입니다.
- 성능이 좋고, 사용하기 쉬우며, 유효성 검사 기능이 내장되어 있습니다.

useForm

```js
 const { register, handleSubmit,watch, formState: { errors } } = useForm( {mode: 'onBlur'});
 // 
```

- register: 폼 입력 필드를 등록하고, 입력 값의 유효성을 검사하기 위한 메서드입니다. 각 입력 필드에 등록합니다.
  예를 들어, <input {...register('username')} />는 username 필드를 폼 상태에 등록합니다.


- handleSubmit: 폼 제출을 처리하는 함수입니다. 폼이 제출될 때 유효성 검사가 수행되며, 유효할 경우 제출 핸들러 함수를 호출합니다.
사용 예: <form onSubmit={handleSubmit(onSubmit)} />, 여기서 onSubmit은 폼이 성공적으로 제출될 때 호출되는 함수입니다.

- watch:입력 필드의 값을 실시간으로 관찰할 수 있는 함수입니다. 입력 필드의 값이 변경될 때마다 업데이트된 값을 반환합니다.
사용 예: const username = watch('username');는 username 필드의 현재 값을 반환합니다.

- formState:폼의 현재 상태를 포함하는 객체입니다. 이 객체에서 errors와 같은 상태를 조회할 수 있습니다

- errors: 폼 입력 필드에서 발생한 유효성 검사 오류를 포함하는 객체입니다. 각 필드 이름을 키로 하고, 오류 메시지를 값으로 가집니다.
사용 예: {errors.username && <span>{errors.username.message}</span>}는 username 필드에서 발생한 오류 메시지를 표시합니다.

```js
 <label htmlFor="Pw">
            Pw:<input type="text" id='Pw' required placeholder ='비밀번호'
            {
              ...register('userPw', { required: true, pattern:regExpPw})
            }
            />
           
          </label>
          {errors.userPw && (<>

          <div>
            비밀번호는 숫자, 영문 대문자, 영문 소문자, 특수문자 1개 이상 포함한 9자 이상 30자 이하여야 합니다.
          </div>
          </>)}

```

- mode: 'onBlur'
useForm의 mode 옵션은 `유효성 검사 시점`을 설정하는 옵션입니다. 여기서 mode: 'onBlur'는 다음을 의미합니다:

onBlur: 입력 필드에서 포커스가 벗어났을 때 유효성 검사가 수행됩니다. 즉, 사용자가 입력 필드에서 클릭하거나 탭을 이동하여 필드를 벗어나면 해당 필드의 유효성 검사가 진행됩니다.

## mode 종류

1. onSubmit
설명: `폼이 제출될 때` 유효성 검사를 수행합니다.
사용 예: 기본적으로 onSubmit은 useForm의 기본 모드이며, 폼이 제출될 때만 유효성 검사가 진행됩니다.
2. onBlur
설명: `입력 필드에서 포커스가 벗어날 때` 유효성 검사를 수행합니다.
사용 예: 사용자가 입력 필드를 클릭한 후 다른 필드로 이동할 때 해당 필드의 유효성 검사가 진행됩니다.
3. onChange
설명: `입력 필드의 값이 변경될 때마다` 유효성 검사를 수행합니다.
사용 예: 사용자가 입력 필드에 값을 입력할 때마다 유효성 검사가 진행됩니다.
4. all
설명: `onSubmit, onBlur, onChange 모든 모드에서 유효성 검사`를 수행합니다.
사용 예: 모든 시점에서 유효성 검사를 수행하도록 설정합니다.
5. onTouched (React Hook Form v6부터)
설명: `필드가 터치되었을 때` 유효성 검사를 수행합니다. 입력 필드가 포커스 되었다가 벗어났을 때 유효성 검사를 수행합니다.
6. onSubmitAndBlur (React Hook Form v7부터)
설명: `폼이 제출되거나 입력 필드에서 포커스가 벗어날 때` 유효성 검사를 수행합니다.