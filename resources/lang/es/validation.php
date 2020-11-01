<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as theb size rules. Feel free to tweak each of Else messages here.
    |
    */

    'accepted' => 'El campo ":attribute" debe ser aceptado.',
    'active_url' => 'El campo ":attribute" no es una URL válida.',
    'after' => 'El campo ":attribute" debe corresponder a una fecha posterior :date.',
    'after_or_equal' => 'El campo ":attribute" debe corresponder a una fecha igual o posterior a :date.',
    'alpha' => 'El campo ":attribute" debe contener solo letras.',
    'alpha_dash' => 'El campo ":attribute" debe contener solo letras, números, guiones y guiones bajos.',
    'alpha_num' => 'El campo ":attribute" debe contener solo letras y números.',
    'array' => 'El campo ":attribute" debe ser un vector.',
    'before' => 'El campo ":attribute" debe corresponder a una fecha anterior a :date.',
    'before_or_equal' => 'El campo ":attribute" debe corresponder a una fecha anterior o igual a :date.',
    'between' => [
        'numeric' => 'El campo ":attribute" debe estar entre :min y :max.',
        'file' => 'El campo ":attribute" debe estar entre :min y :max kilobytes.',
        'string' => 'El campo ":attribute" debe estar entre :min y :max caracteres.',
        'array' => 'El campo ":attribute" debe contener entre :min y :max items.',
    ],
    'boolean' => 'El campo ":attribute" debe ser verdadero o falso.',
    'confirmed' => 'La confirmación del campo ":attribute" no coincide.',
    'date' => 'El campo ":attribute" no es una fecha válida.',
    'date_equals' => 'El campo ":attribute" debe ser una fecha igual a :date.',
    'date_format' => 'El campo ":attribute" no coincide con el formato :format.',
    'different' => '":attribute" y :other deben ser diferentes.',
    'digits' => 'El campo ":attribute" debe tener :digits dígitos.',
    'digits_between' => 'El campo ":attribute" debe estar entre :min y :max dígitos.',
    'dimensions' => 'El campo ":attribute" tiene unas dimensiones de imágen inválidas.',
    'distinct' => 'El campo ":attribute" tiene un valor duplicado.',
    'email' => 'El campo ":attribute" debe ser una dirección de correo electrónico válida.',
    'ends_with' => 'El campo ":attribute" debe terminar con un de los siguientes valores: :values.',
    'exists' => 'El valor del campo ":attribute" dado no existe en la base de datos.',
    'file' => 'El campo ":attribute" debe ser un archivo.',
    'filled' => 'El campo ":attribute" debe tener un valor.',
    'gt' => [
        'numeric' => 'El campo ":attribute" debe ser mayor que :value.',
        'file' => 'El campo ":attribute" debe ser mayor a :value kilobytes.',
        'string' => 'El campo ":attribute" debe tener una longitud mayor a :value characters.',
        'array' => 'El campo ":attribute" debe contener más que :value items.',
    ],
    'gte' => [
        'numeric' => 'El campo ":attribute" debe ser mayor que o igual a :value.',
        'file' => 'El campo ":attribute" debe ser mayor que o igual a :value kilobytes.',
        'string' => 'El campo ":attribute" debe tener una longitud mayor o igual a :value characters.',
        'array' => 'El campo ":attribute" debe contener :value items o más.',
    ],
    'image' => 'El campo ":attribute" debe ser una imágen.',
    'in' => 'El campo ":attribute" elegido es inválido.',
    'in_array' => 'El campo ":attribute" no existe en :other.',
    'integer' => 'El campo ":attribute" debe ser un entero.',
    'ip' => 'El campo ":attribute" debe ser una dirección IP válida.',
    'ipv4' => 'El campo ":attribute" debe ser una dirección IP4 válida.',
    'ipv6' => 'El campo ":attribute" debe ser una dirección IP6 válida.',
    'json' => 'El campo ":attribute" debe ser una cadena JSON válida.',
    'lt' => [
        'numeric' => 'El campo ":attribute" debe ser menor que :value.',
        'file' => 'El campo ":attribute" debe ser menor a :value kilobytes.',
        'string' => 'El campo ":attribute" debe tener una longitud menor a :value characters.',
        'array' => 'El campo ":attribute" debe contener menos de :value items.',
    ],
    'lte' => [
        'numeric' => 'El campo ":attribute" debe ser menor que o igual a :value.',
        'file' => 'El campo ":attribute" debe ser menor que o igual a :value kilobytes.',
        'string' => 'El campo ":attribute" debe tener una longitud menor que o igual a :value characters.',
        'array' => 'El campo ":attribute" no debe contener más que :value items.',
    ],
    'max' => [
        'numeric' => 'El campo ":attribute" no puede ser mayor que :max.',
        'file' => 'El campo ":attribute" no puede ser mayor a :max kilobytes.',
        'string' => 'El campo ":attribute" no puede tener una longitud mayor a :max characters.',
        'array' => 'El campo ":attribute" no puede contener más que :max items.',
    ],
    'mimes' => 'El campo ":attribute" debe ser un archivo de tipo: :values.',
    'mimetypes' => 'El campo ":attribute" debe ser un archivo de tipo: :values.',
    'min' => [
        'numeric' => 'El campo ":attribute" no puede ser menor que :min.',
        'file' => 'El campo ":attribute" no puede ser menor que :min kilobytes.',
        'string' => 'El campo ":attribute" no puede tener una longitud menor a :min characters.',
        'array' => 'El campo ":attribute" debe contener como mínimo :min items.',
    ],
    'not_in' => 'El campo ":attribute" elegido es inválido.',
    'not_regex' => 'El formato de ":attribute" es inválido.',
    'numeric' => 'El campo ":attribute" debe ser un número.',
    'password' => 'La contraseña es incorrecta.',
    'present' => 'El campo ":attribute" debe estar presente.',
    'regex' => 'El formato de ":attribute" es inválido.',
    'required' => 'El campo ":attribute" es obligatorio.',
    'required_if' => 'El campo ":attribute" es obligatorio cuando :other es :value.',
    'required_unless' => 'El campo ":attribute" es obligatorio a menos que :other se encuentra en :values.',
    'required_with' => 'El campo ":attribute" es obligatorio cuando :values está presente.',
    'required_with_all' => 'El campo ":attribute" es obligatorio cuando :values están presentes.',
    'required_without' => 'El campo ":attribute" es obligatorio cuando :values no está presente.',
    'required_without_all' => 'El campo ":attribute" es obligatorio cuando ninguno de los valores :values están presentes.',
    'same' => 'El campo ":attribute" y :other deben coincidir.',
    'size' => [
        'numeric' => 'El campo ":attribute" debe ser :size.',
        'file' => 'El campo ":attribute" debe pesar :size kilobytes.',
        'string' => 'El campo ":attribute" debe tener una longitud igual a :size characters.',
        'array' => 'El campo ":attribute" debe contener :size items.',
    ],
    'starts_with' => 'El campo ":attribute" debe comenzar con uno de los siguientes valores: :values.',
    'string' => 'El campo ":attribute" debe ser una cadena.',
    'timezone' => 'El campo ":attribute" debe ser una zona válida.',
    'unique' => 'El campo ":attribute" ya fue tomado.',
    'uploaded' => 'El campo ":attribute" falló en subirse.',
    'url' => 'El formato de ":attribute" es inválido.',
    'uuid' => 'El campo ":attribute" debe ser un UUID válido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'name' => 'nombre',
        'email' => 'correo electrónico',
        'password' => 'contraseña'
    ],

];
